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
exports.UserResolver = void 0;
var graphql_1 = require("@nestjs/graphql");
var role_decorator_1 = require("../../../../../../src/auth/role.decorator");
var user_decorator_1 = require("../../../../../../src/auth/user.decorator");
var user_dto_1 = require("./dto/user.dto");
var user_entity_1 = require("./entities/user.entity");
var UserResolver = /** @class */ (function () {
    function UserResolver(userService) {
        this.userService = userService;
    }
    UserResolver.prototype.addUser = function (input) {
        return this.userService.addUser(input);
    };
    UserResolver.prototype.xemThongTinNguoiDung = function (user) {
        return this.userService.xemThongTinNguoiDung(user);
    };
    UserResolver.prototype.xemThongTinNguoiDungChoQuanLi = function (input) {
        return this.userService.xemThongTinNguoiDungChoQuanLi(input);
    };
    UserResolver.prototype.editUser = function (input) {
        return this.userService.editUser(input);
    };
    UserResolver.prototype.xemDanhSachNguoiDung = function (input) {
        return this.userService.xemDanhSachNguoiDung(input);
    };
    __decorate([
        (0, graphql_1.Mutation)(function () { return user_dto_1.AddUserOutput; }),
        (0, role_decorator_1.Roles)(['Admin', 'QuanLy']),
        __param(0, (0, graphql_1.Args)('input'))
    ], UserResolver.prototype, "addUser");
    __decorate([
        (0, graphql_1.Query)(function () { return user_dto_1.XemThongTinNguoiDungOutput; }),
        (0, role_decorator_1.Roles)(['Any']),
        __param(0, (0, user_decorator_1.CurrentUser)())
    ], UserResolver.prototype, "xemThongTinNguoiDung");
    __decorate([
        (0, graphql_1.Query)(function () { return user_dto_1.XemThongTinNguoiDungOutput; }),
        (0, role_decorator_1.Roles)(['Admin', 'QuanLy']),
        __param(0, (0, graphql_1.Args)('input'))
    ], UserResolver.prototype, "xemThongTinNguoiDungChoQuanLi");
    __decorate([
        (0, graphql_1.Mutation)(function () { return user_dto_1.EditUserOutput; }),
        (0, role_decorator_1.Roles)(['Admin', 'QuanLy']),
        __param(0, (0, graphql_1.Args)('input'))
    ], UserResolver.prototype, "editUser");
    __decorate([
        (0, graphql_1.Query)(function () { return user_dto_1.XemDanhSachNguoiDungOutput; }),
        (0, role_decorator_1.Roles)(['Admin', 'QuanLy']),
        __param(0, (0, graphql_1.Args)('input'))
    ], UserResolver.prototype, "xemDanhSachNguoiDung");
    UserResolver = __decorate([
        (0, graphql_1.Resolver)(function () { return user_entity_1.User; })
    ], UserResolver);
    return UserResolver;
}());
exports.UserResolver = UserResolver;
