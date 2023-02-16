import { Field, ID, InputType, ObjectType, OmitType } from '@nestjs/graphql';
import {
  CoreOutput,
  PaginationInput,
  PaginationOutput,
} from 'src/common/dto/output.dto';
import { MaGiamGia } from '../entities/magiamgia.entity';

@InputType()
export class AddMaGiamGiaInput extends OmitType(MaGiamGia, [
  'id',
  'createdAt',
  'updatedAt',
]) {}

@ObjectType()
export class AddMaGiamGiaOutput extends CoreOutput {}

@ObjectType()
export class XemThongTinMaGiamGiaOutput extends CoreOutput {
  @Field(() => MaGiamGia, { nullable: true })
  maGiamGia?: MaGiamGia;
}

@InputType()
export class XemThongTinMaGiamGiaChoQuanLiInput {
  @Field(() => ID)
  maGiamGiaId: number;
}

@InputType()
export class XemDanhSachMaGiamGiaInput {
  @Field(() => PaginationInput)
  paginationInput: PaginationInput;

  @Field({ nullable: true })
  codeVoucher?: string;
}

@ObjectType()
export class XemDanhSachMaGiamGiaOutput extends CoreOutput {
  @Field(() => PaginationOutput, { nullable: true })
  paginationOutput?: PaginationOutput;

  @Field(() => [MaGiamGia], { nullable: true })
  maGiamGias?: MaGiamGia[];
}
