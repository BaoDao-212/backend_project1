import {
  Field,
  InputType,
  ObjectType,
  registerEnumType,
} from '@nestjs/graphql';
import { compare, hash } from 'bcrypt';
import { IsIn, IsOptional, IsString, ValidateNested } from 'class-validator';
import { CoreEntity } from 'src/common/entities/core.entity';
import { DonHang } from 'src/donhang/entities/donhang.entity';
import { StoredFile } from 'src/upload/object/StoredFile';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  Unique,
} from 'typeorm';

export enum LoaiSanPham {
  NuocUong = 'NuocUong',
  DoNgot = 'DoNgot',
}

registerEnumType(LoaiSanPham, {
  name: 'LoaiSanPham',
});
export enum TrangThai {
  DangBan = 'DangBan',
  NgungBan = 'NgungBan',
}

registerEnumType(TrangThai, {
  name: 'TrangThai',
});
@InputType('SanPhamInputType', { isAbstract: true })
@ObjectType()
@Entity()
export class SanPham extends CoreEntity {
  @Field(() => StoredFile, { nullable: true })
  @Column('json', { nullable: true })
  @ValidateNested()
  @IsOptional()
  avatar?: StoredFile;

  @Field()
  @Column()
  @IsString()
  ten: string;

  @Field(() => LoaiSanPham)
  @Column('enum', {
    enum: LoaiSanPham,
  })
  loaiSanPham?: LoaiSanPham;

  @Field(() => [DonHang])
  @ManyToMany(() => DonHang, (donHang) => donHang.sanPham)
  @JoinTable()
  donHang?: DonHang[];

  @Field(() => TrangThai)
  @Column('enum', {
    enum: TrangThai,
    default: TrangThai.DangBan,
  })
  trangThai: TrangThai;

  @Field(() => Date)
  @Column('timestamp without time zone')
  ngayTao: Date;

  @Field({ nullable: true })
  @Column({ nullable: true })
  soTien: number;

  @Field({ nullable: true })
  @Column({ nullable: true })
  moTaSanPham?: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  ghiChu?: string;
}
