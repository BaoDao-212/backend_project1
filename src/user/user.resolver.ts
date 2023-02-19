import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Roles } from 'src/auth/role.decorator';
import { CurrentUser } from 'src/auth/user.decorator';
import { XemDanhSachMaGiamGiaOutput } from 'src/donhang/dto/magiamgia.dto';
import {
  AddUserInput,
  AddUserOutput,
  EditUserInput,
  EditUserOutput,
  ThongKeOuput,
  XemDanhSachNguoiDungInput,
  XemDanhSachNguoiDungOutput,
  XemThongTinNguoiDungChoQuanLiInput,
  XemThongTinNguoiDungOutput,
} from './dto/user.dto';
import { User } from './entities/user.entity';
import { UserService } from './user.service';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => AddUserOutput)
  @Roles(['Admin', 'QuanLy'])
  addUser(@Args('input') input: AddUserInput) {
    return this.userService.addUser(input);
  }

  @Query(() => XemThongTinNguoiDungOutput)
  @Roles(['Any'])
  xemThongTinNguoiDung(@CurrentUser() user: User) {
    return this.userService.xemThongTinNguoiDung(user);
  }

  @Query(() => XemThongTinNguoiDungOutput)
  @Roles(['Admin', 'QuanLy'])
  xemThongTinNguoiDungChoQuanLi(
    @Args('input') input: XemThongTinNguoiDungChoQuanLiInput,
  ) {
    return this.userService.xemThongTinNguoiDungChoQuanLi(input);
  }

  @Mutation(() => EditUserOutput)
  @Roles(['Admin', 'QuanLy'])
  editUser(@Args('input') input: EditUserInput) {
    return this.userService.editUser(input);
  }

  @Query(() => XemDanhSachNguoiDungOutput)
  @Roles(['Admin', 'QuanLy'])
  xemDanhSachNguoiDung(@Args('input') input: XemDanhSachNguoiDungInput) {
    return this.userService.xemDanhSachNguoiDung(input);
  }
  @Query(() => XemDanhSachMaGiamGiaOutput)
  @Roles(['Any'])
  xemDanhSachMaGiamGiaChoUser(@CurrentUser() user: User) {
    return this.userService.xemDanhSachMaGiamGiaChoUser(user);
  }
  @Query(() => ThongKeOuput)
  @Roles(['Admin', 'QuanLy'])
  ThongKeChoQuanLy() {
    return this.userService.thongKeChoQuanLy();
  }
}
