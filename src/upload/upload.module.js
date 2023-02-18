"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UploadModule = void 0;
var common_1 = require("@nestjs/common");
var firebase_module_1 = require("../../../../../../src/firebase/firebase.module");
var upload_controller_1 = require("./upload.controller");
var upload_service_1 = require("./upload.service");
var UploadModule = /** @class */ (function () {
    function UploadModule() {
    }
    UploadModule = __decorate([
        (0, common_1.Module)({
            controllers: [upload_controller_1.UploadController],
            providers: [upload_service_1.UploadService],
            imports: [firebase_module_1.FirebaseModule]
        })
    ], UploadModule);
    return UploadModule;
}());
exports.UploadModule = UploadModule;
