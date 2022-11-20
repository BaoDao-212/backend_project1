import { ObjectType, Field, Int, registerEnumType, InputType } from '@nestjs/graphql';
import { BeforeInsert, BeforeUpdate, Column, Entity } from 'typeorm';
import {
  IsIn,
  IsOptional,
  IsPhoneNumber,
  IsString,
  Length,
} from 'class-validator';
import { CoreEntity } from 'src/common/entities/common.entity';
export enum VaitroNguoiDung {
  Admin = 'admin',
  NguoiDan = 'NguoiDan',
  ToTruong = "ToTruong",
  ToPho = 'ToPho',
}
registerEnumType(VaitroNguoiDung, {
  name: "VaitroNguoiDung",
});
@InputType('userInputType', { isAbstract: true })
@ObjectType()
@Entity()
export class User extends CoreEntity {
  @Field()
  @Column()
  @Length(12, 12)
  cancuocCongDan: string;
  @Field()
  @Column()
  @IsPhoneNumber('VN', {
    message: 'Số điện thoại sai định dạng',
  })
  soDienThoai: string;
  @Field(() => VaitroNguoiDung)
  @Column('enum', {
    enum: VaitroNguoiDung,
    default: VaitroNguoiDung.NguoiDan,
  })
  vaiTro: VaitroNguoiDung;
  @Field()
  @Column({ default: false })
  daDangKi: boolean;
  @Field({ nullable: true })
  @Column({ select: false, nullable: true })
  @IsString()
  matKhau: string;
  @Field()
  @Column()
  @IsIn(['Nam', 'Nữ'])
  gioitinh: string;
  @Field({ nullable: true })
  @Column({ nullable: true })
  @IsOptional()
  @IsString()
  bidanh: string;
  @Field(() => Date)
  @Column('timestamp with out time zone')
  @IsString()
  ngaySinh: Date;
  @Field()
  @Column()
  noiSinh: string;
  @Field()
  @Column()
  queQuan: string;
  @Field()
  @Column()
  noiThuongTru: string;
  @Field()
  @Column()
  ngheNghiep: string;
  @Field()
  @Column()
  danToc: string;
  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword() {
    if (!this.matKhau) return;
    this.matKhau = await hash(this.matKhau, 12);
  }

  async checkPassword(matKhau: string): Promise<Boolean> {
    return await compare(matKhau, this.matKhau);
  }

}