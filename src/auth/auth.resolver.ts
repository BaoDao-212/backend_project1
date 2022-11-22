import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { Auth } from './entities/auth.entity';
import { LoginInput, LoginOutput, RegisterUserInput, RegisterUserOutput } from './dto/auth.dto';

@Resolver(() => Auth)
export class AuthResolver {
  constructor(private readonly authService:AuthService){}
  @Mutation(()=>RegisterUserOutput)
  registerUser(@Args('input') input:RegisterUserInput){
    return this.authService.registerUser(input);
  }
  @Query(()=>LoginOutput)
  login(@Args('input') input:LoginInput){
    return this.authService.login(input);
  }

}
