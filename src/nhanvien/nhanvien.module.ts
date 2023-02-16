import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { NhanVien } from './entities/nhanvien.entity';
import { NhanVienResolver } from './nhanvien.resolver';
import { NhanVienService } from './nhanvien.service';

@Module({
  imports: [TypeOrmModule.forFeature([NhanVien, User])],
  providers: [NhanVienResolver, NhanVienService],
})
export class NhanVienModule {}
