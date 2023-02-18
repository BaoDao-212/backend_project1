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
exports.ChangePasswordOutput = exports.ChangePasswordInput = exports.NewAccessTokenOutput = exports.NewAccessTokenInput = exports.LoginOutput = exports.LoginInput = exports.RegisterUserOutput = exports.RegisterUserInput = void 0;
var graphql_1 = require("@nestjs/graphql");
var output_dto_1 = require("../../../../../../../src/common/dto/output.dto");
var user_entity_1 = require("../../../../../../../src/user/entities/user.entity");
var RegisterUserInput = /** @class */ (function (_super) {
    __extends(RegisterUserInput, _super);
    function RegisterUserInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, graphql_1.Field)()
    ], RegisterUserInput.prototype, "matKhauLapLai");
    RegisterUserInput = __decorate([
        (0, graphql_1.InputType)()
    ], RegisterUserInput);
    return RegisterUserInput;
}((0, graphql_1.PickType)(user_entity_1.User, [
    'soDienThoai',
    'matKhau',
])));
exports.RegisterUserInput = RegisterUserInput;
var RegisterUserOutput = /** @class */ (function (_super) {
    __extends(RegisterUserOutput, _super);
    function RegisterUserOutput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RegisterUserOutput = __decorate([
        (0, graphql_1.ObjectType)()
    ], RegisterUserOutput);
    return RegisterUserOutput;
}(output_dto_1.CoreOutput));
exports.RegisterUserOutput = RegisterUserOutput;
var LoginInput = /** @class */ (function (_super) {
    __extends(LoginInput, _super);
    function LoginInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, graphql_1.Field)()
    ], LoginInput.prototype, "matKhau");
    LoginInput = __decorate([
        (0, graphql_1.InputType)()
    ], LoginInput);
    return LoginInput;
}((0, graphql_1.PickType)(user_entity_1.User, ['soDienThoai'])));
exports.LoginInput = LoginInput;
var LoginOutput = /** @class */ (function (_super) {
    __extends(LoginOutput, _super);
    function LoginOutput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, graphql_1.Field)({ nullable: true })
    ], LoginOutput.prototype, "accessToken");
    LoginOutput = __decorate([
        (0, graphql_1.ObjectType)()
    ], LoginOutput);
    return LoginOutput;
}(output_dto_1.CoreOutput));
exports.LoginOutput = LoginOutput;
var NewAccessTokenInput = /** @class */ (function () {
    function NewAccessTokenInput() {
    }
    __decorate([
        (0, graphql_1.Field)()
    ], NewAccessTokenInput.prototype, "accessToken");
    NewAccessTokenInput = __decorate([
        (0, graphql_1.InputType)()
    ], NewAccessTokenInput);
    return NewAccessTokenInput;
}());
exports.NewAccessTokenInput = NewAccessTokenInput;
var NewAccessTokenOutput = /** @class */ (function (_super) {
    __extends(NewAccessTokenOutput, _super);
    function NewAccessTokenOutput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, graphql_1.Field)({ nullable: true })
    ], NewAccessTokenOutput.prototype, "accessToken");
    NewAccessTokenOutput = __decorate([
        (0, graphql_1.ObjectType)()
    ], NewAccessTokenOutput);
    return NewAccessTokenOutput;
}(output_dto_1.CoreOutput));
exports.NewAccessTokenOutput = NewAccessTokenOutput;
var ChangePasswordInput = /** @class */ (function (_super) {
    __extends(ChangePasswordInput, _super);
    function ChangePasswordInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, graphql_1.Field)()
    ], ChangePasswordInput.prototype, "matKhauCu");
    __decorate([
        (0, graphql_1.Field)()
    ], ChangePasswordInput.prototype, "matKhauMoi");
    __decorate([
        (0, graphql_1.Field)()
    ], ChangePasswordInput.prototype, "matKhauMoiLapLai");
    ChangePasswordInput = __decorate([
        (0, graphql_1.InputType)()
    ], ChangePasswordInput);
    return ChangePasswordInput;
}(output_dto_1.CoreOutput));
exports.ChangePasswordInput = ChangePasswordInput;
var ChangePasswordOutput = /** @class */ (function (_super) {
    __extends(ChangePasswordOutput, _super);
    function ChangePasswordOutput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChangePasswordOutput = __decorate([
        (0, graphql_1.ObjectType)()
    ], ChangePasswordOutput);
    return ChangePasswordOutput;
}(output_dto_1.CoreOutput));
exports.ChangePasswordOutput = ChangePasswordOutput;
