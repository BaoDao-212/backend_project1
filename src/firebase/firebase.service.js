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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.FirebaseService = void 0;
var common_1 = require("@nestjs/common");
var app_1 = require("firebase/app");
var storage_1 = require("firebase/storage");
var sharp = require("sharp");
var constants_1 = require("../../../../../../src/common/constants/constants");
var uuid_1 = require("uuid");
var FirebaseService = /** @class */ (function () {
    function FirebaseService(configOption) {
        this.firebaseApp = (0, app_1.initializeApp)(configOption);
        this.storage = (0, storage_1.getStorage)(this.firebaseApp);
    }
    FirebaseService.prototype.uploadFile = function (file, storagePath) {
        return __awaiter(this, void 0, void 0, function () {
            var storageName, metatdata, buffer, storageRef, result, fileUrl, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        storageName = "".concat((0, uuid_1.v1)(), ".webp");
                        metatdata = {
                            contentType: 'image/webp'
                        };
                        return [4 /*yield*/, sharp(file.buffer)
                                .webp({
                                quality: 60
                            })
                                .toBuffer()];
                    case 1:
                        buffer = _a.sent();
                        storageRef = (0, storage_1.ref)(this.storage, "".concat(storagePath, "/").concat(storageName));
                        return [4 /*yield*/, (0, storage_1.uploadBytes)(storageRef, buffer, metatdata)];
                    case 2:
                        result = _a.sent();
                        return [4 /*yield*/, (0, storage_1.getDownloadURL)(result.ref)];
                    case 3:
                        fileUrl = _a.sent();
                        console.log(fileUrl);
                        return [2 /*return*/, {
                                fileReference: {
                                    fileUrl: fileUrl,
                                    filePath: result.ref.fullPath
                                }
                            }];
                    case 4:
                        error_1 = _a.sent();
                        throw new common_1.ServiceUnavailableException('Không thể tải ảnh lên, thử lại sau');
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    FirebaseService.prototype.uploadFiles = function (files, storagePath) {
        return __awaiter(this, void 0, void 0, function () {
            var results, fileReferences, _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, Promise.all(files.map(function (file) { return _this.uploadFile(file, storagePath); }))];
                    case 1:
                        results = _b.sent();
                        fileReferences = results.map(function (_a) {
                            var _b = _a.fileReference, filePath = _b.filePath, fileUrl = _b.fileUrl;
                            return ({ fileUrl: fileUrl, filePath: filePath });
                        });
                        return [2 /*return*/, {
                                fileReferences: fileReferences
                            }];
                    case 2:
                        _a = _b.sent();
                        throw new common_1.ServiceUnavailableException('Không thể tải ảnh lên, thử lại sau');
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    FirebaseService.prototype.deleteFile = function (storagePathName) {
        return __awaiter(this, void 0, void 0, function () {
            var storageRef, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        storageRef = (0, storage_1.ref)(this.storage, storagePathName);
                        return [4 /*yield*/, (0, storage_1.deleteObject)(storageRef)];
                    case 1:
                        _b.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        _a = _b.sent();
                        throw new common_1.ServiceUnavailableException('Không thể xoá file, thử lại sau');
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    FirebaseService.prototype.deleteFiles = function (storagePaths) {
        return __awaiter(this, void 0, void 0, function () {
            var err_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, Promise.all(storagePaths.map(function (p) { return _this.deleteFile(p); }))];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _a.sent();
                        throw new common_1.ServiceUnavailableException('Không thể xoá file, thử lại sau');
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    FirebaseService = __decorate([
        (0, common_1.Injectable)(),
        __param(0, (0, common_1.Inject)(constants_1.FIREBASE_CONFIG_OPTIONS))
    ], FirebaseService);
    return FirebaseService;
}());
exports.FirebaseService = FirebaseService;
