"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FirebaseModule = void 0;
var common_1 = require("@nestjs/common");
var constants_1 = require("../../../../../../src/common/constants/constants");
var firebase_service_1 = require("./firebase.service");
var FirebaseModule = /** @class */ (function () {
    function FirebaseModule() {
    }
    FirebaseModule_1 = FirebaseModule;
    FirebaseModule.forRoot = function (options) {
        return {
            module: FirebaseModule_1,
            global: true,
            providers: [
                {
                    provide: constants_1.FIREBASE_CONFIG_OPTIONS,
                    useValue: options
                },
                firebase_service_1.FirebaseService,
            ],
            exports: [firebase_service_1.FirebaseService]
        };
    };
    var FirebaseModule_1;
    FirebaseModule = FirebaseModule_1 = __decorate([
        (0, common_1.Module)({})
    ], FirebaseModule);
    return FirebaseModule;
}());
exports.FirebaseModule = FirebaseModule;
