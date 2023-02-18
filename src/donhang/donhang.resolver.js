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
exports.DonHangResolver = void 0;
var graphql_1 = require("@nestjs/graphql");
var role_decorator_1 = require("../../../../../../src/auth/role.decorator");
var user_decorator_1 = require("../../../../../../src/auth/user.decorator");
var donhang_dto_1 = require("./dto/donhang.dto");
var donhang_entity_1 = require("./entities/donhang.entity");
var DonHangResolver = /** @class */ (function () {
    function DonHangResolver(DonHangService) {
        this.DonHangService = DonHangService;
    }
    DonHangResolver.prototype.addDonHang = function (user, input) {
        return this.DonHangService.addDonHang(input, user);
    };
    DonHangResolver.prototype.xemThongTinDonHangChoQuanLi = function (input) {
        return this.DonHangService.xemThongTinDonHangChoQuanLi(input);
    };
    DonHangResolver.prototype.xemDanhSachDonHang = function (input) {
        return this.DonHangService.xemDanhSachDonHang(input);
    };
    __decorate([
        (0, graphql_1.Mutation)(function () { return donhang_dto_1.AddDonHangOutput; }),
        (0, role_decorator_1.Roles)(['QuanLy']),
        __param(0, (0, user_decorator_1.CurrentUser)()),
        __param(1, (0, graphql_1.Args)('input'))
    ], DonHangResolver.prototype, "addDonHang");
    __decorate([
        (0, graphql_1.Query)(function () { return donhang_dto_1.XemThongTinDonHangChoQuanLiOutput; }),
        (0, role_decorator_1.Roles)(['QuanLy']),
        __param(0, (0, graphql_1.Args)('input'))
    ], DonHangResolver.prototype, "xemThongTinDonHangChoQuanLi");
    __decorate([
        (0, graphql_1.Query)(function () { return donhang_dto_1.XemDanhSachDonHangOutput; }),
        (0, role_decorator_1.Roles)(['QuanLy']),
        __param(0, (0, graphql_1.Args)('input'))
    ], DonHangResolver.prototype, "xemDanhSachDonHang");
    DonHangResolver = __decorate([
        (0, graphql_1.Resolver)(function () { return donhang_entity_1.DonHang; })
    ], DonHangResolver);
    return DonHangResolver;
}());
exports.DonHangResolver = DonHangResolver;
