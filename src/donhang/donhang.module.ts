import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DonHang } from './entities/donhang.entity';
import { DonHangResolver } from './donhang.resolver';
import { DonHangService } from './donhang.service';
import { User } from 'src/user/entities/user.entity';
import { MaGiamGia } from 'src/donhang/entities/magiamgia.entity';
import { MaGiamGiaResolver } from 'src/donhang/magiamgia.resolver';
import { MaGiamGiaService } from './magiamgia.service';
import { SanPham } from 'src/sanpham/entities/sanpham.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DonHang, User, MaGiamGia, SanPham])],
  providers: [
    DonHangResolver,
    DonHangService,
    MaGiamGiaResolver,
    MaGiamGiaService,
  ],
})
export class DonHangModule {}
