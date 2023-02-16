import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Roles } from 'src/auth/role.decorator';
import { CurrentUser } from 'src/auth/user.decorator';
import {
  AddMaGiamGiaInput,
  AddMaGiamGiaOutput,
  XemDanhSachMaGiamGiaInput,
  XemDanhSachMaGiamGiaOutput,
  XemThongTinMaGiamGiaChoQuanLiInput,
  XemThongTinMaGiamGiaOutput,
} from './dto/magiamgia.dto';
import { MaGiamGiaService } from './magiamgia.service';

@Resolver()
export class MaGiamGiaResolver {
  constructor(private readonly MaGiamGiaService: MaGiamGiaService) {}

  @Mutation(() => AddMaGiamGiaOutput)
  @Roles(['QuanLy'])
  addMaGiamGia(@Args('input') input: AddMaGiamGiaInput) {
    return this.MaGiamGiaService.addMaGiamGia(input);
  }

  @Query(() => XemThongTinMaGiamGiaOutput)
  @Roles(['QuanLy'])
  xemThongTinMaGiamGiaChoQuanLi(
    @Args('input') input: XemThongTinMaGiamGiaChoQuanLiInput,
  ) {
    return this.MaGiamGiaService.xemThongTinMaGiamGiaChoQuanLi(input);
  }

  @Query(() => XemDanhSachMaGiamGiaOutput)
  @Roles(['QuanLy'])
  xemDanhSachMaGiamGia(@Args('input') input: XemDanhSachMaGiamGiaInput) {
    return this.MaGiamGiaService.xemDanhSachMaGiamGia(input);
  }
}
