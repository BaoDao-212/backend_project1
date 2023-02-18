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
exports.UploadController = void 0;
var common_1 = require("@nestjs/common");
var platform_express_1 = require("@nestjs/platform-express");
var UploadController = /** @class */ (function () {
    function UploadController(uploadService) {
        this.uploadService = uploadService;
    }
    UploadController.prototype.uploadFile = function (file, _a) {
        var storagePath = _a.storagePath;
        return this.uploadService.uploadFile(file, storagePath);
    };
    UploadController.prototype.uploadFiles = function (files, _a) {
        var storagePath = _a.storagePath;
        return this.uploadService.uploadFiles(files, storagePath);
    };
    UploadController.prototype.deleteFile = function (input) {
        return this.uploadService.deleteFile(input);
    };
    UploadController.prototype.deleteFiles = function (input) {
        return this.uploadService.deleteFiles(input);
    };
    __decorate([
        (0, common_1.Post)('upload/file'),
        (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
        (0, common_1.HttpCode)(201),
        __param(0, (0, common_1.UploadedFile)()),
        __param(1, (0, common_1.Body)())
    ], UploadController.prototype, "uploadFile");
    __decorate([
        (0, common_1.Post)('upload/files'),
        (0, common_1.UseInterceptors)((0, platform_express_1.FilesInterceptor)('files')),
        (0, common_1.HttpCode)(201),
        __param(0, (0, common_1.UploadedFiles)()),
        __param(1, (0, common_1.Body)())
    ], UploadController.prototype, "uploadFiles");
    __decorate([
        (0, common_1.Post)('delete/file'),
        (0, common_1.HttpCode)(204),
        __param(0, (0, common_1.Body)())
    ], UploadController.prototype, "deleteFile");
    __decorate([
        (0, common_1.Post)('delete/files'),
        (0, common_1.HttpCode)(204),
        __param(0, (0, common_1.Body)())
    ], UploadController.prototype, "deleteFiles");
    UploadController = __decorate([
        (0, common_1.Controller)('')
    ], UploadController);
    return UploadController;
}());
exports.UploadController = UploadController;
