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
exports.XemDanhSachSanPhamOutput = exports.XemDanhSachSanPhamInput = exports.XemThongTinSanPhamInput = exports.XemThongTinSanPhamOutput = exports.EditSanPhamOutput = exports.EditSanPhamInput = exports.AddSanPhamOutput = exports.AddSanPhamInput = void 0;
var graphql_1 = require("@nestjs/graphql");
var output_dto_1 = require("../../../../../../../src/common/dto/output.dto");
var sanpham_entity_1 = require("../entities/sanpham.entity");
var AddSanPhamInput = /** @class */ (function (_super) {
    __extends(AddSanPhamInput, _super);
    function AddSanPhamInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AddSanPhamInput = __decorate([
        (0, graphql_1.InputType)()
    ], AddSanPhamInput);
    return AddSanPhamInput;
}((0, graphql_1.PickType)(sanpham_entity_1.SanPham, [
    'ten',
    'soTien',
    'loaiSanPham',
    'moTaSanPham',
    'avatar',
])));
exports.AddSanPhamInput = AddSanPhamInput;
var AddSanPhamOutput = /** @class */ (function (_super) {
    __extends(AddSanPhamOutput, _super);
    function AddSanPhamOutput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AddSanPhamOutput = __decorate([
        (0, graphql_1.ObjectType)()
    ], AddSanPhamOutput);
    return AddSanPhamOutput;
}(output_dto_1.CoreOutput));
exports.AddSanPhamOutput = AddSanPhamOutput;
var EditSanPhamInput = /** @class */ (function (_super) {
    __extends(EditSanPhamInput, _super);
    function EditSanPhamInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, graphql_1.Field)(function () { return graphql_1.ID; })
    ], EditSanPhamInput.prototype, "sanPhamId");
    EditSanPhamInput = __decorate([
        (0, graphql_1.InputType)()
    ], EditSanPhamInput);
    return EditSanPhamInput;
}((0, graphql_1.PartialType)((0, graphql_1.PickType)(sanpham_entity_1.SanPham, [
    'ten',
    'soTien',
    'avatar',
    'trangThai',
    'loaiSanPham',
    'moTaSanPham',
]))));
exports.EditSanPhamInput = EditSanPhamInput;
var EditSanPhamOutput = /** @class */ (function (_super) {
    __extends(EditSanPhamOutput, _super);
    function EditSanPhamOutput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EditSanPhamOutput = __decorate([
        (0, graphql_1.ObjectType)()
    ], EditSanPhamOutput);
    return EditSanPhamOutput;
}(output_dto_1.CoreOutput));
exports.EditSanPhamOutput = EditSanPhamOutput;
var XemThongTinSanPhamOutput = /** @class */ (function (_super) {
    __extends(XemThongTinSanPhamOutput, _super);
    function XemThongTinSanPhamOutput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, graphql_1.Field)(function () { return sanpham_entity_1.SanPham; }, { nullable: true })
    ], XemThongTinSanPhamOutput.prototype, "sanpham");
    XemThongTinSanPhamOutput = __decorate([
        (0, graphql_1.ObjectType)()
    ], XemThongTinSanPhamOutput);
    return XemThongTinSanPhamOutput;
}(output_dto_1.CoreOutput));
exports.XemThongTinSanPhamOutput = XemThongTinSanPhamOutput;
var XemThongTinSanPhamInput = /** @class */ (function () {
    function XemThongTinSanPhamInput() {
    }
    __decorate([
        (0, graphql_1.Field)(function () { return graphql_1.ID; })
    ], XemThongTinSanPhamInput.prototype, "SanPhamId");
    XemThongTinSanPhamInput = __decorate([
        (0, graphql_1.InputType)()
    ], XemThongTinSanPhamInput);
    return XemThongTinSanPhamInput;
}());
exports.XemThongTinSanPhamInput = XemThongTinSanPhamInput;
var XemDanhSachSanPhamInput = /** @class */ (function () {
    function XemDanhSachSanPhamInput() {
    }
    __decorate([
        (0, graphql_1.Field)(function () { return output_dto_1.PaginationInput; })
    ], XemDanhSachSanPhamInput.prototype, "paginationInput");
    __decorate([
        (0, graphql_1.Field)({ nullable: true })
    ], XemDanhSachSanPhamInput.prototype, "tenSanPham");
    XemDanhSachSanPhamInput = __decorate([
        (0, graphql_1.InputType)()
    ], XemDanhSachSanPhamInput);
    return XemDanhSachSanPhamInput;
}());
exports.XemDanhSachSanPhamInput = XemDanhSachSanPhamInput;
var XemDanhSachSanPhamOutput = /** @class */ (function (_super) {
    __extends(XemDanhSachSanPhamOutput, _super);
    function XemDanhSachSanPhamOutput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, graphql_1.Field)(function () { return [sanpham_entity_1.SanPham]; }, { nullable: true })
    ], XemDanhSachSanPhamOutput.prototype, "sanPhams");
    __decorate([
        (0, graphql_1.Field)(function () { return output_dto_1.PaginationOutput; }, { nullable: true })
    ], XemDanhSachSanPhamOutput.prototype, "paginationOutput");
    XemDanhSachSanPhamOutput = __decorate([
        (0, graphql_1.ObjectType)()
    ], XemDanhSachSanPhamOutput);
    return XemDanhSachSanPhamOutput;
}(output_dto_1.CoreOutput));
exports.XemDanhSachSanPhamOutput = XemDanhSachSanPhamOutput;
