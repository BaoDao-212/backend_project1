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
exports.XemDanhSachMaGiamGiaOutput = exports.XemDanhSachMaGiamGiaInput = exports.XemThongTinMaGiamGiaChoQuanLiInput = exports.XemThongTinMaGiamGiaOutput = exports.AddMaGiamGiaOutput = exports.AddMaGiamGiaInput = void 0;
var graphql_1 = require("@nestjs/graphql");
var output_dto_1 = require("../../../../../../../src/common/dto/output.dto");
var magiamgia_entity_1 = require("../entities/magiamgia.entity");
var AddMaGiamGiaInput = /** @class */ (function (_super) {
    __extends(AddMaGiamGiaInput, _super);
    function AddMaGiamGiaInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AddMaGiamGiaInput = __decorate([
        (0, graphql_1.InputType)()
    ], AddMaGiamGiaInput);
    return AddMaGiamGiaInput;
}((0, graphql_1.OmitType)(magiamgia_entity_1.MaGiamGia, [
    'id',
    'createdAt',
    'updatedAt',
])));
exports.AddMaGiamGiaInput = AddMaGiamGiaInput;
var AddMaGiamGiaOutput = /** @class */ (function (_super) {
    __extends(AddMaGiamGiaOutput, _super);
    function AddMaGiamGiaOutput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AddMaGiamGiaOutput = __decorate([
        (0, graphql_1.ObjectType)()
    ], AddMaGiamGiaOutput);
    return AddMaGiamGiaOutput;
}(output_dto_1.CoreOutput));
exports.AddMaGiamGiaOutput = AddMaGiamGiaOutput;
var XemThongTinMaGiamGiaOutput = /** @class */ (function (_super) {
    __extends(XemThongTinMaGiamGiaOutput, _super);
    function XemThongTinMaGiamGiaOutput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, graphql_1.Field)(function () { return magiamgia_entity_1.MaGiamGia; }, { nullable: true })
    ], XemThongTinMaGiamGiaOutput.prototype, "maGiamGia");
    XemThongTinMaGiamGiaOutput = __decorate([
        (0, graphql_1.ObjectType)()
    ], XemThongTinMaGiamGiaOutput);
    return XemThongTinMaGiamGiaOutput;
}(output_dto_1.CoreOutput));
exports.XemThongTinMaGiamGiaOutput = XemThongTinMaGiamGiaOutput;
var XemThongTinMaGiamGiaChoQuanLiInput = /** @class */ (function () {
    function XemThongTinMaGiamGiaChoQuanLiInput() {
    }
    __decorate([
        (0, graphql_1.Field)(function () { return graphql_1.ID; })
    ], XemThongTinMaGiamGiaChoQuanLiInput.prototype, "maGiamGiaId");
    XemThongTinMaGiamGiaChoQuanLiInput = __decorate([
        (0, graphql_1.InputType)()
    ], XemThongTinMaGiamGiaChoQuanLiInput);
    return XemThongTinMaGiamGiaChoQuanLiInput;
}());
exports.XemThongTinMaGiamGiaChoQuanLiInput = XemThongTinMaGiamGiaChoQuanLiInput;
var XemDanhSachMaGiamGiaInput = /** @class */ (function () {
    function XemDanhSachMaGiamGiaInput() {
    }
    __decorate([
        (0, graphql_1.Field)(function () { return output_dto_1.PaginationInput; })
    ], XemDanhSachMaGiamGiaInput.prototype, "paginationInput");
    __decorate([
        (0, graphql_1.Field)({ nullable: true })
    ], XemDanhSachMaGiamGiaInput.prototype, "codeVoucher");
    XemDanhSachMaGiamGiaInput = __decorate([
        (0, graphql_1.InputType)()
    ], XemDanhSachMaGiamGiaInput);
    return XemDanhSachMaGiamGiaInput;
}());
exports.XemDanhSachMaGiamGiaInput = XemDanhSachMaGiamGiaInput;
var XemDanhSachMaGiamGiaOutput = /** @class */ (function (_super) {
    __extends(XemDanhSachMaGiamGiaOutput, _super);
    function XemDanhSachMaGiamGiaOutput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, graphql_1.Field)(function () { return output_dto_1.PaginationOutput; }, { nullable: true })
    ], XemDanhSachMaGiamGiaOutput.prototype, "paginationOutput");
    __decorate([
        (0, graphql_1.Field)(function () { return [magiamgia_entity_1.MaGiamGia]; }, { nullable: true })
    ], XemDanhSachMaGiamGiaOutput.prototype, "maGiamGias");
    XemDanhSachMaGiamGiaOutput = __decorate([
        (0, graphql_1.ObjectType)()
    ], XemDanhSachMaGiamGiaOutput);
    return XemDanhSachMaGiamGiaOutput;
}(output_dto_1.CoreOutput));
exports.XemDanhSachMaGiamGiaOutput = XemDanhSachMaGiamGiaOutput;
