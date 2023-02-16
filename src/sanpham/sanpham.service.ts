import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { omitBy } from 'lodash';
import { SortOrder } from 'src/common/entities/core.entity';
import { createError } from 'src/common/utils/createError';
import { User } from 'src/user/entities/user.entity';
import { ILike, Repository } from 'typeorm';
import {
  AddSanPhamInput,
  AddSanPhamOutput,
  EditSanPhamInput,
  EditSanPhamOutput,
  XemDanhSachSanPhamInput,
  XemDanhSachSanPhamOutput,
  XemThongTinSanPhamInput,
  XemThongTinSanPhamOutput,
} from './dto/sanpham.dto';
import { SanPham } from './entities/sanpham.entity';

@Injectable()
export class SanPhamService {
  constructor(
    @InjectRepository(SanPham)
    private readonly sanphamRepo: Repository<SanPham>,
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
  ) {}

  // quản lí thêm sản phẩm
  async addSanPham(input: AddSanPhamInput): Promise<AddSanPhamOutput> {
    try {
      const sanPham = await this.sanphamRepo.findOne({
        where: {
          ten: input.ten,
        },
      });
      if (sanPham) return createError('Input', 'Mặt hàng này đã tồn tại');

      await this.sanphamRepo.save(
        this.sanphamRepo.create({ ...input, ngayTao: new Date() }),
      );
    } catch (error) {
      console.log(error);
      return createError('Server', 'Lỗi server, thử lại sau');
    }
    return {
      ok: true,
    };
  }

  // xem thông tin sản phẩm cho người dùng thông thường
  async xemThongTinSanPham(
    input: XemThongTinSanPhamInput,
  ): Promise<XemThongTinSanPhamOutput> {
    try {
      const sanpham = await this.sanphamRepo.findOne({
        where: { id: input.SanPhamId },
      });
      if (!sanpham) return createError('Input', 'Sản phẩm không tồn tại');
      return {
        ok: true,
        sanpham,
      };
    } catch (error) {
      return createError('Server', 'Lỗi server, thử lại sau');
    }
  }

  async editSanPham(input: EditSanPhamInput): Promise<EditSanPhamOutput> {
    try {
      const { sanPhamId } = input;
      const sanPham = await this.sanphamRepo.findOne({
        where: {
          id: sanPhamId,
        },
      });
      if (!sanPham) return createError('Input', 'Sản phẩm này không hợp lệ');

      // ghi đè các trường input không bị null hoặc undefined vào trong nguoiYeuCau

      const updateSanPham = {
        ...sanPham,
        ...omitBy(input, (v) => v == null || v == undefined),
      };
      this.sanphamRepo.save(updateSanPham);
      return {
        ok: true,
      };
    } catch (error) {
      return createError('Server', 'Lỗi server, thử lại sau');
    }
  }

  // xem danh sach nguoi dung cho quan li
  async xemDanhSachSanPham(
    input: XemDanhSachSanPhamInput,
  ): Promise<XemDanhSachSanPhamOutput> {
    try {
      const {
        paginationInput: { page, resultsPerPage },
        tenSanPham,
      } = input;

      const [sanPhams, totalResults] = await this.sanphamRepo.findAndCount({
        where: {
          ten: tenSanPham ? ILike(`%${tenSanPham}%`) : undefined,
        },
        skip: (page - 1) * resultsPerPage, // bỏ qua bao nhiêu bản ghi
        take: resultsPerPage, // lấy bao nhiêu bản ghi
        order: {
          ngayTao: SortOrder.DESC,
        }, // sắp xếp theo giá trị của trường cụ thể tuỳ mọi người truyền vào sao cho hợp lệ
      });

      console.log(await this.sanphamRepo.find());
      console.log(sanPhams);
      return {
        ok: true,
        sanPhams,
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
