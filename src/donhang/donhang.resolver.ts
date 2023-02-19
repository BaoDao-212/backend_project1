import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Roles } from 'src/auth/role.decorator';
import { CurrentUser } from 'src/auth/user.decorator';
import {
  AddDonHangChoUserInput,
  AddDonHangInput,
  AddDonHangOutput,
  EditDonHangInput,
  EditDonHangOutput,
  XemDanhSachDonHangInput,
  XemDanhSachDonHangOutput,
  XemThongTinDonHangChoQuanLiInput,
  XemThongTinDonHangChoQuanLiOutput,
} from './dto/donhang.dto';
import { DonHang } from './entities/donhang.entity';
import { DonHangService } from './donhang.service';
import { User } from 'src/user/entities/user.entity';
import { NhanVien } from 'src/nhanvien/entities/nhanvien.entity';

@Resolver(() => DonHang)
export class DonHangResolver {
  constructor(private readonly DonHangService: DonHangService) {}

  @Mutation(() => AddDonHangOutput)
  @Roles(['NhanVien'])
  addDonHang(@CurrentUser() user: User, @Args('input') input: AddDonHangInput) {
    return this.DonHangService.addDonHang(input, user);
  }
  @Mutation(() => AddDonHangOutput)
  @Roles(['KhachHang', 'NhanVien'])
  addDonHangChoUser(
    @CurrentUser() user: User,
    @Args('input') input: AddDonHangChoUserInput,
  ) {
    return this.DonHangService.addDonHangChoUser(input, user);
  }
  @Mutation(() => EditDonHangOutput)
  @Roles(['NhanVien'])
  editDonHang(@Args('input') input: EditDonHangInput) {
    return this.DonHangService.editDonHang(input);
  }

  @Query(() => XemThongTinDonHangChoQuanLiOutput)
  @Roles(['Any'])
  xemThongTinDonHangChoQuanLi(
    @CurrentUser() user: User,
    @Args('input') input: XemThongTinDonHangChoQuanLiInput,
  ) {
    return this.DonHangService.xemThongTinDonHangChoQuanLi(user, input);
  }

  @Query(() => XemDanhSachDonHangOutput)
  @Roles(['Any'])
  xemDanhSachDonHang(
    @CurrentUser() user: User,
    @Args('input') input: XemDanhSachDonHangInput,
  ) {
    return this.DonHangService.xemDanhSachDonHang(user, input);
  }
}
