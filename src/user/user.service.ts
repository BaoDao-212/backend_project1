import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { compare } from 'bcrypt';
import { omitBy } from 'lodash';
import { SortOrder } from 'src/common/entities/core.entity';
import { createError } from 'src/common/utils/createError';
import { XemDanhSachMaGiamGiaOutput } from 'src/donhang/dto/magiamgia.dto';
import { DonHang } from 'src/donhang/entities/donhang.entity';
import { MaGiamGia } from 'src/donhang/entities/magiamgia.entity';
import { NhanVien } from 'src/nhanvien/entities/nhanvien.entity';
import { SanPham, TrangThai } from 'src/sanpham/entities/sanpham.entity';
import { ILike, Repository, IsNull, In, LessThan, MoreThan } from 'typeorm';
import {
  AddUserInput,
  AddUserOutput,
  EditUserInput,
  EditUserOutput,
  ThongKeOuput,
  XemDanhSachMaGiamGiaChoUserOutput,
  XemDanhSachNguoiDungInput,
  XemDanhSachNguoiDungOutput,
  XemThongTinNguoiDungChoQuanLiInput,
  XemThongTinNguoiDungOutput,
} from './dto/user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
    @InjectRepository(NhanVien)
    private readonly NhanVienRepo: Repository<NhanVien>,
    @InjectRepository(SanPham)
    private readonly SanPhamRepo: Repository<SanPham>,
    @InjectRepository(MaGiamGia)
    private readonly MaGiamGiaRepo: Repository<MaGiamGia>,
    @InjectRepository(DonHang)
    private readonly DonHangRepo: Repository<DonHang>,
  ) {}

  // quản lí thêm người dùng
  async addUser(input: AddUserInput): Promise<AddUserOutput> {
    try {
      const user = await this.userRepo.findOne({
        where: {
          soDienThoai: input.soDienThoai,
        },
      });
      if (user) return createError('Input', 'Đã tồn tại số điện thoại này');

      await this.userRepo.save(this.userRepo.create({ ...input }));
    } catch (error) {
      return createError('Server', 'Lỗi server, thử lại sau');
    }
    return {
      ok: true,
    };
  }

  // xem thông tin người dùng cho người dùng thông thường
  async xemThongTinNguoiDung(
    currentUser: User,
  ): Promise<XemThongTinNguoiDungOutput> {
    try {
      const user = await this.userRepo.findOne({
        where: { id: currentUser.id },
      });
      if (!user) return createError('Input', 'Người dùng không tồn tại');
      return {
        ok: true,
        user,
      };
    } catch (error) {
      return createError('Server', 'Lỗi server, thử lại sau');
    }
  }

  // xem thông tin người dùng cho quản lí
  async xemThongTinNguoiDungChoQuanLi(
    input: XemThongTinNguoiDungChoQuanLiInput,
  ): Promise<XemThongTinNguoiDungOutput> {
    try {
      const user = await this.userRepo.findOne({
        where: { id: input.userId },
      });
      if (!user) return createError('Input', 'Người dùng không tồn tại');
      const donHang = await this.DonHangRepo.find({
        where: {
          nguoiMua: {
            id: user.id,
          },
        },
      });
      const soLuongDonHang = donHang.length;
      const tongTienDaMua = donHang
        .map((dh) => dh.tongTienPhaiTra)
        .reduce((a, b) => a + b, 0);

      return {
        ok: true,
        user,
        tongTienDaMua,
        soLuongDonHang,
      };
    } catch (error) {
      return createError('Server', 'Lỗi server, thử lại sau');
    }
  }
  async editUser(input: EditUserInput): Promise<EditUserOutput> {
    try {
      const { nguoiCanEditId } = input;
      const nguoiCanEdit = await this.userRepo.findOne({
        where: {
          id: nguoiCanEditId,
        },
      });
      if (!nguoiCanEdit)
        return createError('Input', 'Người yêu cầu không hợp lệ');

      // ghi đè các trường input không bị null hoặc undefined vào trong nguoiYeuCau

      const updateUser = {
        ...nguoiCanEdit,
        ...omitBy(input, (v) => v == null || v == undefined),
      };
      this.userRepo.save(updateUser);
      return {
        ok: true,
      };
    } catch (error) {
      return createError('Server', 'Lỗi server, thử lại sau');
    }
  }

  // xem danh sach nguoi dung cho quan li
  async xemDanhSachNguoiDung(
    input: XemDanhSachNguoiDungInput,
  ): Promise<XemDanhSachNguoiDungOutput> {
    try {
      const {
        paginationInput: { page, resultsPerPage },
        hoTen,
        soDienThoai,
      } = input;
      const [users, totalResults] = await this.userRepo.findAndCount({
        where: {
          ten: hoTen ? ILike(`%${hoTen}%`) : undefined,
          soDienThoai: soDienThoai ? ILike(`%${soDienThoai}%`) : undefined,
        },
        skip: (page - 1) * resultsPerPage, // bỏ qua bao nhiêu bản ghi
        take: resultsPerPage, // lấy bao nhiêu bản ghi
        order: {
          updatedAt: SortOrder.DESC,
        }, // sắp xếp theo giá trị của trường cụ thể tuỳ mọi người truyền vào sao cho hợp lệ
      });
      return {
        ok: true,
        users,
        paginationOutput: {
          totalResults,
          totalPages: Math.ceil(totalResults / resultsPerPage),
        },
      };
    } catch (error) {
      return createError('Server', 'Lỗi server, thử lại sau');
    }
  }
  async thongKeChoQuanLy(): Promise<ThongKeOuput> {
    try {
      const numberOfUser = await this.userRepo.count();
      const [nhanvien, numberOfNhanVien] =
        await this.NhanVienRepo.findAndCount();
      const numberOfSanPham = await this.SanPhamRepo.count({
        where: {
          trangThai: TrangThai.DangBan,
        },
      });
      const [donhangthangnay, soDonHangThangNay] =
        await this.DonHangRepo.findAndCount({
          where: {
            ngayMua:
              LessThan(new Date()) &&
              MoreThan(new Date(new Date().getMonth() - 1)),
          },
        });

      if (new Date().getDay() == 1) {
        const sanPhamBanChay = await this.SanPhamRepo.find({
          relations: {
            donHang: {
              sanPham: true,
            },
          },
        });
        const thongkesp = sanPhamBanChay.map((sp) => {
          const soluong = sp.donHang
            .map((dh) => {
              const idsp = dh.sanPham.findIndex((spp) => spp.id == sp.id);
              return dh.soluong[idsp];
            })
            .reduce((p, c) => p + +c, 0);
          return { ten: sp.ten, soluong };
        });
        thongkesp.sort(function (b, a) {
          return a.soluong - b.soluong;
        });
        const json = JSON.stringify(thongkesp.slice(0, 5));
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const fs = require('fs');
        fs.writeFile('../backend_project1/src/datathongkesp', json, (err) => {
          if (err) throw err;
        });
        console.log(json);
      }
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const fs = require('fs');
      const spBC = JSON.parse(
        fs.readFileSync('../backend_project1/src/datathongkesp').toString(),
      );
      const nameOfSanPhamBanChay = spBC.map((js) => js.ten);
      const sanPhamBanChay = await this.SanPhamRepo.find({
        where: {
          ten: In(nameOfSanPhamBanChay),
        },
        relations: {
          donHang: true,
        },
      });
      console.log(sanPhamBanChay);
      const tienLuongCuaTatCaNhanVien = nhanvien
        .map((nv) => nv.luong)
        .reduce((a, b) => a + b, 0);
      const doanhThuTrongThang = donhangthangnay
        .map((dh) => dh.tongTienPhaiTra)
        .reduce((a, b) => a + b, 0);
      return {
        sanPhamBanChay,
        soSanPham: numberOfSanPham,
        soNhanVien: numberOfNhanVien,
        soNguoiDangKi: numberOfUser,
        soDonHangThangNay,
        tienLuongCuaTatCaNhanVien,
        doanhThuTrongThang,
        ok: true,
      };
    } catch (error) {
      console.log(error);
      return createError('Server', 'Lỗi server, thử lại sau');
    }
  }

  async xemDanhSachMaGiamGiaChoUser(
    currentUser: User,
  ): Promise<XemDanhSachMaGiamGiaChoUserOutput> {
    try {
      const user = await this.userRepo.findOne({
        where: {
          id: currentUser.id,
        },
        relations: {
          maGiamGia: true,
        },
      });
      return {
        ok: true,
        maGiamGias: user.maGiamGia,
      };
    } catch (error) {
      console.log(error);
      return createError('Server', 'Lỗi server, thử lại sau');
    }
  }
}
