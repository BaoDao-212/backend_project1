import { Field, InputType, ObjectType, PickType } from '@nestjs/graphql';
import { CoreOutput } from 'src/common/dto/output.dto';
import { User } from 'src/user/entities/user.entity';

@InputType()
export class RegisterUserInput extends PickType(User, [
  'soDienThoai',
  'matKhau',
  'ten',
  'maGiamGia',
]) {
  @Field()
  matKhauLapLai: string;
}

@ObjectType()
export class RegisterUserOutput extends CoreOutput {}

@InputType()
export class LoginInput extends PickType(User, ['soDienThoai']) {
  @Field()
  matKhau: string;
}

@ObjectType()
export class LoginOutput extends CoreOutput {
  @Field({ nullable: true })
  accessToken?: string;
}

@InputType()
export class NewAccessTokenInput {
  @Field()
  accessToken: string;
}

@ObjectType()
export class NewAccessTokenOutput extends CoreOutput {
  @Field({ nullable: true })
  accessToken?: string;
}

@InputType()
export class ChangePasswordInput extends CoreOutput {
  @Field()
  matKhauCu: string;
  @Field()
  matKhauMoi: string;
  @Field()
  matKhauMoiLapLai: string;
}

@ObjectType()
export class ChangePasswordOutput extends CoreOutput {}
