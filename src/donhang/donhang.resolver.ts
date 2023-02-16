import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Roles } from 'src/auth/role.decorator';
import { CurrentUser } from 'src/auth/user.decorator';
import {
  AddDonHangInput,
  AddDonHangOutput,
  XemDanhSachDonHangInput,
  XemDanhSachDonHangOutput,
  XemThongTinDonHangChoQuanLiInput,
  XemThongTinDonHangChoQuanLiOutput,
} from './dto/donhang.dto';
import { DonHang } from './entities/donhang.entity';
import { DonHangService } from './donhang.service';
import { User } from 'src/user/entities/user.entity';

@Resolver(() => DonHang)
export class DonHangResolver {
  constructor(private readonly DonHangService: DonHangService) {}

  @Mutation(() => AddDonHangOutput)
  @Roles(['QuanLy'])
  addDonHang(@CurrentUser() user: User, @Args('input') input: AddDonHangInput) {
    return this.DonHangService.addDonHang(input, user);
  }

  @Query(() => XemThongTinDonHangChoQuanLiOutput)
  @Roles(['QuanLy'])
  xemThongTinDonHangChoQuanLi(
    @Args('input') input: XemThongTinDonHangChoQuanLiInput,
  ) {
    return this.DonHangService.xemThongTinDonHangChoQuanLi(input);
  }

  @Query(() => XemDanhSachDonHangOutput)
  @Roles(['QuanLy'])
  xemDanhSachDonHang(@Args('input') input: XemDanhSachDonHangInput) {
    return this.DonHangService.xemDanhSachDonHang(input);
  }
}
