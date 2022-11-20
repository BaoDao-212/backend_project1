import { CreateCommonInput } from './create-common.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCommonInput extends PartialType(CreateCommonInput) {
  @Field(() => Int)
  id: number;
}
