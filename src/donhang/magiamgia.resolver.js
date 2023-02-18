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
exports.MaGiamGiaResolver = void 0;
var graphql_1 = require("@nestjs/graphql");
var role_decorator_1 = require("../../../../../../src/auth/role.decorator");
var magiamgia_dto_1 = require("./dto/magiamgia.dto");
var MaGiamGiaResolver = /** @class */ (function () {
    function MaGiamGiaResolver(MaGiamGiaService) {
        this.MaGiamGiaService = MaGiamGiaService;
    }
    MaGiamGiaResolver.prototype.addMaGiamGia = function (input) {
        return this.MaGiamGiaService.addMaGiamGia(input);
    };
    MaGiamGiaResolver.prototype.xemThongTinMaGiamGiaChoQuanLi = function (input) {
        return this.MaGiamGiaService.xemThongTinMaGiamGiaChoQuanLi(input);
    };
    MaGiamGiaResolver.prototype.xemDanhSachMaGiamGia = function (input) {
        return this.MaGiamGiaService.xemDanhSachMaGiamGia(input);
    };
    __decorate([
        (0, graphql_1.Mutation)(function () { return magiamgia_dto_1.AddMaGiamGiaOutput; }),
        (0, role_decorator_1.Roles)(['QuanLy']),
        __param(0, (0, graphql_1.Args)('input'))
    ], MaGiamGiaResolver.prototype, "addMaGiamGia");
    __decorate([
        (0, graphql_1.Query)(function () { return magiamgia_dto_1.XemThongTinMaGiamGiaOutput; }),
        (0, role_decorator_1.Roles)(['QuanLy']),
        __param(0, (0, graphql_1.Args)('input'))
    ], MaGiamGiaResolver.prototype, "xemThongTinMaGiamGiaChoQuanLi");
    __decorate([
        (0, graphql_1.Query)(function () { return magiamgia_dto_1.XemDanhSachMaGiamGiaOutput; }),
        (0, role_decorator_1.Roles)(['QuanLy']),
        __param(0, (0, graphql_1.Args)('input'))
    ], MaGiamGiaResolver.prototype, "xemDanhSachMaGiamGia");
    MaGiamGiaResolver = __decorate([
        (0, graphql_1.Resolver)()
    ], MaGiamGiaResolver);
    return MaGiamGiaResolver;
}());
exports.MaGiamGiaResolver = MaGiamGiaResolver;
