import {
  Field,
  InputType,
  ObjectType,
  registerEnumType,
} from '@nestjs/graphql';
import { compare, hash } from 'bcrypt';
import {
  IsIn,
  IsOptional,
  IsPhoneNumber,
  IsString,
  ValidateNested,
} from 'class-validator';
import { CoreEntity } from 'src/common/entities/core.entity';
import { MaGiamGia } from 'src/donhang/entities/magiamgia.entity';
import { StoredFile } from 'src/upload/object/StoredFile';
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  Unique,
} from 'typeorm';

export enum VaitroNguoiDung {
  Admin = 'Admin',
  NhanVien = 'NhanVien',
  KhachHang = 'KhachHang',
  QuanLy = 'QuanLy',
}

registerEnumType(VaitroNguoiDung, {
  name: 'VaitroNguoiDung',
});

@InputType('UserInputType', { isAbstract: true })
@ObjectType()
@Entity()
@Unique(['soDienThoai'])
export class User extends CoreEntity {
  @Field({ nullable: true })
  @Column({ select: false, nullable: true })
  @IsString()
  matKhau: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  @IsPhoneNumber('VN', {
    message: 'Số điện thoại sai định dạng',
  })
  soDienThoai: string;

  @Field(() => VaitroNguoiDung)
  @Column('enum', {
    enum: VaitroNguoiDung,
    default: VaitroNguoiDung.KhachHang,
  })
  vaiTroNguoiDung: VaitroNguoiDung;

  @Field()
  @Column({ default: false })
  daDangKi: boolean;

  @Field()
  @Column()
  @IsString()
  ten: string;

  @Field()
  @Column()
  @IsIn(['Nam', 'Nữ'])
  gioiTinh: string;

  @Field(() => StoredFile, { nullable: true })
  @Column('json', { nullable: true })
  @ValidateNested()
  @IsOptional()
  avatar?: StoredFile;

  @Field(() => [MaGiamGia], { nullable: true })
  @ManyToMany(() => MaGiamGia)
  @JoinTable()
  maGiamGia?: MaGiamGia[];

  @Field({ nullable: true })
  @Column({ nullable: true })
  ghiChu?: string;

  // phương thức xử lí password
  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword() {
    if (!this.matKhau) return;
    this.matKhau = await hash(this.matKhau, 12);
  }

  async checkPassword(matKhau: string): Promise<boolean> {
    return await compare(matKhau, this.matKhau);
  }
}
