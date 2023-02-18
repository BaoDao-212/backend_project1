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
exports.SanPhamResolver = void 0;
var graphql_1 = require("@nestjs/graphql");
var role_decorator_1 = require("../../../../../../src/auth/role.decorator");
var SanPham_dto_1 = require("./dto/SanPham.dto");
var SanPham_entity_1 = require("./entities/SanPham.entity");
var SanPhamResolver = /** @class */ (function () {
    function SanPhamResolver(sanphamService) {
        this.sanphamService = sanphamService;
    }
    SanPhamResolver.prototype.addSanPham = function (input) {
        return this.sanphamService.addSanPham(input);
    };
    SanPhamResolver.prototype.xemThongTinSanPham = function (input) {
        return this.sanphamService.xemThongTinSanPham(input);
    };
    SanPhamResolver.prototype.editSanPham = function (input) {
        return this.sanphamService.editSanPham(input);
    };
    SanPhamResolver.prototype.xemDanhSachSanPham = function (input) {
        return this.sanphamService.xemDanhSachSanPham(input);
    };
    __decorate([
        (0, graphql_1.Mutation)(function () { return SanPham_dto_1.AddSanPhamOutput; }),
        (0, role_decorator_1.Roles)(['Admin', 'QuanLy']),
        __param(0, (0, graphql_1.Args)('input'))
    ], SanPhamResolver.prototype, "addSanPham");
    __decorate([
        (0, graphql_1.Query)(function () { return SanPham_dto_1.XemThongTinSanPhamOutput; }),
        (0, role_decorator_1.Roles)(['Any']),
        __param(0, (0, graphql_1.Args)('input'))
    ], SanPhamResolver.prototype, "xemThongTinSanPham");
    __decorate([
        (0, graphql_1.Mutation)(function () { return SanPham_dto_1.EditSanPhamOutput; }),
        (0, role_decorator_1.Roles)(['Admin', 'QuanLy']),
        __param(0, (0, graphql_1.Args)('input'))
    ], SanPhamResolver.prototype, "editSanPham");
    __decorate([
        (0, graphql_1.Query)(function () { return SanPham_dto_1.XemDanhSachSanPhamOutput; }),
        (0, role_decorator_1.Roles)(['Any']),
        __param(0, (0, graphql_1.Args)('input'))
    ], SanPhamResolver.prototype, "xemDanhSachSanPham");
    SanPhamResolver = __decorate([
        (0, graphql_1.Resolver)(function () { return SanPham_entity_1.SanPham; })
    ], SanPhamResolver);
    return SanPhamResolver;
}());
exports.SanPhamResolver = SanPhamResolver;
