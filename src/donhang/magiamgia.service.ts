import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SortOrder } from 'src/common/entities/core.entity';
import { createError } from 'src/common/utils/createError';
import { TrangThai } from 'src/sanpham/entities/sanpham.entity';
import { ILike, Repository } from 'typeorm';
import {
  AddMaGiamGiaInput,
  AddMaGiamGiaOutput,
  XemDanhSachMaGiamGiaInput,
  XemDanhSachMaGiamGiaOutput,
  XemThongTinMaGiamGiaChoQuanLiInput,
  XemThongTinMaGiamGiaOutput,
} from './dto/magiamgia.dto';
import { MaGiamGia } from './entities/magiamgia.entity';

@Injectable()
export class MaGiamGiaService {
  constructor(
    @InjectRepository(MaGiamGia)
    private readonly MaGiamGiaRepo: Repository<MaGiamGia>,
  ) {}

  // quản lí thêm người dùng
  async addMaGiamGia(input: AddMaGiamGiaInput): Promise<AddMaGiamGiaOutput> {
    try {
      const {
        codeVoucher,
        endDate,
        minAmount,
        startDate,
        typeDiscount,
        voucherAmount,
      } = input;
      if (endDate < startDate)
        return createError(
          'Input',
          'Ngày bắt đầu và ngày hết hạn không hợp lệ',
        );
      const magiamgia = await this.MaGiamGiaRepo.findOne({
        where: {
          codeVoucher: codeVoucher,
        },
      });
      if (magiamgia)
        return createError(
          'Input',
          'Mã giảm giá đã trùng tên với mã trước đây',
        );
      if (voucherAmount > minAmount)
        return createError('Input', 'Số tiền giảm giá không hợp lệ');
      await this.MaGiamGiaRepo.save(this.MaGiamGiaRepo.create({ ...input }));
    } catch (error) {
      return createError('Server', 'Lỗi server, thử lại sau');
    }
    return {
      ok: true,
    };
  }

  // xem thông tin voucher cho quản lí
  async xemThongTinMaGiamGiaChoQuanLi(
    input: XemThongTinMaGiamGiaChoQuanLiInput,
  ): Promise<XemThongTinMaGiamGiaOutput> {
    try {
      const magiamgia = await this.MaGiamGiaRepo.findOne({
        where: { id: input.maGiamGiaId },
      });
      if (!magiamgia) return createError('Input', 'Người dùng không tồn tại');
      return {
        ok: true,
        maGiamGia: magiamgia,
      };
    } catch (error) {
      return createError('Server', 'Lỗi server, thử lại sau');
    }
  }

  // xem danh sach voucher cho quan li
  async xemDanhSachMaGiamGia(
    input: XemDanhSachMaGiamGiaInput,
  ): Promise<XemDanhSachMaGiamGiaOutput> {
    try {
      const {
        codeVoucher,
        paginationInput: { page, resultsPerPage },
      } = input;
      const [maGiamGias, totalResults] = await this.MaGiamGiaRepo.findAndCount({
        where: {
          codeVoucher: codeVoucher ? ILike(`%${codeVoucher}%`) : undefined,
        },
        skip: (page - 1) * resultsPerPage, // bỏ qua bao nhiêu bản ghi
        take: resultsPerPage, // lấy bao nhiêu bản ghi
        order: {
          updatedAt: SortOrder.DESC,
        }, // sắp xếp theo giá trị của trường cụ thể tuỳ mọi người truyền vào sao cho hợp lệ
      });
      return {
        ok: true,
        maGiamGias,
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
