import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import {
  LoginInput,
  LoginOutput,
  RegisterUserInput,
  RegisterUserOutput,
} from './dto/auth.dto';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => RegisterUserOutput)
  registerUser(@Args('input') input: RegisterUserInput) {
    return this.authService.registerUser(input);
  }

  @Query(() => LoginOutput)
  login(@Args('input') input: LoginInput) {
    return this.authService.login(input);
  }
}
