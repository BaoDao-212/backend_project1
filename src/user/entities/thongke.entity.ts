import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { Column, Entity } from 'typeorm';
@InputType('TopSPInputType', { isAbstract: true })
@ObjectType()
@Entity()
export class TopSP {
  @Field()
  @Column()
  ten: string;

  @Field()
  @Column()
  soluong?: number;
}
