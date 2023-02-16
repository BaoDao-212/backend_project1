import {
  Field,
  ID,
  InputType,
  ObjectType,
  OmitType,
  PartialType,
  PickType,
} from '@nestjs/graphql';
import {
  CoreOutput,
  PaginationInput,
  PaginationOutput,
} from 'src/common/dto/output.dto';
import { SanPham } from '../entities/sanpham.entity';

@InputType()
export class AddSanPhamInput extends PickType(SanPham, [
  'ten',
  'soTien',
  'loaiSanPham',
  'moTaSanPham',
  'avatar',
]) {}

@ObjectType()
export class AddSanPhamOutput extends CoreOutput {}

@InputType()
export class EditSanPhamInput extends PartialType(
  PickType(SanPham, [
    'ten',
    'soTien',
    'avatar',
    'trangThai',
    'loaiSanPham',
    'moTaSanPham',
  ]),
) {
  @Field(() => ID)
  sanPhamId: number;
}

@ObjectType()
export class EditSanPhamOutput extends CoreOutput {}

@ObjectType()
export class XemThongTinSanPhamOutput extends CoreOutput {
  @Field(() => SanPham, { nullable: true })
  sanpham?: SanPham;
}

@InputType()
export class XemThongTinSanPhamInput {
  @Field(() => ID)
  SanPhamId: number;
}

@InputType()
export class XemDanhSachSanPhamInput {
  @Field(() => PaginationInput)
  paginationInput: PaginationInput;

  @Field({ nullable: true })
  tenSanPham?: string;
}

@ObjectType()
export class XemDanhSachSanPhamOutput extends CoreOutput {
  @Field(() => [SanPham], { nullable: true })
  sanPhams?: SanPham[];

  @Field(() => PaginationOutput, { nullable: true })
  paginationOutput?: PaginationOutput;
}
