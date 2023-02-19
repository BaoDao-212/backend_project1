import { CONFIGURABLE_MODULE_ID } from '@nestjs/common/module-utils/constants';
import {
  Field,
  InputType,
  ObjectType,
  registerEnumType,
} from '@nestjs/graphql';
import { type } from 'node:os';
import { join } from 'path';
import { CoreEntity } from 'src/common/entities/core.entity';
import { MaGiamGia } from 'src/donhang/entities/magiamgia.entity';
import { SanPham } from 'src/sanpham/entities/sanpham.entity';
import { User } from 'src/user/entities/user.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  Unique,
} from 'typeorm';

export enum TrangThaiDonHang {
  Oke = 'Oke',
  ChoPheDuyet = 'ChoPheDuyet',
}

registerEnumType(TrangThaiDonHang, {
  name: 'TrangThaiDonHang',
});
export enum HinhThucMua {
  MangVe = 'MangVe',
  NgoiTaiQuan = 'NgoiTaiQuan',
}

registerEnumType(HinhThucMua, {
  name: 'HinhThucMua',
});
@InputType('DonHangInputType', { isAbstract: true })
@ObjectType()
@Entity()
export class DonHang extends CoreEntity {
  @Field(() => User)
  @ManyToOne(() => User)
  nguoiMua: User;

  @Field(() => [SanPham])
  @ManyToMany(() => SanPham, (sanPham) => sanPham.donHang)
  @JoinTable()
  sanPham?: SanPham[];

  @Field(() => [Number])
  @Column('simple-array')
  soluong: number[];

  @Field(() => MaGiamGia, { nullable: true })
  @OneToOne(() => MaGiamGia, { nullable: true })
  maGiamGia?: MaGiamGia;

  @Field(() => Date, { nullable: true })
  @Column('timestamp without time zone', { nullable: true })
  ngayMua: Date;

  @Field()
  @Column()
  tongTienPhaiTra: number;

  @Field({ nullable: true })
  @Column({ nullable: true })
  ghiChu?: string;

  @Field(() => HinhThucMua)
  @Column('enum', { enum: HinhThucMua })
  hinhThucMua: HinhThucMua;

  @Field(() => TrangThaiDonHang)
  @Column('enum', { enum: TrangThaiDonHang })
  trangThaiDonHang?: TrangThaiDonHang;
}
