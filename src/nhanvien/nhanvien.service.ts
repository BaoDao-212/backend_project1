import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { omitBy } from 'lodash';
import { SortOrder } from 'src/common/entities/core.entity';
import { createError } from 'src/common/utils/createError';
import { ILike, Repository } from 'typeorm';
import {
  AddNhanVienInput,
  AddNhanVienOutput,
  EditNhanVienInput,
  EditNhanVienOutput,
  XemDanhSachNhanVienInput,
  XemDanhSachNhanVienOutput,
  XemThongTinNhanVienChoQuanLiInput,
  XemThongTinNhanVienOutput,
} from './dto/nhanvien.dto';
import { NhanVien } from './entities/nhanvien.entity';

@Injectable()
export class NhanVienService {
  constructor(
    @InjectRepository(NhanVien)
    private readonly NhanVienRepo: Repository<NhanVien>,
  ) {}

  // quản lí thêm người dùng
  async addNhanVien(input: AddNhanVienInput): Promise<AddNhanVienOutput> {
    try {
      const NhanVien = await this.NhanVienRepo.findOne({
        where: {
          canCuocCongDan: input.canCuocCongDan,
        },
      });
      if (NhanVien) return createError('Input', 'Đã tồn tại nhân viên này');
      await this.NhanVienRepo.save(this.NhanVienRepo.create({ ...input }));
    } catch (error) {
      return createError('Server', 'Lỗi server, thử lại sau');
    }
    return {
      ok: true,
    };
  }

  // xem thông tin người dùng cho người dùng thông thường
  async xemThongTinNhanVien(
    currentNhanVien: NhanVien,
  ): Promise<XemThongTinNhanVienOutput> {
    try {
      const nhanVien = await this.NhanVienRepo.findOne({
        where: { id: currentNhanVien.id },
      });
      if (!nhanVien) return createError('Input', 'Người dùng không tồn tại');
      return {
        ok: true,
        nhanVien,
      };
    } catch (error) {
      return createError('Server', 'Lỗi server, thử lại sau');
    }
  }

  // xem thông tin người dùng cho quản lí
  async xemThongTinNhanVienChoQuanLi(
    input: XemThongTinNhanVienChoQuanLiInput,
  ): Promise<XemThongTinNhanVienOutput> {
    try {
      const nhanVien = await this.NhanVienRepo.findOne({
        where: { id: input.NhanVienId },
      });
      if (!nhanVien) return createError('Input', 'Người dùng không tồn tại');
      return {
        ok: true,
        nhanVien,
      };
    } catch (error) {
      return createError('Server', 'Lỗi server, thử lại sau');
    }
  }
  async editNhanVien(input: EditNhanVienInput): Promise<EditNhanVienOutput> {
    try {
      // ghi đè các trường input không bị null hoặc undefined vào trong nguoiYeuCau
      const updateNhanVien = {
        ...omitBy(input, (v) => v == null || v == undefined),
      };
      this.NhanVienRepo.save(updateNhanVien);
      return {
        ok: true,
      };
    } catch (error) {
      return createError('Server', 'Lỗi server, thử lại sau');
    }
  }

  // xem danh sach nguoi dung cho quan li
  async xemDanhSachNhanVien(
    input: XemDanhSachNhanVienInput,
  ): Promise<XemDanhSachNhanVienOutput> {
    try {
      const {
        canCuocCongDan,
        soDienThoai,
        paginationInput: { page, resultsPerPage },
      } = input;
      const [nhanViens, totalResults] = await this.NhanVienRepo.findAndCount({
        where: {
          canCuocCongDan: canCuocCongDan
            ? ILike(`%${canCuocCongDan}%`)
            : undefined,
          nhanVien: {
            soDienThoai: soDienThoai ? ILike(`%${soDienThoai}%`) : undefined,
          },
        },
        skip: (page - 1) * resultsPerPage, // bỏ qua bao nhiêu bản ghi
        take: resultsPerPage, // lấy bao nhiêu bản ghi
        order: {
          updatedAt: SortOrder.DESC,
        }, // sắp xếp theo giá trị của trường cụ thể tuỳ mọi người truyền vào sao cho hợp lệ
      });
      return {
        ok: true,
        nhanViens,
        paginationOutput: {
          totalResults,
          totalPages: Math.ceil(totalResults / resultsPerPage),
        },
      };
    } catch (error) {
      return createError('Server', 'Lỗi server, thử lại sau');
    }
  }
}
