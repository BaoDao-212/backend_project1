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
import { MaGiamGia } from 'src/donhang/entities/magiamgia.entity';
import { SanPham } from 'src/sanpham/entities/sanpham.entity';
import { User } from '../entities/user.entity';

@InputType()
export class AddUserInput extends OmitType(User, [
  'id',
  'checkPassword',
  'createdAt',
  'updatedAt',
  'hashPassword',
  'matKhau',
  'vaiTroNguoiDung',
  'daDangKi',
]) {}

@ObjectType()
export class AddUserOutput extends CoreOutput {}

@InputType()
export class EditUserInput extends PartialType(
  OmitType(User, [
    'checkPassword',
    'createdAt',
    'updatedAt',
    'hashPassword',
    'matKhau',
    'vaiTroNguoiDung',
    'id',
    'maGiamGia',
  ]),
) {
  @Field(() => ID)
  nguoiCanEditId: number;
}

@ObjectType()
export class EditUserOutput extends CoreOutput {}

@ObjectType()
export class XemThongTinNguoiDungOutput extends CoreOutput {
  @Field(() => User, { nullable: true })
  user?: User;
  @Field()
  soLuongDonHang?: number;
  @Field()
  tongTienDaMua?: number;
}

@InputType()
export class XemThongTinNguoiDungChoQuanLiInput {
  @Field(() => ID)
  userId: number;
}

@InputType()
export class XemDanhSachNguoiDungInput {
  @Field(() => PaginationInput)
  paginationInput: PaginationInput;

  @Field({ nullable: true })
  hoTen?: string;

  @Field({ nullable: true })
  soDienThoai?: string;
}

@ObjectType()
export class XemDanhSachNguoiDungOutput extends CoreOutput {
  @Field(() => PaginationOutput, { nullable: true })
  paginationOutput?: PaginationOutput;

  @Field(() => [User], { nullable: true })
  users?: User[];
}
@ObjectType()
export class XemDanhSachMaGiamGiaChoUserOutput extends CoreOutput {
  @Field(() => [MaGiamGia], { nullable: true })
  maGiamGias?: MaGiamGia[];
}

@ObjectType()
export class ThongKeOuput extends CoreOutput {
  @Field(() => Number, { nullable: true })
  soNguoiDangKi?: number;

  @Field(() => Number, { nullable: true })
  soDonHangThangNay?: number;

  @Field(() => Number, { nullable: true })
  soNhanVien?: number;

  @Field(() => Number, { nullable: true })
  soSanPham?: number;

  @Field(() => Number, { nullable: true })
  doanhThuTrongThang?: number;

  @Field(() => [SanPham], { nullable: true })
  sanPhamBanChay?: SanPham[];

  @Field(() => Number, { nullable: true })
  tienLuongCuaTatCaNhanVien?: number;
}
