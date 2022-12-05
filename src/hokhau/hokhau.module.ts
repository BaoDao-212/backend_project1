import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { HoKhau } from './entities/hokhau.entity';
import { LichSuHoKhau } from './entities/lichsuhokhau.entity';
import { TamTru } from './entities/tamtru.entity';
import { TamVang } from './entities/tamvang.entity';
import { HokhauResolver } from './resolvers/hokhau.resolver';
import { TamTruResolver } from './resolvers/tamtru.resolver';
import { TamVangResolver } from './resolvers/tamvang.resolver';
import { HokhauService } from './services/hokhau.service';
import { TamTruService } from './services/tamtru.service';
import { TamVangService } from './services/tamvang.service';


@Module({
  providers: [
    HokhauService,
    HokhauResolver,
    TamTruResolver,
    TamTruService,
    TamVangService,
    TamVangResolver,
  ],
  imports: [
    TypeOrmModule.forFeature([HoKhau, User, LichSuHoKhau, TamTru, TamVang]),



  ],
})
export class HokhauModule {}
