import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DonHang } from 'src/donhang/entities/donhang.entity';
import { MaGiamGia } from 'src/donhang/entities/magiamgia.entity';
import { NhanVien } from 'src/nhanvien/entities/nhanvien.entity';
import { SanPham } from 'src/sanpham/entities/sanpham.entity';
import { TopSP } from './entities/thongke.entity';
import { User } from './entities/user.entity';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      User,
      SanPham,
      MaGiamGia,
      NhanVien,
      DonHang,
      TopSP,
    ]),
  ],
  providers: [UserResolver, UserService],
})
export class UserModule {}
