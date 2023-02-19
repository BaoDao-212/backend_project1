import {
  Field,
  InputType,
  ObjectType,
  registerEnumType,
} from '@nestjs/graphql';
import { CoreEntity } from 'src/common/entities/core.entity';
import { User } from 'src/user/entities/user.entity';
import { Column, Entity, ManyToOne, Unique } from 'typeorm';

export enum CaLamViec {
  Sang = 'Sang',
  Chieu = 'Chieu',
  Toi = 'Toi',
}

registerEnumType(CaLamViec, {
  name: 'CaLamViec',
});

@InputType('NhanVienInputType', { isAbstract: true })
@ObjectType()
@Entity()
export class NhanVien extends CoreEntity {
  @Field()
  @ManyToOne(() => User)
  nhanVien: User;

  @Field()
  @Column({ nullable: true })
  chiNhanh: string;

  @Field(() => Date, { nullable: true })
  @Column('timestamp without time zone', { nullable: true })
  ngayBatDauLam: Date;

  @Field()
  @Column()
  MailLienHe: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  canCuocCongDan?: string;

  @Field(() => CaLamViec)
  @Column('enum', { enum: CaLamViec })
  caLamViec: CaLamViec;

  @Field()
  @Column()
  luong: number;
}
