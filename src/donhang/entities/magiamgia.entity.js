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
exports.MaGiamGia = exports.TypeDiscount = void 0;
var graphql_1 = require("@nestjs/graphql");
var core_entity_1 = require("../../../../../../../src/common/entities/core.entity");
var user_entity_1 = require("../../../../../../../src/user/entities/user.entity");
var typeorm_1 = require("typeorm");
var TypeDiscount;
(function (TypeDiscount) {
    TypeDiscount["FreeShip"] = "FreeShip";
    TypeDiscount["ProductDiscount"] = "ProductDiscount";
})(TypeDiscount = exports.TypeDiscount || (exports.TypeDiscount = {}));
(0, graphql_1.registerEnumType)(TypeDiscount, {
    name: 'TypeDiscount'
});
var MaGiamGia = /** @class */ (function (_super) {
    __extends(MaGiamGia, _super);
    function MaGiamGia() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, graphql_1.Field)(),
        (0, typeorm_1.Column)()
    ], MaGiamGia.prototype, "codeVoucher");
    __decorate([
        (0, graphql_1.Field)(),
        (0, typeorm_1.Column)()
    ], MaGiamGia.prototype, "minAmount");
    __decorate([
        (0, graphql_1.Field)(function () { return user_entity_1.User; }),
        (0, typeorm_1.ManyToMany)(function () { return user_entity_1.User; })
    ], MaGiamGia.prototype, "user");
    __decorate([
        (0, graphql_1.Field)(),
        (0, typeorm_1.Column)()
    ], MaGiamGia.prototype, "voucherAmount");
    __decorate([
        (0, graphql_1.Field)(function () { return Date; }),
        (0, typeorm_1.Column)('timestamp without time zone')
    ], MaGiamGia.prototype, "startDate");
    __decorate([
        (0, graphql_1.Field)(function () { return Date; }),
        (0, typeorm_1.Column)('timestamp without time zone')
    ], MaGiamGia.prototype, "endDate");
    __decorate([
        (0, graphql_1.Field)(function () { return TypeDiscount; }),
        (0, typeorm_1.Column)('enum', { "enum": TypeDiscount })
    ], MaGiamGia.prototype, "typeDiscount");
    MaGiamGia = __decorate([
        (0, graphql_1.InputType)('MaGiamGiaInputType', { isAbstract: true }),
        (0, graphql_1.ObjectType)(),
        (0, typeorm_1.Entity)()
    ], MaGiamGia);
    return MaGiamGia;
}(core_entity_1.CoreEntity));
exports.MaGiamGia = MaGiamGia;
