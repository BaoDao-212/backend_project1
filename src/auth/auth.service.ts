import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { JsonWebTokenError, sign, verify } from 'jsonwebtoken';
import {
  ACCESS_TOKEN_EXPIRED_IN,
  ACCESS_TOKEN_SECRET,
} from 'src/common/constants/constants';
import { createError } from 'src/common/utils/createError';
import { MaGiamGia } from 'src/donhang/entities/magiamgia.entity';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import {
  LoginInput,
  LoginOutput,
  NewAccessTokenInput,
  NewAccessTokenOutput,
  RegisterUserInput,
  RegisterUserOutput,
  ChangePasswordInput,
  ChangePasswordOutput,
} from './dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private readonly userRepo: Repository<User>,
    @InjectRepository(MaGiamGia)
    private readonly MaGiamGiaRepo: Repository<MaGiamGia>,
    private readonly configService: ConfigService,
  ) {}

  // TODO: thêm kiểm tra opt gửi về điện thoại
  async registerUser({
    soDienThoai,
    matKhau,
    matKhauLapLai,
    ten,
  }: RegisterUserInput): Promise<RegisterUserOutput> {
    try {
      if (matKhau !== matKhauLapLai)
        return createError('Input', 'Mật khẩu lặp lại không khớp');
      const user = await this.userRepo.findOne({
        where: {
          soDienThoai,
        },
      });
      if (user) return createError('Input', 'Tài khoản đã được đăng kí');
      const maGiamGia = await this.MaGiamGiaRepo.findOne({
        where: {
          codeVoucher: 'FreeNewUser',
        },
      });
      if (!maGiamGia) return createError('Input', 'l');
      const userH = this.userRepo.create({
        soDienThoai,
        ten,
        matKhau,
        daDangKi: true,
        gioiTinh: 'Nam',
        maGiamGia: [maGiamGia],
      });

      await this.userRepo.save(userH);
      return {
        ok: true,
      };
    } catch (error) {
      console.log(error);
      return createError('Server', 'Lỗi server, thử lại sau');
    }
  }

  async login({ soDienThoai, matKhau }: LoginInput): Promise<LoginOutput> {
    try {
      const user = await this.userRepo.findOne({
        where: {
          soDienThoai,
        },
        select: ['id', 'matKhau', 'daDangKi'],
      });
      if (!user) return createError('Input', 'Số điện thoại không phù hợp');
      if (!(await user.checkPassword(matKhau)))
        return createError('Input', 'Mật khẩu không đúng');
      const accessToken = sign(
        {
          userId: user.id,
        },
        this.configService.get<string>(ACCESS_TOKEN_SECRET),
        {
          expiresIn: this.configService.get<string>(ACCESS_TOKEN_EXPIRED_IN),
        },
      );
      return {
        ok: true,
        accessToken,
      };
    } catch (error) {
      console.log(error);

      return createError('Server', 'Lỗi server, thử lại sau');
    }
  }

  async newAccessToken({
    accessToken,
  }: NewAccessTokenInput): Promise<NewAccessTokenOutput> {
    try {
      const decoded = verify(
        accessToken,
        this.configService.get<string>(ACCESS_TOKEN_SECRET),
      );
      if (!decoded || !decoded['userId']) throw new JsonWebTokenError('');
      const newAccessToken = sign(
        {
          userId: decoded['userId'],
        },
        this.configService.get<string>(ACCESS_TOKEN_SECRET),
        {
          expiresIn: this.configService.get<string>(ACCESS_TOKEN_EXPIRED_IN),
        },
      );
      return {
        ok: true,
        accessToken: newAccessToken,
      };
    } catch (err) {
      if (err instanceof JsonWebTokenError)
        return createError('accessToken', 'Người dùng không hợp lệ!');
      return createError('Server', 'Lỗi server, thử lại sau');
    }
  }

  async changePassword(
    currentUser: User,
    input: ChangePasswordInput,
  ): Promise<ChangePasswordOutput> {
    try {
      const { matKhauCu, matKhauMoi, matKhauMoiLapLai } = input;
      const user = await this.userRepo.findOne({
        where: { id: currentUser.id },
        select: ['matKhau', 'id'],
      });

      //kiem tra User ton tai khong
      if (!user) createError('Input', 'Người dùng không tồn tại');

      //kiem tra mat khau hien tai dung hay khong
      if (!(await user.checkPassword(matKhauCu)))
        return createError('Input', 'Mật khẩu hiện tại không đúng');

      //Kiem tra mat khau moi va mat khau nhap lai co trung nhau hay khong
      if (matKhauMoi !== matKhauMoiLapLai)
        return createError('Input', 'Mật khẩu lặp lại không khớp');

      //kiem tra mat khau cu va mat khau moi co trung nhau khong
      if (await user.checkPassword(matKhauMoi))
        return createError(
          'Input',
          'Mật khẩu mới không được trùng mật khẩu cũ',
        );

      user.matKhau = matKhauMoi;
      await this.userRepo.save(user);
      return {
        ok: true,
      };
    } catch (error) {
      return createError('Server', 'Lỗi server, thử lại sau');
    }
  }

  // TODO: Triển khai quên mật khẩu (khi chọn được dịch vụ SMS phù hợp)
}
