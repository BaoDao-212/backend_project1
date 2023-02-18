"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PaginationOutput = exports.PaginationInput = exports.CoreOutput = void 0;
var graphql_1 = require("@nestjs/graphql");
var class_validator_1 = require("class-validator");
var CustomError = /** @class */ (function () {
    function CustomError() {
    }
    __decorate([
        (0, graphql_1.Field)()
    ], CustomError.prototype, "mainReason");
    __decorate([
        (0, graphql_1.Field)()
    ], CustomError.prototype, "message");
    CustomError = __decorate([
        (0, graphql_1.ObjectType)()
    ], CustomError);
    return CustomError;
}());
var CoreOutput = /** @class */ (function () {
    function CoreOutput() {
    }
    __decorate([
        (0, graphql_1.Field)()
    ], CoreOutput.prototype, "ok");
    __decorate([
        (0, graphql_1.Field)(function () { return CustomError; }, { nullable: true })
    ], CoreOutput.prototype, "error");
    CoreOutput = __decorate([
        (0, graphql_1.ObjectType)()
    ], CoreOutput);
    return CoreOutput;
}());
exports.CoreOutput = CoreOutput;
var PaginationInput = /** @class */ (function () {
    function PaginationInput() {
    }
    __decorate([
        (0, graphql_1.Field)(function () { return graphql_1.Int; }, { defaultValue: 1 }),
        (0, class_validator_1.IsInt)()
    ], PaginationInput.prototype, "page");
    __decorate([
        (0, graphql_1.Field)(function () { return graphql_1.Int; }, { defaultValue: 10 }),
        (0, class_validator_1.IsInt)()
    ], PaginationInput.prototype, "resultsPerPage");
    PaginationInput = __decorate([
        (0, graphql_1.InputType)()
    ], PaginationInput);
    return PaginationInput;
}());
exports.PaginationInput = PaginationInput;
var PaginationOutput = /** @class */ (function () {
    function PaginationOutput() {
    }
    __decorate([
        (0, graphql_1.Field)(function () { return graphql_1.Int; }, { nullable: true })
    ], PaginationOutput.prototype, "totalPages");
    __decorate([
        (0, graphql_1.Field)(function () { return graphql_1.Int; }, { nullable: true })
    ], PaginationOutput.prototype, "totalResults");
    PaginationOutput = __decorate([
        (0, graphql_1.ObjectType)()
    ], PaginationOutput);
    return PaginationOutput;
}());
exports.PaginationOutput = PaginationOutput;
