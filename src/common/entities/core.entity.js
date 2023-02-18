"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CoreEntity = exports.SortOrder = void 0;
var graphql_1 = require("@nestjs/graphql");
var typeorm_1 = require("typeorm");
var SortOrder;
(function (SortOrder) {
    SortOrder["ASC"] = "ASC";
    SortOrder["DESC"] = "DESC";
})(SortOrder = exports.SortOrder || (exports.SortOrder = {}));
var CoreEntity = /** @class */ (function () {
    function CoreEntity() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        (0, graphql_1.Field)(function () { return graphql_1.ID; })
    ], CoreEntity.prototype, "id");
    __decorate([
        (0, typeorm_1.CreateDateColumn)(),
        (0, graphql_1.Field)(function () { return Date; })
    ], CoreEntity.prototype, "createdAt");
    __decorate([
        (0, typeorm_1.UpdateDateColumn)(),
        (0, graphql_1.Field)(function () { return Date; })
    ], CoreEntity.prototype, "updatedAt");
    CoreEntity = __decorate([
        (0, graphql_1.ObjectType)({ isAbstract: true }),
        (0, typeorm_1.Entity)()
    ], CoreEntity);
    return CoreEntity;
}());
exports.CoreEntity = CoreEntity;
