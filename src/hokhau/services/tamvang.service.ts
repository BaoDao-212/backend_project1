import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { createError } from 'src/common/utils/createError';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import {
  AddTamVangInput,
  AddTamVangOutput,
  xemThongTinTamVangOutput,
} from '../dtos/tamvang.dto';
import { HoKhau } from '../entities/hokhau.entity';
import { LichSuHoKhau } from '../entities/lichsuhokhau.entity';
import { TamVang } from '../entities/tamvang.entity';

@Injectable()
export class TamVangService {
  constructor(
    @InjectRepository(TamVang)
    private readonly TamVangRepo: Repository<TamVang>,
    @InjectRepository(User) private readonly userRepo: Repository<User>,
  ) {}

  //    quản lý thêm tạm vắng
  async addTamVang(
    nguoiPheDuyet: User,
    input: AddTamVangInput,
  ): Promise<AddTamVangOutput> {
    try {
      const { nguoiTamVangId, lyDoTamVang, diaChiNoiDen } = input;


      const user = await this.userRepo.findOne({
        where: { id: nguoiTamVangId },
      });
      // kiểm tra người này có đang ở trong khu dân cư chưa
      if (!user)
        return createError('Input', 'Người này không có trong khu dân phố');

      // kiểm tra người này có phải chủ hộ hay không
      if (user.vaiTroThanhVien == 'Chủ hộ') return createError("input","Cần chuyển vai trò thành viên của người này");
      // kiểm tra người này có phải đã có hổ khẩu cư trú ở đây chưa
      if (!user.hoKhauId)
        return createError(
          'Input',
          'Người này không thường trú trong khu dân phố này',
        );

      // kiểm tra người đó đã tồn tại trong bảng tạm vắng hay chưa
      const TamVang = await this.TamVangRepo.findOne({
        where: {
          nguoiTamVang: {
            id: user.id,
          },
        },
      });
      if (TamVang)
        return createError('Input', 'Người này đã được thêm tạm vắng');

      await this.TamVangRepo.save(
        this.TamVangRepo.create({
          nguoiPheDuyet,
          nguoiTamVang: user,
          ngayBatDauTamVang: new Date(),
          lyDoTamVang,
          diaChiNoiDen,
        }),
      );
      return {
        ok: true,
      };
    } catch (error) {
      return createError('Input', 'Lỗi server,thử lại sau');
    }
  }
  async xemThongTinTamVang(
    currentUser: User,
  ): Promise<xemThongTinTamVangOutput> {
    try {
      const tamvang = await this.TamVangRepo.findOne({
        where: {
          nguoiTamVang: {
            id: currentUser.id,
          },
        },
      });
      if (!tamvang)
        return createError(
          'Input',
          'Người dùng không tồn tại trong bảng tạm vắng',
        );
      return {
        ok: true,
      };
    } catch (error) {
      return createError('Server', 'Lỗi server, thử lại sau');
    }
  }
}
