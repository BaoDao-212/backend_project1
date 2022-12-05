import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Roles } from 'src/auth/role.decorator';
import { CurrentUser } from 'src/auth/user.decorator';
import { User } from 'src/user/entities/user.entity';
import {
  AddTamTruInput,
  AddTamTruOutput,
  xemThongTinTamTruOutput,
} from '../dto/tamtru.dto';
import { TamTru } from '../entity/tamtru.entity';
import { TamTruService } from '../service/tamtru.service';

@Resolver(() => TamTru)
export class TamTruResolver {
  constructor(private readonly tamTruService: TamTruService) {}

  @Mutation(() => AddTamTruOutput)
  @Roles(['ToTruong', 'ToPho'])
  async addTamTru(
    @CurrentUser() nguoiPheDuyet: User,
    @Args('input') input: AddTamTruInput,
  ) {
    return this.tamTruService.addTamTru(nguoiPheDuyet, input);
  }
  @Query(() => xemThongTinTamTruOutput)
  @Roles(['Any'])
  xemThongTinTamTru(@CurrentUser() user: User) {
    return this.tamTruService.xemThongTinTamTru(user);
  }
}
