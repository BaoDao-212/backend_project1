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
import { User, VaitroNguoiDung } from 'src/user/entities/user.entity';
import { ILike, In, Repository } from 'typeorm';
import {
  AddDonHangChoUserInput,
  AddDonHangInput,
  AddDonHangOutput,
  EditDonHangInput,
  EditDonHangOutput,
  XemDanhSachDonHangInput,
  XemDanhSachDonHangOutput,
  XemThongTinDonHangChoQuanLiInput,
  XemThongTinDonHangChoQuanLiOutput,
} from './dto/donhang.dto';
import {
  DonHang,
  HinhThucMua,
  TrangThaiDonHang,
} from './entities/donhang.entity';

@Injectable()
export class DonHangService {
  constructor(
    @InjectRepository(DonHang)
    private readonly DonHangRepo: Repository<DonHang>,
    @InjectRepository(SanPham)
    private readonly SanPhamRepo: Repository<SanPham>,
    @InjectRepository(MaGiamGia)
    private readonly MaGiamGiaRepo: Repository<MaGiamGia>,
    @InjectRepository(User)
    private readonly UserRepo: Repository<User>,
  ) {}

  // thêm đơn hàng cho nhân viên
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
      if (hinhThucMua == HinhThucMua.NgoiTaiQuan && PhiShip > 0)
        return createError('Input', 'Phí ship không hợp lệ');
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
          trangThaiDonHang: TrangThaiDonHang.Oke,
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
  // thêm đơn hàng cho nhân viên
  async addDonHangChoUser(
    input: AddDonHangChoUserInput,
    user: User,
  ): Promise<AddDonHangOutput> {
    try {
      const { hinhThucMua, codeVoucher, diaChi, soDienThoai } = input;
      const maGiamGia = await this.MaGiamGiaRepo.findOne({
        where: {
          codeVoucher: codeVoucher,
        },
      });

      let phiShip = 30000;
      if (hinhThucMua == HinhThucMua.NgoiTaiQuan) phiShip = 0;
      if (codeVoucher && maGiamGia && maGiamGia.endDate < new Date())
        return createError('Input', 'Mã giảm giá đã hết hạn');
      let tongTienPhaiTra = phiShip;
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
        ghiChu +=
          'Số điện thoại: ' +
          soDienThoai +
          'Phí ship: ' +
          phiShip +
          '. Địa chỉ: ' +
          diaChi;

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
          trangThaiDonHang: TrangThaiDonHang.ChoPheDuyet,
        }),
      );
      if (maGiamGia)
        user.maGiamGia.filter(
          (item) => !maGiamGia.codeVoucher.includes(item.codeVoucher),
        );
    } catch (error) {
      console.log(error);
      return createError('Server', 'Lỗi server, thử lại sau');
    }
    return {
      ok: true,
    };
  }

  async editDonHang(input: EditDonHangInput): Promise<EditDonHangOutput> {
    try {
      const { donHangId } = input;
      const DonHang = await this.DonHangRepo.findOne({
        where: {
          id: donHangId,
        },
        relations: {
          sanPham: true,
        },
      });
      if (!DonHang) return createError('Input', 'Đơn hàng không tồn tại');
      DonHang.trangThaiDonHang = TrangThaiDonHang.Oke;
      this.DonHangRepo.save(DonHang);
      return {
        ok: true,
      };
    } catch (error) {
      return createError('Server', 'Lỗi server, thử lại sau');
    }
  }

  async xemThongTinDonHangChoQuanLi(
    currentUser: User,
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
      if (DonHang.nguoiMua.id != currentUser.id)
        return createError('Input', 'Yêu cầu không hợp lệ');
      if (!DonHang) return createError('Input', 'Đơn hàng không tồn tại');
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
    currentUser: User,
    input: XemDanhSachDonHangInput,
  ): Promise<XemDanhSachDonHangOutput> {
    try {
      const {
        paginationInput: { page, resultsPerPage },
      } = input;

      const [DonHangs, totalResults] = await this.DonHangRepo.findAndCount({
        relations: {
          nguoiMua: true,
          sanPham: true,
        },
        skip: (page - 1) * resultsPerPage, // bỏ qua bao nhiêu bản ghi
        take: resultsPerPage, // lấy bao nhiêu bản ghi
        order: {
          updatedAt: SortOrder.DESC,
        }, // sắp xếp theo giá trị của trường cụ thể tuỳ mọi người truyền vào sao cho hợp lệ
      });
      const donHang = DonHangs.filter(function (dh) {
        return (
          (dh.trangThaiDonHang == TrangThaiDonHang.ChoPheDuyet &&
            currentUser.vaiTroNguoiDung == VaitroNguoiDung.NhanVien) ||
          currentUser.vaiTroNguoiDung == VaitroNguoiDung.QuanLy ||
          (currentUser.vaiTroNguoiDung == VaitroNguoiDung.KhachHang &&
            dh.nguoiMua.id == currentUser.id)
        );
      });
      return {
        ok: true,
        DonHangs: donHang,
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
