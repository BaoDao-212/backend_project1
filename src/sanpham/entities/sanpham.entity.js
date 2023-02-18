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
exports.SanPham = exports.TrangThai = exports.LoaiSanPham = void 0;
var graphql_1 = require("@nestjs/graphql");
var class_validator_1 = require("class-validator");
var core_entity_1 = require("../../../../../../../src/common/entities/core.entity");
var donhang_entity_1 = require("../../../../../../../src/donhang/entities/donhang.entity");
var StoredFile_1 = require("../../../../../../../src/upload/object/StoredFile");
var typeorm_1 = require("typeorm");
var LoaiSanPham;
(function (LoaiSanPham) {
    LoaiSanPham["NuocUong"] = "NuocUong";
    LoaiSanPham["DoNgot"] = "DoNgot";
})(LoaiSanPham = exports.LoaiSanPham || (exports.LoaiSanPham = {}));
(0, graphql_1.registerEnumType)(LoaiSanPham, {
    name: 'LoaiSanPham'
});
var TrangThai;
(function (TrangThai) {
    TrangThai["DangBan"] = "DangBan";
    TrangThai["NgungBan"] = "NgungBan";
})(TrangThai = exports.TrangThai || (exports.TrangThai = {}));
(0, graphql_1.registerEnumType)(TrangThai, {
    name: 'TrangThai'
});
var SanPham = /** @class */ (function (_super) {
    __extends(SanPham, _super);
    function SanPham() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, graphql_1.Field)(function () { return StoredFile_1.StoredFile; }, { nullable: true }),
        (0, typeorm_1.Column)('json', { nullable: true }),
        (0, class_validator_1.ValidateNested)(),
        (0, class_validator_1.IsOptional)()
    ], SanPham.prototype, "avatar");
    __decorate([
        (0, graphql_1.Field)(),
        (0, typeorm_1.Column)(),
        (0, class_validator_1.IsString)()
    ], SanPham.prototype, "ten");
    __decorate([
        (0, graphql_1.Field)(function () { return LoaiSanPham; }),
        (0, typeorm_1.Column)('enum', {
            "enum": LoaiSanPham
        })
    ], SanPham.prototype, "loaiSanPham");
    __decorate([
        (0, graphql_1.Field)(function () { return [donhang_entity_1.DonHang]; }),
        (0, typeorm_1.ManyToMany)(function () { return donhang_entity_1.DonHang; }, function (donHang) { return donHang.sanPham; }),
        (0, typeorm_1.JoinTable)()
    ], SanPham.prototype, "donHang");
    __decorate([
        (0, graphql_1.Field)(function () { return TrangThai; }),
        (0, typeorm_1.Column)('enum', {
            "enum": TrangThai,
            "default": TrangThai.DangBan
        })
    ], SanPham.prototype, "trangThai");
    __decorate([
        (0, graphql_1.Field)(function () { return Date; }),
        (0, typeorm_1.Column)('timestamp without time zone')
    ], SanPham.prototype, "ngayTao");
    __decorate([
        (0, graphql_1.Field)({ nullable: true }),
        (0, typeorm_1.Column)({ nullable: true })
    ], SanPham.prototype, "soTien");
    __decorate([
        (0, graphql_1.Field)({ nullable: true }),
        (0, typeorm_1.Column)({ nullable: true })
    ], SanPham.prototype, "moTaSanPham");
    __decorate([
        (0, graphql_1.Field)({ nullable: true }),
        (0, typeorm_1.Column)({ nullable: true })
    ], SanPham.prototype, "ghiChu");
    SanPham = __decorate([
        (0, graphql_1.InputType)('SanPhamInputType', { isAbstract: true }),
        (0, graphql_1.ObjectType)(),
        (0, typeorm_1.Entity)()
    ], SanPham);
    return SanPham;
}(core_entity_1.CoreEntity));
exports.SanPham = SanPham;
