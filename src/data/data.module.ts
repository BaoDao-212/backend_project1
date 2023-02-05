import { Module } from '@nestjs/common';
import { DataService } from './data.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [DataService],
})
export class DataModule {}
