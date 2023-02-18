"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UploadService = void 0;
var common_1 = require("@nestjs/common");
var UploadService = /** @class */ (function () {
    function UploadService(firebaseService) {
        this.firebaseService = firebaseService;
    }
    UploadService.prototype.uploadFile = function (file, storagePath) {
        console.log(storagePath);
        return this.firebaseService.uploadFile(file, storagePath);
    };
    UploadService.prototype.uploadFiles = function (files, storagePath) {
        return this.firebaseService.uploadFiles(files, storagePath);
    };
    UploadService.prototype.deleteFile = function (input) {
        return this.firebaseService.deleteFile(input.storagePath);
    };
    UploadService.prototype.deleteFiles = function (input) {
        return this.firebaseService.deleteFiles(input.storagePaths);
    };
    UploadService = __decorate([
        (0, common_1.Injectable)()
    ], UploadService);
    return UploadService;
}());
exports.UploadService = UploadService;
