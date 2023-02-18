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
exports.ThongKeOuput = exports.XemDanhSachNguoiDungOutput = exports.XemDanhSachNguoiDungInput = exports.XemThongTinNguoiDungChoQuanLiInput = exports.XemThongTinNguoiDungOutput = exports.EditUserOutput = exports.EditUserInput = exports.AddUserOutput = exports.AddUserInput = void 0;
var graphql_1 = require("@nestjs/graphql");
var output_dto_1 = require("../../../../../../../src/common/dto/output.dto");
var sanpham_entity_1 = require("../../../../../../../src/sanpham/entities/sanpham.entity");
var user_entity_1 = require("../entities/user.entity");
var AddUserInput = /** @class */ (function (_super) {
    __extends(AddUserInput, _super);
    function AddUserInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AddUserInput = __decorate([
        (0, graphql_1.InputType)()
    ], AddUserInput);
    return AddUserInput;
}((0, graphql_1.OmitType)(user_entity_1.User, [
    'id',
    'checkPassword',
    'createdAt',
    'updatedAt',
    'hashPassword',
    'matKhau',
    'vaiTroNguoiDung',
    'daDangKi',
])));
exports.AddUserInput = AddUserInput;
var AddUserOutput = /** @class */ (function (_super) {
    __extends(AddUserOutput, _super);
    function AddUserOutput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AddUserOutput = __decorate([
        (0, graphql_1.ObjectType)()
    ], AddUserOutput);
    return AddUserOutput;
}(output_dto_1.CoreOutput));
exports.AddUserOutput = AddUserOutput;
var EditUserInput = /** @class */ (function (_super) {
    __extends(EditUserInput, _super);
    function EditUserInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, graphql_1.Field)(function () { return graphql_1.ID; })
    ], EditUserInput.prototype, "nguoiCanEditId");
    EditUserInput = __decorate([
        (0, graphql_1.InputType)()
    ], EditUserInput);
    return EditUserInput;
}((0, graphql_1.PartialType)((0, graphql_1.OmitType)(user_entity_1.User, [
    'checkPassword',
    'createdAt',
    'updatedAt',
    'hashPassword',
    'matKhau',
    'vaiTroNguoiDung',
    'id',
]))));
exports.EditUserInput = EditUserInput;
var EditUserOutput = /** @class */ (function (_super) {
    __extends(EditUserOutput, _super);
    function EditUserOutput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EditUserOutput = __decorate([
        (0, graphql_1.ObjectType)()
    ], EditUserOutput);
    return EditUserOutput;
}(output_dto_1.CoreOutput));
exports.EditUserOutput = EditUserOutput;
var XemThongTinNguoiDungOutput = /** @class */ (function (_super) {
    __extends(XemThongTinNguoiDungOutput, _super);
    function XemThongTinNguoiDungOutput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, graphql_1.Field)(function () { return user_entity_1.User; }, { nullable: true })
    ], XemThongTinNguoiDungOutput.prototype, "user");
    XemThongTinNguoiDungOutput = __decorate([
        (0, graphql_1.ObjectType)()
    ], XemThongTinNguoiDungOutput);
    return XemThongTinNguoiDungOutput;
}(output_dto_1.CoreOutput));
exports.XemThongTinNguoiDungOutput = XemThongTinNguoiDungOutput;
var XemThongTinNguoiDungChoQuanLiInput = /** @class */ (function () {
    function XemThongTinNguoiDungChoQuanLiInput() {
    }
    __decorate([
        (0, graphql_1.Field)(function () { return graphql_1.ID; })
    ], XemThongTinNguoiDungChoQuanLiInput.prototype, "userId");
    XemThongTinNguoiDungChoQuanLiInput = __decorate([
        (0, graphql_1.InputType)()
    ], XemThongTinNguoiDungChoQuanLiInput);
    return XemThongTinNguoiDungChoQuanLiInput;
}());
exports.XemThongTinNguoiDungChoQuanLiInput = XemThongTinNguoiDungChoQuanLiInput;
var XemDanhSachNguoiDungInput = /** @class */ (function () {
    function XemDanhSachNguoiDungInput() {
    }
    __decorate([
        (0, graphql_1.Field)(function () { return output_dto_1.PaginationInput; })
    ], XemDanhSachNguoiDungInput.prototype, "paginationInput");
    __decorate([
        (0, graphql_1.Field)({ nullable: true })
    ], XemDanhSachNguoiDungInput.prototype, "hoTen");
    __decorate([
        (0, graphql_1.Field)({ nullable: true })
    ], XemDanhSachNguoiDungInput.prototype, "soDienThoai");
    XemDanhSachNguoiDungInput = __decorate([
        (0, graphql_1.InputType)()
    ], XemDanhSachNguoiDungInput);
    return XemDanhSachNguoiDungInput;
}());
exports.XemDanhSachNguoiDungInput = XemDanhSachNguoiDungInput;
var XemDanhSachNguoiDungOutput = /** @class */ (function (_super) {
    __extends(XemDanhSachNguoiDungOutput, _super);
    function XemDanhSachNguoiDungOutput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, graphql_1.Field)(function () { return output_dto_1.PaginationOutput; }, { nullable: true })
    ], XemDanhSachNguoiDungOutput.prototype, "paginationOutput");
    __decorate([
        (0, graphql_1.Field)(function () { return [user_entity_1.User]; }, { nullable: true })
    ], XemDanhSachNguoiDungOutput.prototype, "users");
    XemDanhSachNguoiDungOutput = __decorate([
        (0, graphql_1.ObjectType)()
    ], XemDanhSachNguoiDungOutput);
    return XemDanhSachNguoiDungOutput;
}(output_dto_1.CoreOutput));
exports.XemDanhSachNguoiDungOutput = XemDanhSachNguoiDungOutput;
var ThongKeOuput = /** @class */ (function (_super) {
    __extends(ThongKeOuput, _super);
    function ThongKeOuput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, graphql_1.Field)(function () { return Number; }, { nullable: true })
    ], ThongKeOuput.prototype, "soNguoiDangKi");
    __decorate([
        (0, graphql_1.Field)(function () { return Number; }, { nullable: true })
    ], ThongKeOuput.prototype, "soDonHang");
    __decorate([
        (0, graphql_1.Field)(function () { return Number; }, { nullable: true })
    ], ThongKeOuput.prototype, "soDonHangThangNay");
    __decorate([
        (0, graphql_1.Field)(function () { return Number; }, { nullable: true })
    ], ThongKeOuput.prototype, "soNhanVien");
    __decorate([
        (0, graphql_1.Field)(function () { return Number; }, { nullable: true })
    ], ThongKeOuput.prototype, "soSanPham");
    __decorate([
        (0, graphql_1.Field)(function () { return Number; }, { nullable: true })
    ], ThongKeOuput.prototype, "doanhThuTrongThang");
    __decorate([
        (0, graphql_1.Field)(function () { return Number; }, { nullable: true })
    ], ThongKeOuput.prototype, "doanhThu");
    __decorate([
        (0, graphql_1.Field)(function () { return sanpham_entity_1.SanPham; }, { nullable: true })
    ], ThongKeOuput.prototype, "sanPhamBanChay");
    __decorate([
        (0, graphql_1.Field)(function () { return Number; }, { nullable: true })
    ], ThongKeOuput.prototype, "tienLuongCuaTatCaNhanVien");
    ThongKeOuput = __decorate([
        (0, graphql_1.ObjectType)()
    ], ThongKeOuput);
    return ThongKeOuput;
}(output_dto_1.CoreOutput));
exports.ThongKeOuput = ThongKeOuput;
