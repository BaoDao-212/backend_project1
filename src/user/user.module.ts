import { HoKhau } from './../hokhau/entities/hokhau.entity';
import { TamVang } from './../hokhau/entities/tamvang.entity';
import { TamTru } from './../hokhau/entities/tamtru.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';

@Module({
  imports: [TypeOrmModule.forFeature([User, TamTru, TamVang, HoKhau])],
  providers: [UserResolver, UserService],
})
export class UserModule {}
