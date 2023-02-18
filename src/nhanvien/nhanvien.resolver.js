"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.NhanVienResolver = void 0;
var graphql_1 = require("@nestjs/graphql");
var role_decorator_1 = require("../../../../../../src/auth/role.decorator");
var user_decorator_1 = require("../../../../../../src/auth/user.decorator");
var nhanvien_dto_1 = require("./dto/nhanvien.dto");
var nhanvien_entity_1 = require("./entities/nhanvien.entity");
var NhanVienResolver = /** @class */ (function () {
    function NhanVienResolver(NhanVienService) {
        this.NhanVienService = NhanVienService;
    }
    NhanVienResolver.prototype.addNhanVien = function (input) {
        return this.NhanVienService.addNhanVien(input);
    };
    NhanVienResolver.prototype.xemThongTinNhanVien = function (NhanVien) {
        return this.NhanVienService.xemThongTinNhanVien(NhanVien);
    };
    NhanVienResolver.prototype.xemThongTinNhanVienChoQuanLi = function (input) {
        return this.NhanVienService.xemThongTinNhanVienChoQuanLi(input);
    };
    NhanVienResolver.prototype.editNhanVien = function (input) {
        return this.NhanVienService.editNhanVien(input);
    };
    NhanVienResolver.prototype.xemDanhSachNhanVien = function (input) {
        return this.NhanVienService.xemDanhSachNhanVien(input);
    };
    __decorate([
        (0, graphql_1.Mutation)(function () { return nhanvien_dto_1.AddNhanVienOutput; }),
        (0, role_decorator_1.Roles)(['QuanLy']),
        __param(0, (0, graphql_1.Args)('input'))
    ], NhanVienResolver.prototype, "addNhanVien");
    __decorate([
        (0, graphql_1.Query)(function () { return nhanvien_dto_1.XemThongTinNhanVienOutput; }),
        (0, role_decorator_1.Roles)(['Any']),
        __param(0, (0, user_decorator_1.CurrentUser)())
    ], NhanVienResolver.prototype, "xemThongTinNhanVien");
    __decorate([
        (0, graphql_1.Query)(function () { return nhanvien_dto_1.XemThongTinNhanVienOutput; }),
        (0, role_decorator_1.Roles)(['QuanLy']),
        __param(0, (0, graphql_1.Args)('input'))
    ], NhanVienResolver.prototype, "xemThongTinNhanVienChoQuanLi");
    __decorate([
        (0, graphql_1.Mutation)(function () { return nhanvien_dto_1.EditNhanVienOutput; }),
        (0, role_decorator_1.Roles)(['QuanLy']),
        __param(0, (0, graphql_1.Args)('input'))
    ], NhanVienResolver.prototype, "editNhanVien");
    __decorate([
        (0, graphql_1.Query)(function () { return nhanvien_dto_1.XemDanhSachNhanVienOutput; }),
        (0, role_decorator_1.Roles)(['QuanLy']),
        __param(0, (0, graphql_1.Args)('input'))
    ], NhanVienResolver.prototype, "xemDanhSachNhanVien");
    NhanVienResolver = __decorate([
        (0, graphql_1.Resolver)(function () { return nhanvien_entity_1.NhanVien; })
    ], NhanVienResolver);
    return NhanVienResolver;
}());
exports.NhanVienResolver = NhanVienResolver;
