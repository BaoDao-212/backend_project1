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
import { NhanVien } from '../entities/nhanvien.entity';

@InputType()
export class AddNhanVienInput extends OmitType(NhanVien, [
  'nguoiQuanLy',
  'nhanVien',
]) {}

@ObjectType()
export class AddNhanVienOutput extends CoreOutput {}

@InputType()
export class EditNhanVienInput extends PartialType(
  OmitType(NhanVien, ['nguoiQuanLy', 'nhanVien']),
) {
  @Field(() => ID)
  nguoiEditId: number;
}

@ObjectType()
export class EditNhanVienOutput extends CoreOutput {}

@ObjectType()
export class XemThongTinNhanVienOutput extends CoreOutput {
  @Field(() => NhanVien, { nullable: true })
  nhanVien?: NhanVien;
}

@InputType()
export class XemThongTinNhanVienChoQuanLiInput {
  @Field(() => ID)
  NhanVienId: number;
}

@InputType()
export class XemDanhSachNhanVienInput {
  @Field(() => PaginationInput)
  paginationInput: PaginationInput;

  @Field({ nullable: true })
  canCuocCongDan?: string;

  @Field({ nullable: true })
  soDienThoai?: string;
}

@ObjectType()
export class XemDanhSachNhanVienOutput extends CoreOutput {
  @Field(() => PaginationOutput, { nullable: true })
  paginationOutput?: PaginationOutput;

  @Field(() => [NhanVien], { nullable: true })
  nhanViens?: NhanVien[];
}

// @ObjectType()
// export class ThongKeNhanVienOuput extends CoreOutput {
//   @Field(() => Number, { nullable: true })
//   soNguoiDangKi?: number;

//   @Field(() => Number, { nullable: true })
//   soNguoiDangKiTamTru?: number;

//   @Field(() => Number, { nullable: true })
//   soNguoiDangKiTamVang?: number;

//   @Field(() => Number, { nullable: true })
//   soHo?: number;

//   @Field(() => Number, { nullable: true })
//   soNguoiDuoiLaoDong?: number;

//   @Field(() => Number, { nullable: true })
//   soNguoiTrongLaoDong?: number;

//   @Field(() => Number, { nullable: true })
//   soNguoiTrenLaoDong?: number;
// }
