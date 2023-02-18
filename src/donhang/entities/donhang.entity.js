"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DonHang = exports.HinhThucMua = void 0;
var graphql_1 = require("@nestjs/graphql");
var core_entity_1 = require("../../../../../../../src/common/entities/core.entity");
var magiamgia_entity_1 = require("../../../../../../../src/donhang/entities/magiamgia.entity");
var sanpham_entity_1 = require("../../../../../../../src/sanpham/entities/sanpham.entity");
var user_entity_1 = require("../../../../../../../src/user/entities/user.entity");
var typeorm_1 = require("typeorm");
var HinhThucMua;
(function (HinhThucMua) {
    HinhThucMua["MangVe"] = "MangVe";
    HinhThucMua["NgoiTaiQuan"] = "NgoiTaiQuan";
})(HinhThucMua = exports.HinhThucMua || (exports.HinhThucMua = {}));
(0, graphql_1.registerEnumType)(HinhThucMua, {
    name: 'HinhThucMua'
});
var DonHang = /** @class */ (function (_super) {
    __extends(DonHang, _super);
    function DonHang() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, graphql_1.Field)(function () { return user_entity_1.User; }),
        (0, typeorm_1.ManyToOne)(function () { return user_entity_1.User; })
    ], DonHang.prototype, "nguoiMua");
    __decorate([
        (0, graphql_1.Field)(function () { return [sanpham_entity_1.SanPham]; }),
        (0, typeorm_1.ManyToMany)(function () { return sanpham_entity_1.SanPham; }, function (sanPham) { return sanPham.donHang; }),
        (0, typeorm_1.JoinTable)()
    ], DonHang.prototype, "sanPham");
    __decorate([
        (0, graphql_1.Field)(function () { return [Number]; }),
        (0, typeorm_1.Column)('simple-array')
    ], DonHang.prototype, "soluong");
    __decorate([
        (0, graphql_1.Field)(function () { return magiamgia_entity_1.MaGiamGia; }, { nullable: true }),
        (0, typeorm_1.OneToOne)(function () { return magiamgia_entity_1.MaGiamGia; }, { nullable: true })
    ], DonHang.prototype, "maGiamGia");
    __decorate([
        (0, graphql_1.Field)(function () { return Date; }, { nullable: true }),
        (0, typeorm_1.Column)('timestamp without time zone', { nullable: true })
    ], DonHang.prototype, "ngayMua");
    __decorate([
        (0, graphql_1.Field)(),
        (0, typeorm_1.Column)()
    ], DonHang.prototype, "tongTienPhaiTra");
    __decorate([
        (0, graphql_1.Field)({ nullable: true }),
        (0, typeorm_1.Column)({ nullable: true })
    ], DonHang.prototype, "ghiChu");
    __decorate([
        (0, graphql_1.Field)(function () { return HinhThucMua; }),
        (0, typeorm_1.Column)('enum', { "enum": HinhThucMua })
    ], DonHang.prototype, "hinhThucMua");
    DonHang = __decorate([
        (0, graphql_1.InputType)('DonHangInputType', { isAbstract: true }),
        (0, graphql_1.ObjectType)(),
        (0, typeorm_1.Entity)()
    ], DonHang);
    return DonHang;
}(core_entity_1.CoreEntity));
exports.DonHang = DonHang;
