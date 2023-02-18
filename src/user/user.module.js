"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserModule = void 0;
var common_1 = require("@nestjs/common");
var typeorm_1 = require("@nestjs/typeorm");
var donhang_entity_1 = require("../../../../../../src/donhang/entities/donhang.entity");
var magiamgia_entity_1 = require("../../../../../../src/donhang/entities/magiamgia.entity");
var nhanvien_entity_1 = require("../../../../../../src/nhanvien/entities/nhanvien.entity");
var sanpham_entity_1 = require("../../../../../../src/sanpham/entities/sanpham.entity");
var thongke_entity_1 = require("./entities/thongke.entity");
var user_entity_1 = require("./entities/user.entity");
var user_resolver_1 = require("./user.resolver");
var user_service_1 = require("./user.service");
var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = __decorate([
        (0, common_1.Module)({
            imports: [
                typeorm_1.TypeOrmModule.forFeature([
                    user_entity_1.User,
                    sanpham_entity_1.SanPham,
                    magiamgia_entity_1.MaGiamGia,
                    nhanvien_entity_1.NhanVien,
                    donhang_entity_1.DonHang,
                    thongke_entity_1.TopSP,
                ]),
            ],
            providers: [user_resolver_1.UserResolver, user_service_1.UserService]
        })
    ], UserModule);
    return UserModule;
}());
exports.UserModule = UserModule;
