import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { ACCESS_TOKEN_EXPIRED_IN, ACCESS_TOKEN_SECRET } from 'src/common/constants/constants';
import { createError } from 'src/common/utils/createError';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { LoginInput, LoginOutput, NewAccessTokenInput, NewAccessTokenOutput, RegisterUserInput, RegisterUserOutput } from './dto/auth.dto';
import { sign, verify, JsonWebTokenError } from 'jsonwebtoken'

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
    private readonly configService: ConfigService,
  ) { }
  async registerUser({
    canCuocCongDan,
    matKhau,
    matKhauLapLai,
  }: RegisterUserInput): Promise<RegisterUserOutput> {
    try {
      if (matKhau !== matKhauLapLai)
        return createError('Input', "Mật khẩu lặp lại không khớp");
      const user = await this.userRepo.findOne({
        where: {
          canCuocCongDan
        },
      });
      if (!user) return createError('Input', "So can cuoc cong dan khong phu hop");
      user.matKhau = matKhau;
      user.daDangKi = true;
      await this.userRepo.save(user);
      return {
        ok: true,
      };
    } catch (error) {
      return createError('Server', 'Loi server, thu lai sau');
    }
  }
  async login({ canCuocCongDan, matKhau }: LoginInput): Promise<LoginOutput> {
    try {
      const user = await this.userRepo.findOne({
        where: {
          canCuocCongDan,
        },
        select: ['id', 'matKhau', 'daDangKi'],
      });
      if (!user) return createError('Input', "Khong ton tai nguoi nay");
      if (!user.daDangKi) return createError('Input', 'so can cuoc cong dan chua duoc dang ki tai khoan');
      console.log(await user.checkPassword(matKhau));
      if (!(await user.checkPassword(matKhau)))
        return createError('Input', 'Mật khẩu không hợp lệ');
      console.log(await user.checkPassword(matKhau));
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
      return createError('Server', 'Loi server, thu lai sau');
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
          expires: this.configService.get<string>(ACCESS_TOKEN_EXPIRED_IN),
        },
      );
    } catch (error) {
      if (error instanceof JsonWebTokenError)
        return createError('accessToken', 'Người dùng không hợp lệ!');
      return createError('Server', 'Lỗi server, thử lại sau');
    }
  }
}
