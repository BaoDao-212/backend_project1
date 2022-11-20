import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CommonService } from './common.service';
import { Common } from './entities/common.entity';
import { CreateCommonInput } from './dto/create-common.input';
import { UpdateCommonInput } from './dto/update-common.input';

@Resolver(() => Common)
export class CommonResolver {
  constructor(private readonly commonService: CommonService) {}

  @Mutation(() => Common)
  createCommon(@Args('createCommonInput') createCommonInput: CreateCommonInput) {
    return this.commonService.create(createCommonInput);
  }

  @Query(() => [Common], { name: 'common' })
  findAll() {
    return this.commonService.findAll();
  }

  @Query(() => Common, { name: 'common' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.commonService.findOne(id);
  }

  @Mutation(() => Common)
  updateCommon(@Args('updateCommonInput') updateCommonInput: UpdateCommonInput) {
    return this.commonService.update(updateCommonInput.id, updateCommonInput);
  }

  @Mutation(() => Common)
  removeCommon(@Args('id', { type: () => Int }) id: number) {
    return this.commonService.remove(id);
  }
}
