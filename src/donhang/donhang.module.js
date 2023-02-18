"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DonHangModule = void 0;
var common_1 = require("@nestjs/common");
var typeorm_1 = require("@nestjs/typeorm");
var donhang_entity_1 = require("./entities/donhang.entity");
var donhang_resolver_1 = require("./donhang.resolver");
var donhang_service_1 = require("./donhang.service");
var user_entity_1 = require("../../../../../../src/user/entities/user.entity");
var magiamgia_entity_1 = require("../../../../../../src/donhang/entities/magiamgia.entity");
var magiamgia_resolver_1 = require("../../../../../../src/donhang/magiamgia.resolver");
var magiamgia_service_1 = require("./magiamgia.service");
var sanpham_entity_1 = require("../../../../../../src/sanpham/entities/sanpham.entity");
var DonHangModule = /** @class */ (function () {
    function DonHangModule() {
    }
    DonHangModule = __decorate([
        (0, common_1.Module)({
            imports: [typeorm_1.TypeOrmModule.forFeature([donhang_entity_1.DonHang, user_entity_1.User, magiamgia_entity_1.MaGiamGia, sanpham_entity_1.SanPham])],
            providers: [
                donhang_resolver_1.DonHangResolver,
                donhang_service_1.DonHangService,
                magiamgia_resolver_1.MaGiamGiaResolver,
                magiamgia_service_1.MaGiamGiaService,
            ]
        })
    ], DonHangModule);
    return DonHangModule;
}());
exports.DonHangModule = DonHangModule;
