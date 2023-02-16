import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { SanPham } from './entities/sanpham.entity';
import { SanPhamResolver } from './sanpham.resolver';
import { SanPhamService } from './sanpham.service';

@Module({
  imports: [TypeOrmModule.forFeature([SanPham, User])],
  providers: [SanPhamResolver, SanPhamService],
})
export class SanPhamModule {}
