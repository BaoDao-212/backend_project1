import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { compare } from 'bcrypt';
import { omitBy } from 'lodash';
import { SortOrder } from 'src/common/entities/core.entity';
import { createError } from 'src/common/utils/createError';
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
  XemDanhSachNguoiDungInput,
  XemDanhSachNguoiDungOutput,
  XemThongTinNguoiDungChoQuanLiInput,
  XemThongTinNguoiDungOutput,
} from './dto/user.dto';
import { TopSP } from './entities/thongke.entity';
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
    @InjectRepository(TopSP)
    private readonly TopSPRepo: Repository<TopSP>,
  ) {
    this.thongKeChoQuanLy().then(() => {
      console.log('hee');
    });
  }

  // quản lí thêm người dùng
  async addUser(input: AddUserInput): Promise<AddUserOutput> {
    try {
      const user = await this.userRepo.findOne({
        where: {
          soDienThoai: input.soDienThoai,
        },
      });
      if (user) return createError('Input', 'Đã tồn tại căn cước công dân này');
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
      return {
        ok: true,
        user,
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
      const numberOfNhanVien = await this.NhanVienRepo.count();
      const numberOfSanPham = await this.SanPhamRepo.count({
        where: {
          trangThai: TrangThai.DangBan,
        },
      });
      const soDonHang = await this.DonHangRepo.count();
      const DonHangThangNay = await this.DonHangRepo.find({
        where: {
          ngayMua:
            LessThan(new Date()) &&
            MoreThan(new Date(new Date().getMonth() - 1)),
        },
      });

      const sanPhamBanChay = await this.SanPhamRepo.find({
        relations: {
          donHang: {
            sanPham: true,
          },
        },
      });
      if (new Date().getDay() == 1) {
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
      const jo = fs.readFile(
        '../backend_project1/src/datathongkesp',
        function (err, data) {
          if (err) {
            return console.error(err);
          }
          console.log(d);
          
          return data.toString();
        },
      );
      console.log(jo);

      return {
        ok: true,
      };
    } catch (error) {
      console.log(error);
      return createError('Server', 'Lỗi server, thử lại sau');
    }
  }
}
