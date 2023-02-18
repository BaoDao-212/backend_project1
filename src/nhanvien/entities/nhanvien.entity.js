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
exports.NhanVien = exports.CaLamViec = void 0;
var graphql_1 = require("@nestjs/graphql");
var core_entity_1 = require("../../../../../../../src/common/entities/core.entity");
var user_entity_1 = require("../../../../../../../src/user/entities/user.entity");
var typeorm_1 = require("typeorm");
var CaLamViec;
(function (CaLamViec) {
    CaLamViec["Sang"] = "Sang";
    CaLamViec["Chieu"] = "Chieu";
    CaLamViec["Toi"] = "Toi";
})(CaLamViec = exports.CaLamViec || (exports.CaLamViec = {}));
(0, graphql_1.registerEnumType)(CaLamViec, {
    name: 'CaLamViec'
});
var NhanVien = /** @class */ (function (_super) {
    __extends(NhanVien, _super);
    function NhanVien() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, graphql_1.Field)(),
        (0, typeorm_1.ManyToOne)(function () { return user_entity_1.User; })
    ], NhanVien.prototype, "nhanVien");
    __decorate([
        (0, graphql_1.Field)(),
        (0, typeorm_1.Column)({ nullable: true })
    ], NhanVien.prototype, "chiNhanh");
    __decorate([
        (0, graphql_1.Field)(function () { return Date; }, { nullable: true }),
        (0, typeorm_1.Column)('timestamp without time zone', { nullable: true })
    ], NhanVien.prototype, "ngayBatDauLam");
    __decorate([
        (0, graphql_1.Field)(),
        (0, typeorm_1.Column)()
    ], NhanVien.prototype, "MailLienHe");
    __decorate([
        (0, graphql_1.Field)({ nullable: true }),
        (0, typeorm_1.Column)({ nullable: true })
    ], NhanVien.prototype, "canCuocCongDan");
    __decorate([
        (0, graphql_1.Field)(function () { return CaLamViec; }),
        (0, typeorm_1.Column)('enum', { "enum": CaLamViec })
    ], NhanVien.prototype, "caLamViec");
    __decorate([
        (0, graphql_1.Field)(),
        (0, typeorm_1.Column)()
    ], NhanVien.prototype, "luong");
    NhanVien = __decorate([
        (0, graphql_1.InputType)('NhanVienInputType', { isAbstract: true }),
        (0, graphql_1.ObjectType)(),
        (0, typeorm_1.Entity)()
    ], NhanVien);
    return NhanVien;
}(core_entity_1.CoreEntity));
exports.NhanVien = NhanVien;
