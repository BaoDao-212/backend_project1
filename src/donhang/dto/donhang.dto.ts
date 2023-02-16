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

@ObjectType()
export class AddDonHangOutput extends CoreOutput {}

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

  @Field({ nullable: true })
  ngayMua?: Date;
}

@ObjectType()
export class XemDanhSachDonHangOutput extends CoreOutput {
  @Field(() => PaginationOutput, { nullable: true })
  paginationOutput?: PaginationOutput;

  @Field(() => [DonHang], { nullable: true })
  DonHangs?: DonHang[];
}
