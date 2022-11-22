import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
import { AddUserInput, AddUserOutput, UserDetailInput, UserDetailOutput } from './dto/user.dto';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) { }
  @Mutation(() => AddUserOutput)
  addUser(@Args('input') input: AddUserInput) {
    return this.userService.addUser(input);
  }
  @Query(() => UserDetailOutput)
  getUserDetail(user: User, @Args('input') input: UserDetailInput) {
    return this.userService.getUserDetail(user, input);
  }

}

