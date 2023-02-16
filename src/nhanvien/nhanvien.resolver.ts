import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Roles } from 'src/auth/role.decorator';
import { CurrentUser } from 'src/auth/user.decorator';
import {
  AddNhanVienInput,
  AddNhanVienOutput,
  EditNhanVienInput,
  EditNhanVienOutput,
  XemDanhSachNhanVienInput,
  XemDanhSachNhanVienOutput,
  XemThongTinNhanVienChoQuanLiInput,
  XemThongTinNhanVienOutput,
} from './dto/nhanvien.dto';
import { NhanVien } from './entities/nhanvien.entity';
import { NhanVienService } from './nhanvien.service';

@Resolver(() => NhanVien)
export class NhanVienResolver {
  constructor(private readonly NhanVienService: NhanVienService) {}

  @Mutation(() => AddNhanVienOutput)
  @Roles(['QuanLy'])
  addNhanVien(@Args('input') input: AddNhanVienInput) {
    return this.NhanVienService.addNhanVien(input);
  }

  @Query(() => XemThongTinNhanVienOutput)
  @Roles(['Any'])
  xemThongTinNhanVien(@CurrentUser() NhanVien?: NhanVien) {
    return this.NhanVienService.xemThongTinNhanVien(NhanVien);
  }

  @Query(() => XemThongTinNhanVienOutput)
  @Roles(['QuanLy'])
  xemThongTinNhanVienChoQuanLi(
    @Args('input') input: XemThongTinNhanVienChoQuanLiInput,
  ) {
    return this.NhanVienService.xemThongTinNhanVienChoQuanLi(input);
  }

  @Mutation(() => EditNhanVienOutput)
  @Roles(['QuanLy'])
  editNhanVien(@Args('input') input: EditNhanVienInput) {
    return this.NhanVienService.editNhanVien(input);
  }

  @Query(() => XemDanhSachNhanVienOutput)
  @Roles(['QuanLy'])
  xemDanhSachNhanVien(@Args('input') input: XemDanhSachNhanVienInput) {
    return this.NhanVienService.xemDanhSachNhanVien(input);
  }
}
