import {
  Field,
  ID,
  InputType,
  ObjectType,
  OmitType,
  PartialType,
} from '@nestjs/graphql';
import {
  CoreOutput,
  PaginationInput,
  PaginationOutput,
} from 'src/common/dto/output.dto';
import { DonHang } from '../entities/donhang.entity';

@InputType()
class Order {
  @Field(() => ID)
  sanPhamId: number;
  @Field()
  numberSanPham: number;
}
@InputType()
export class AddDonHangInput extends OmitType(DonHang, [
  'id',
  'createdAt',
  'updatedAt',
  'nguoiMua',
  'sanPham',
  'maGiamGia',
  'ngayMua',
  'tongTienPhaiTra',
  'ghiChu',
  'soluong',
]) {
  @Field()
  diaChi?: string;
  @Field({ nullable: true })
  codeVoucher?: string;
  @Field(() => [Order])
  sanPham?: Order[];
  @Field()
  PhiShip?: number;
}
@InputType()
export class AddDonHangChoUserInput extends OmitType(DonHang, [
  'id',
  'createdAt',
  'updatedAt',
  'nguoiMua',
  'sanPham',
  'maGiamGia',
  'ngayMua',
  'tongTienPhaiTra',
  'ghiChu',
  'soluong',
]) {
  @Field()
  diaChi?: string;
  @Field({ nullable: true })
  codeVoucher?: string;
  @Field(() => [Order])
  sanPham?: Order[];
  @Field()
  soDienThoai?: number;
}

@ObjectType()
export class AddDonHangOutput extends CoreOutput {}
@InputType()
export class EditDonHangInput {
  @Field()
  donHangId: number;
}
@ObjectType()
export class EditDonHangOutput extends CoreOutput {}

@ObjectType()
export class XemThongTinDonHangChoQuanLiOutput extends CoreOutput {
  @Field(() => DonHang, { nullable: true })
  DonHang?: DonHang;
}

@InputType()
export class XemThongTinDonHangChoQuanLiInput {
  @Field(() => ID)
  DonHangId: number;
}

@InputType()
export class XemDanhSachDonHangInput {
  @Field(() => PaginationInput)
  paginationInput: PaginationInput;
}
@InputType()
export class XemDanhSachDonHangChoNhanVienInput {
  @Field(() => PaginationInput)
  paginationInput: PaginationInput;
}

@ObjectType()
export class XemDanhSachDonHangOutput extends CoreOutput {
  @Field(() => PaginationOutput, { nullable: true })
  paginationOutput?: PaginationOutput;

  @Field(() => [DonHang], { nullable: true })
  DonHangs?: DonHang[];
}
