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
exports.XemDanhSachNhanVienOutput = exports.XemDanhSachNhanVienInput = exports.XemThongTinNhanVienChoQuanLiInput = exports.XemThongTinNhanVienOutput = exports.EditNhanVienOutput = exports.EditNhanVienInput = exports.AddNhanVienOutput = exports.AddNhanVienInput = void 0;
var graphql_1 = require("@nestjs/graphql");
var class_validator_1 = require("class-validator");
var output_dto_1 = require("../../../../../../../src/common/dto/output.dto");
var nhanvien_entity_1 = require("../entities/nhanvien.entity");
var AddNhanVienInput = /** @class */ (function (_super) {
    __extends(AddNhanVienInput, _super);
    function AddNhanVienInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, graphql_1.Field)()
    ], AddNhanVienInput.prototype, "soDienThoai");
    __decorate([
        (0, graphql_1.Field)()
    ], AddNhanVienInput.prototype, "ten");
    __decorate([
        (0, graphql_1.Field)(),
        (0, class_validator_1.IsIn)(['Nam', 'Nu'])
    ], AddNhanVienInput.prototype, "gioiTinh");
    AddNhanVienInput = __decorate([
        (0, graphql_1.InputType)()
    ], AddNhanVienInput);
    return AddNhanVienInput;
}((0, graphql_1.OmitType)(nhanvien_entity_1.NhanVien, [
    'nhanVien',
    'id',
    'createdAt',
    'updatedAt',
])));
exports.AddNhanVienInput = AddNhanVienInput;
var AddNhanVienOutput = /** @class */ (function (_super) {
    __extends(AddNhanVienOutput, _super);
    function AddNhanVienOutput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AddNhanVienOutput = __decorate([
        (0, graphql_1.ObjectType)()
    ], AddNhanVienOutput);
    return AddNhanVienOutput;
}(output_dto_1.CoreOutput));
exports.AddNhanVienOutput = AddNhanVienOutput;
var EditNhanVienInput = /** @class */ (function (_super) {
    __extends(EditNhanVienInput, _super);
    function EditNhanVienInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, graphql_1.Field)(function () { return graphql_1.ID; })
    ], EditNhanVienInput.prototype, "nguoiEditId");
    EditNhanVienInput = __decorate([
        (0, graphql_1.InputType)()
    ], EditNhanVienInput);
    return EditNhanVienInput;
}((0, graphql_1.PartialType)((0, graphql_1.OmitType)(nhanvien_entity_1.NhanVien, ['nhanVien']))));
exports.EditNhanVienInput = EditNhanVienInput;
var EditNhanVienOutput = /** @class */ (function (_super) {
    __extends(EditNhanVienOutput, _super);
    function EditNhanVienOutput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EditNhanVienOutput = __decorate([
        (0, graphql_1.ObjectType)()
    ], EditNhanVienOutput);
    return EditNhanVienOutput;
}(output_dto_1.CoreOutput));
exports.EditNhanVienOutput = EditNhanVienOutput;
var XemThongTinNhanVienOutput = /** @class */ (function (_super) {
    __extends(XemThongTinNhanVienOutput, _super);
    function XemThongTinNhanVienOutput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, graphql_1.Field)(function () { return nhanvien_entity_1.NhanVien; }, { nullable: true })
    ], XemThongTinNhanVienOutput.prototype, "nhanVien");
    XemThongTinNhanVienOutput = __decorate([
        (0, graphql_1.ObjectType)()
    ], XemThongTinNhanVienOutput);
    return XemThongTinNhanVienOutput;
}(output_dto_1.CoreOutput));
exports.XemThongTinNhanVienOutput = XemThongTinNhanVienOutput;
var XemThongTinNhanVienChoQuanLiInput = /** @class */ (function () {
    function XemThongTinNhanVienChoQuanLiInput() {
    }
    __decorate([
        (0, graphql_1.Field)(function () { return graphql_1.ID; })
    ], XemThongTinNhanVienChoQuanLiInput.prototype, "NhanVienId");
    XemThongTinNhanVienChoQuanLiInput = __decorate([
        (0, graphql_1.InputType)()
    ], XemThongTinNhanVienChoQuanLiInput);
    return XemThongTinNhanVienChoQuanLiInput;
}());
exports.XemThongTinNhanVienChoQuanLiInput = XemThongTinNhanVienChoQuanLiInput;
var XemDanhSachNhanVienInput = /** @class */ (function () {
    function XemDanhSachNhanVienInput() {
    }
    __decorate([
        (0, graphql_1.Field)(function () { return output_dto_1.PaginationInput; })
    ], XemDanhSachNhanVienInput.prototype, "paginationInput");
    __decorate([
        (0, graphql_1.Field)({ nullable: true })
    ], XemDanhSachNhanVienInput.prototype, "canCuocCongDan");
    __decorate([
        (0, graphql_1.Field)({ nullable: true })
    ], XemDanhSachNhanVienInput.prototype, "soDienThoai");
    XemDanhSachNhanVienInput = __decorate([
        (0, graphql_1.InputType)()
    ], XemDanhSachNhanVienInput);
    return XemDanhSachNhanVienInput;
}());
exports.XemDanhSachNhanVienInput = XemDanhSachNhanVienInput;
var XemDanhSachNhanVienOutput = /** @class */ (function (_super) {
    __extends(XemDanhSachNhanVienOutput, _super);
    function XemDanhSachNhanVienOutput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, graphql_1.Field)(function () { return output_dto_1.PaginationOutput; }, { nullable: true })
    ], XemDanhSachNhanVienOutput.prototype, "paginationOutput");
    __decorate([
        (0, graphql_1.Field)(function () { return [nhanvien_entity_1.NhanVien]; }, { nullable: true })
    ], XemDanhSachNhanVienOutput.prototype, "nhanViens");
    XemDanhSachNhanVienOutput = __decorate([
        (0, graphql_1.ObjectType)()
    ], XemDanhSachNhanVienOutput);
    return XemDanhSachNhanVienOutput;
}(output_dto_1.CoreOutput));
exports.XemDanhSachNhanVienOutput = XemDanhSachNhanVienOutput;
