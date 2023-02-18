"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.AuthResolver = void 0;
var graphql_1 = require("@nestjs/graphql");
var auth_dto_1 = require("./dto/auth.dto");
var role_decorator_1 = require("./role.decorator");
var user_decorator_1 = require("./user.decorator");
var AuthResolver = /** @class */ (function () {
    function AuthResolver(authService) {
        this.authService = authService;
    }
    AuthResolver.prototype.registerUser = function (input) {
        return this.authService.registerUser(input);
    };
    AuthResolver.prototype.login = function (input) {
        return this.authService.login(input);
    };
    AuthResolver.prototype.newAccessToken = function (input) {
        return this.authService.newAccessToken(input);
    };
    AuthResolver.prototype.changePassword = function (user, input) {
        return this.authService.changePassword(user, input);
    };
    __decorate([
        (0, graphql_1.Mutation)(function () { return auth_dto_1.RegisterUserOutput; }),
        __param(0, (0, graphql_1.Args)('input'))
    ], AuthResolver.prototype, "registerUser");
    __decorate([
        (0, graphql_1.Query)(function () { return auth_dto_1.LoginOutput; }),
        __param(0, (0, graphql_1.Args)('input'))
    ], AuthResolver.prototype, "login");
    __decorate([
        (0, graphql_1.Query)(function () { return auth_dto_1.NewAccessTokenOutput; }),
        __param(0, (0, graphql_1.Args)('input'))
    ], AuthResolver.prototype, "newAccessToken");
    __decorate([
        (0, graphql_1.Mutation)(function () { return auth_dto_1.ChangePasswordOutput; }),
        (0, role_decorator_1.Roles)(['Any']),
        __param(0, (0, user_decorator_1.CurrentUser)()),
        __param(1, (0, graphql_1.Args)('input'))
    ], AuthResolver.prototype, "changePassword");
    AuthResolver = __decorate([
        (0, graphql_1.Resolver)()
    ], AuthResolver);
    return AuthResolver;
}());
exports.AuthResolver = AuthResolver;
