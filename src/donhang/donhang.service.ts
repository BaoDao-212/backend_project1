import { async } from '@firebase/util';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IsDefined } from 'class-validator';
import { Console } from 'console';
import { omitBy } from 'lodash';
import { SortOrder } from 'src/common/entities/core.entity';
import { createError } from 'src/common/utils/createError';
import { MaGiamGia } from 'src/donhang/entities/magiamgia.entity';
import { SanPham, TrangThai } from 'src/sanpham/entities/sanpham.entity';
import { User } from 'src/user/entities/user.entity';
import { ILike, In, Repository } from 'typeorm';
import {
  AddDonHangInput,
  AddDonHangOutput,
  XemDanhSachDonHangInput,
  XemDanhSachDonHangOutput,
  XemThongTinDonHangChoQuanLiInput,
  XemThongTinDonHangChoQuanLiOutput,
} from './dto/donhang.dto';
import { DonHang, HinhThucMua } from './entities/donhang.entity';

@Injectable()
export class DonHangService {
  constructor(
    @InjectRepository(DonHang)
    private readonly DonHangRepo: Repository<DonHang>,
    @InjectRepository(SanPham)
    private readonly SanPhamRepo: Repository<SanPham>,
    @InjectRepository(MaGiamGia)
    private readonly MaGiamGiaRepo: Repository<MaGiamGia>,
  ) {}

  // quản lí thêm người dùng
  async addDonHang(
    input: AddDonHangInput,
    user: User,
  ): Promise<AddDonHangOutput> {
    try {
      const { hinhThucMua, codeVoucher, diaChi, PhiShip } = input;
      const maGiamGia = await this.MaGiamGiaRepo.findOne({
        where: {
          codeVoucher: codeVoucher,
        },
      });
      if (codeVoucher && maGiamGia && maGiamGia.endDate < new Date())
        return createError('Input', 'Mã giảm giá đã hết hạn');
      let tongTienPhaiTra = PhiShip;
      const sanPhamId = input.sanPham.map((sp) => sp.sanPhamId);
      sanPhamId.sort;
      const sanPham = await this.SanPhamRepo.find({
        where: {
          id: In(sanPhamId),
        },
      });
      const soluong = [];
      if (!sanPham || sanPham.length == 0)
        return createError('Input', 'Sản phẩm không hợp lệ');
      sanPham.forEach((sp, index) => {
        soluong.push(input.sanPham[index].numberSanPham);
        tongTienPhaiTra += sp.soTien * input.sanPham[index].numberSanPham;
      });
      if (codeVoucher && maGiamGia && tongTienPhaiTra < maGiamGia.minAmount)
        return createError('Input', 'Số tiền tối thiểu không đạt yêu cầu');
      if (codeVoucher && maGiamGia) tongTienPhaiTra -= maGiamGia.voucherAmount;
      let ghiChu = '';
      if (hinhThucMua == HinhThucMua.MangVe)
        ghiChu += 'Phí ship: ' + PhiShip + '. Địa chỉ: ' + diaChi;
      else {
        if (PhiShip)
          return createError(
            'Input',
            'Khách hàng đang không có yêu cầu ship hàng',
          );
      }
      console.log(sanPham);
      await this.DonHangRepo.save(
        this.DonHangRepo.create({
          sanPham,
          soluong,
          ghiChu,
          tongTienPhaiTra,
          hinhThucMua,
          ngayMua: new Date(),
          nguoiMua: user,
          maGiamGia: maGiamGia!,
        }),
      );
    } catch (error) {
      console.log(error);
      return createError('Server', 'Lỗi server, thử lại sau');
    }
    return {
      ok: true,
    };
  }

  async xemThongTinDonHangChoQuanLi(
    input: XemThongTinDonHangChoQuanLiInput,
  ): Promise<XemThongTinDonHangChoQuanLiOutput> {
    try {
      const DonHang = await this.DonHangRepo.findOne({
        where: { id: input.DonHangId },
        relations: {
          sanPham: true,
          nguoiMua: true,
        },
      });
      if (!DonHang) return createError('Input', 'Đơn hàng không tồn tại');
      // console.log(DonHang.sanPham);
      return {
        ok: true,
        DonHang,
      };
    } catch (error) {
      console.log(error);
      return createError('Server', 'Lỗi server, thử lại sau');
    }
  }

  async xemDanhSachDonHang(
    input: XemDanhSachDonHangInput,
  ): Promise<XemDanhSachDonHangOutput> {
    try {
      const {
        ngayMua,
        paginationInput: { page, resultsPerPage },
      } = input;
      const [DonHangs, totalResults] = await this.DonHangRepo.findAndCount({
        where: {
          ngayMua: ngayMua,
        },
        skip: (page - 1) * resultsPerPage, // bỏ qua bao nhiêu bản ghi
        take: resultsPerPage, // lấy bao nhiêu bản ghi
        order: {
          updatedAt: SortOrder.DESC,
        }, // sắp xếp theo giá trị của trường cụ thể tuỳ mọi người truyền vào sao cho hợp lệ
      });
      return {
        ok: true,
        DonHangs,
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
