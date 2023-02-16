import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Roles } from 'src/auth/role.decorator';
import {
  AddSanPhamInput,
  AddSanPhamOutput,
  EditSanPhamInput,
  EditSanPhamOutput,
  XemDanhSachSanPhamInput,
  XemDanhSachSanPhamOutput,
  XemThongTinSanPhamInput,
  XemThongTinSanPhamOutput,
} from './dto/SanPham.dto';
import { SanPham } from './entities/SanPham.entity';
import { SanPhamService } from './sanpham.service';

@Resolver(() => SanPham)
export class SanPhamResolver {
  constructor(private readonly sanphamService: SanPhamService) {}

  @Mutation(() => AddSanPhamOutput)
  @Roles(['Admin', 'QuanLy'])
  addSanPham(@Args('input') input: AddSanPhamInput) {
    return this.sanphamService.addSanPham(input);
  }

  @Query(() => XemThongTinSanPhamOutput)
  @Roles(['Any'])
  xemThongTinSanPham(@Args('input') input: XemThongTinSanPhamInput) {
    return this.sanphamService.xemThongTinSanPham(input);
  }

  @Mutation(() => EditSanPhamOutput)
  @Roles(['Admin', 'QuanLy'])
  editSanPham(@Args('input') input: EditSanPhamInput) {
    return this.sanphamService.editSanPham(input);
  }

  @Query(() => XemDanhSachSanPhamOutput)
  @Roles(['Any'])
  xemDanhSachSanPham(@Args('input') input: XemDanhSachSanPhamInput) {
    return this.sanphamService.xemDanhSachSanPham(input);
  }
}
