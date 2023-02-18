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
exports.XemDanhSachDonHangOutput = exports.XemDanhSachDonHangInput = exports.XemThongTinDonHangChoQuanLiInput = exports.XemThongTinDonHangChoQuanLiOutput = exports.AddDonHangOutput = exports.AddDonHangInput = void 0;
var graphql_1 = require("@nestjs/graphql");
var output_dto_1 = require("../../../../../../../src/common/dto/output.dto");
var donhang_entity_1 = require("../entities/donhang.entity");
var Order = /** @class */ (function () {
    function Order() {
    }
    __decorate([
        (0, graphql_1.Field)(function () { return graphql_1.ID; })
    ], Order.prototype, "sanPhamId");
    __decorate([
        (0, graphql_1.Field)()
    ], Order.prototype, "numberSanPham");
    Order = __decorate([
        (0, graphql_1.InputType)()
    ], Order);
    return Order;
}());
var AddDonHangInput = /** @class */ (function (_super) {
    __extends(AddDonHangInput, _super);
    function AddDonHangInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, graphql_1.Field)()
    ], AddDonHangInput.prototype, "diaChi");
    __decorate([
        (0, graphql_1.Field)({ nullable: true })
    ], AddDonHangInput.prototype, "codeVoucher");
    __decorate([
        (0, graphql_1.Field)(function () { return [Order]; })
    ], AddDonHangInput.prototype, "sanPham");
    __decorate([
        (0, graphql_1.Field)()
    ], AddDonHangInput.prototype, "PhiShip");
    AddDonHangInput = __decorate([
        (0, graphql_1.InputType)()
    ], AddDonHangInput);
    return AddDonHangInput;
}((0, graphql_1.OmitType)(donhang_entity_1.DonHang, [
    'id',
    'createdAt',
    'updatedAt',
    'nguoiMua',
    'sanPham',
    'maGiamGia',
    'ngayMua',
    'tongTienPhaiTra',
    'ghiChu',
    'soluong',
])));
exports.AddDonHangInput = AddDonHangInput;
var AddDonHangOutput = /** @class */ (function (_super) {
    __extends(AddDonHangOutput, _super);
    function AddDonHangOutput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AddDonHangOutput = __decorate([
        (0, graphql_1.ObjectType)()
    ], AddDonHangOutput);
    return AddDonHangOutput;
}(output_dto_1.CoreOutput));
exports.AddDonHangOutput = AddDonHangOutput;
var XemThongTinDonHangChoQuanLiOutput = /** @class */ (function (_super) {
    __extends(XemThongTinDonHangChoQuanLiOutput, _super);
    function XemThongTinDonHangChoQuanLiOutput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, graphql_1.Field)(function () { return donhang_entity_1.DonHang; }, { nullable: true })
    ], XemThongTinDonHangChoQuanLiOutput.prototype, "DonHang");
    XemThongTinDonHangChoQuanLiOutput = __decorate([
        (0, graphql_1.ObjectType)()
    ], XemThongTinDonHangChoQuanLiOutput);
    return XemThongTinDonHangChoQuanLiOutput;
}(output_dto_1.CoreOutput));
exports.XemThongTinDonHangChoQuanLiOutput = XemThongTinDonHangChoQuanLiOutput;
var XemThongTinDonHangChoQuanLiInput = /** @class */ (function () {
    function XemThongTinDonHangChoQuanLiInput() {
    }
    __decorate([
        (0, graphql_1.Field)(function () { return graphql_1.ID; })
    ], XemThongTinDonHangChoQuanLiInput.prototype, "DonHangId");
    XemThongTinDonHangChoQuanLiInput = __decorate([
        (0, graphql_1.InputType)()
    ], XemThongTinDonHangChoQuanLiInput);
    return XemThongTinDonHangChoQuanLiInput;
}());
exports.XemThongTinDonHangChoQuanLiInput = XemThongTinDonHangChoQuanLiInput;
var XemDanhSachDonHangInput = /** @class */ (function () {
    function XemDanhSachDonHangInput() {
    }
    __decorate([
        (0, graphql_1.Field)(function () { return output_dto_1.PaginationInput; })
    ], XemDanhSachDonHangInput.prototype, "paginationInput");
    __decorate([
        (0, graphql_1.Field)({ nullable: true })
    ], XemDanhSachDonHangInput.prototype, "ngayMua");
    XemDanhSachDonHangInput = __decorate([
        (0, graphql_1.InputType)()
    ], XemDanhSachDonHangInput);
    return XemDanhSachDonHangInput;
}());
exports.XemDanhSachDonHangInput = XemDanhSachDonHangInput;
var XemDanhSachDonHangOutput = /** @class */ (function (_super) {
    __extends(XemDanhSachDonHangOutput, _super);
    function XemDanhSachDonHangOutput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, graphql_1.Field)(function () { return output_dto_1.PaginationOutput; }, { nullable: true })
    ], XemDanhSachDonHangOutput.prototype, "paginationOutput");
    __decorate([
        (0, graphql_1.Field)(function () { return [donhang_entity_1.DonHang]; }, { nullable: true })
    ], XemDanhSachDonHangOutput.prototype, "DonHangs");
    XemDanhSachDonHangOutput = __decorate([
        (0, graphql_1.ObjectType)()
    ], XemDanhSachDonHangOutput);
    return XemDanhSachDonHangOutput;
}(output_dto_1.CoreOutput));
exports.XemDanhSachDonHangOutput = XemDanhSachDonHangOutput;
