"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DataModule = void 0;
var common_1 = require("@nestjs/common");
var typeorm_1 = require("@nestjs/typeorm");
var user_entity_1 = require("../../../../../../../src/user/entities/user.entity");
var data_service_1 = require("./data.service");
// module với nhiệm vụ generate data vào csdl
var DataModule = /** @class */ (function () {
    function DataModule() {
    }
    DataModule = __decorate([
        (0, common_1.Module)({
            providers: [data_service_1.DataService],
            imports: [typeorm_1.TypeOrmModule.forFeature([user_entity_1.User])]
        })
    ], DataModule);
    return DataModule;
}());
exports.DataModule = DataModule;
