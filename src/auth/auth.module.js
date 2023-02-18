"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AuthModule = void 0;
var common_1 = require("@nestjs/common");
var core_1 = require("@nestjs/core");
var typeorm_1 = require("@nestjs/typeorm");
var user_entity_1 = require("../../../../../../src/user/entities/user.entity");
var auth_guard_1 = require("./auth.guard");
var auth_resolver_1 = require("./auth.resolver");
var auth_service_1 = require("./auth.service");
var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        (0, common_1.Module)({
            imports: [typeorm_1.TypeOrmModule.forFeature([user_entity_1.User])],
            providers: [
                auth_service_1.AuthService,
                auth_resolver_1.AuthResolver,
                {
                    provide: core_1.APP_GUARD,
                    useClass: auth_guard_1.AuthGuard
                },
            ]
        })
    ], AuthModule);
    return AuthModule;
}());
exports.AuthModule = AuthModule;
