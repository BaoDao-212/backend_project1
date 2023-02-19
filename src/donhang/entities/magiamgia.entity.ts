import { CONFIGURABLE_MODULE_ID } from '@nestjs/common/module-utils/constants';
import {
  Field,
  InputType,
  ObjectType,
  registerEnumType,
} from '@nestjs/graphql';
import { CoreEntity } from 'src/common/entities/core.entity';
import { User } from 'src/user/entities/user.entity';
import { Column, Entity, ManyToMany, ManyToOne, OneToMany } from 'typeorm';
export enum TypeDiscount {
  FreeShip = 'FreeShip',
  ProductDiscount = 'ProductDiscount',
}

registerEnumType(TypeDiscount, {
  name: 'TypeDiscount',
});
@InputType('MaGiamGiaInputType', { isAbstract: true })
@ObjectType()
@Entity()
export class MaGiamGia extends CoreEntity {
  @Field()
  @Column()
  codeVoucher: string;

  @Field()
  @Column()
  minAmount: number;

  @Field(() => User)
  @ManyToMany(() => User)
  user?: User;

  @Field()
  @Column()
  voucherAmount: number;

  @Field(() => Date)
  @Column('timestamp without time zone')
  startDate: Date;

  @Field(() => Date)
  @Column('timestamp without time zone')
  endDate: Date;

  @Field(() => TypeDiscount)
  @Column('enum', { enum: TypeDiscount })
  typeDiscount: TypeDiscount;
}
