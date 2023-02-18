import {
  Field,
  ID,
  InputType,
  ObjectType,
  OmitType,
  PartialType,
} from '@nestjs/graphql';
import { IsIn } from 'class-validator';
import {
  CoreOutput,
  PaginationInput,
  PaginationOutput,
} from 'src/common/dto/output.dto';
import { In } from 'typeorm';
import { NhanVien } from '../entities/nhanvien.entity';

@InputType()
export class AddNhanVienInput extends OmitType(NhanVien, [
  'nhanVien',
  'id',
  'createdAt',
  'updatedAt',
]) {
  @Field()
  soDienThoai: string;
  @Field()
  ten: string;
  @Field()
  @IsIn(['Nam', 'Nu'])
  gioiTinh: string;
}

@ObjectType()
export class AddNhanVienOutput extends CoreOutput {}

@InputType()
export class EditNhanVienInput extends PartialType(
  OmitType(NhanVien, ['nhanVien']),
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
