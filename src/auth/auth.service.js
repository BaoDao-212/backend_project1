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
exports.AuthService = void 0;
var common_1 = require("@nestjs/common");
var typeorm_1 = require("@nestjs/typeorm");
var jsonwebtoken_1 = require("jsonwebtoken");
var constants_1 = require("../../../../../../src/common/constants/constants");
var createError_1 = require("../../../../../../src/common/utils/createError");
var user_entity_1 = require("../../../../../../src/user/entities/user.entity");
var AuthService = /** @class */ (function () {
    function AuthService(userRepo, configService) {
        this.userRepo = userRepo;
        this.configService = configService;
    }
    // TODO: thêm kiểm tra opt gửi về điện thoại
    AuthService.prototype.registerUser = function (_a) {
        var soDienThoai = _a.soDienThoai, matKhau = _a.matKhau, matKhauLapLai = _a.matKhauLapLai;
        return __awaiter(this, void 0, void 0, function () {
            var user, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 3, , 4]);
                        if (matKhau !== matKhauLapLai)
                            return [2 /*return*/, (0, createError_1.createError)('Input', 'Mật khẩu lặp lại không khớp')];
                        return [4 /*yield*/, this.userRepo.findOne({
                                where: {
                                    soDienThoai: soDienThoai
                                }
                            })];
                    case 1:
                        user = _b.sent();
                        if (!user)
                            return [2 /*return*/, (0, createError_1.createError)('Input', 'Số số điện thoại không phù hợp')];
                        if (user.daDangKi)
                            return [2 /*return*/, (0, createError_1.createError)('Input', 'Tài khoản đã được đăng kí')];
                        user.matKhau = matKhau;
                        user.daDangKi = true;
                        return [4 /*yield*/, this.userRepo.save(user)];
                    case 2:
                        _b.sent();
                        return [2 /*return*/, {
                                ok: true
                            }];
                    case 3:
                        error_1 = _b.sent();
                        return [2 /*return*/, (0, createError_1.createError)('Server', 'Lỗi server, thử lại sau')];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AuthService.prototype.login = function (_a) {
        var soDienThoai = _a.soDienThoai, matKhau = _a.matKhau;
        return __awaiter(this, void 0, void 0, function () {
            var user, accessToken, error_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.userRepo.findOne({
                                where: {
                                    soDienThoai: soDienThoai
                                },
                                select: ['id', 'matKhau', 'daDangKi']
                            })];
                    case 1:
                        user = _b.sent();
                        return [4 /*yield*/, user.checkPassword(matKhau)];
                    case 2:
                        // if (!user)
                        //   return createError('Input', 'Số điện thoại không phù hợp');
                        if (!(_b.sent()))
                            return [2 /*return*/, (0, createError_1.createError)('Input', 'Mật khẩu không đúng')];
                        accessToken = (0, jsonwebtoken_1.sign)({
                            userId: user.id
                        }, this.configService.get(constants_1.ACCESS_TOKEN_SECRET), {
                            expiresIn: this.configService.get(constants_1.ACCESS_TOKEN_EXPIRED_IN)
                        });
                        return [2 /*return*/, {
                                ok: true,
                                accessToken: accessToken
                            }];
                    case 3:
                        error_2 = _b.sent();
                        return [2 /*return*/, (0, createError_1.createError)('Server', 'Lỗi server, thử lại sau')];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AuthService.prototype.newAccessToken = function (_a) {
        var accessToken = _a.accessToken;
        return __awaiter(this, void 0, void 0, function () {
            var decoded, newAccessToken;
            return __generator(this, function (_b) {
                try {
                    decoded = (0, jsonwebtoken_1.verify)(accessToken, this.configService.get(constants_1.ACCESS_TOKEN_SECRET));
                    if (!decoded || !decoded['userId'])
                        throw new jsonwebtoken_1.JsonWebTokenError('');
                    newAccessToken = (0, jsonwebtoken_1.sign)({
                        userId: decoded['userId']
                    }, this.configService.get(constants_1.ACCESS_TOKEN_SECRET), {
                        expiresIn: this.configService.get(constants_1.ACCESS_TOKEN_EXPIRED_IN)
                    });
                    return [2 /*return*/, {
                            ok: true,
                            accessToken: newAccessToken
                        }];
                }
                catch (err) {
                    if (err instanceof jsonwebtoken_1.JsonWebTokenError)
                        return [2 /*return*/, (0, createError_1.createError)('accessToken', 'Người dùng không hợp lệ!')];
                    return [2 /*return*/, (0, createError_1.createError)('Server', 'Lỗi server, thử lại sau')];
                }
                return [2 /*return*/];
            });
        });
    };
    AuthService.prototype.changePassword = function (currentUser, input) {
        return __awaiter(this, void 0, void 0, function () {
            var matKhauCu, matKhauMoi, matKhauMoiLapLai, user, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        matKhauCu = input.matKhauCu, matKhauMoi = input.matKhauMoi, matKhauMoiLapLai = input.matKhauMoiLapLai;
                        return [4 /*yield*/, this.userRepo.findOne({
                                where: { id: currentUser.id },
                                select: ['matKhau', 'id']
                            })];
                    case 1:
                        user = _a.sent();
                        //kiem tra User ton tai khong
                        if (!user)
                            (0, createError_1.createError)('Input', 'Người dùng không tồn tại');
                        return [4 /*yield*/, user.checkPassword(matKhauCu)];
                    case 2:
                        //kiem tra mat khau hien tai dung hay khong
                        if (!(_a.sent()))
                            return [2 /*return*/, (0, createError_1.createError)('Input', 'Mật khẩu hiện tại không đúng')];
                        //Kiem tra mat khau moi va mat khau nhap lai co trung nhau hay khong
                        if (matKhauMoi !== matKhauMoiLapLai)
                            return [2 /*return*/, (0, createError_1.createError)('Input', 'Mật khẩu lặp lại không khớp')];
                        return [4 /*yield*/, user.checkPassword(matKhauMoi)];
                    case 3:
                        //kiem tra mat khau cu va mat khau moi co trung nhau khong
                        if (_a.sent())
                            return [2 /*return*/, (0, createError_1.createError)('Input', 'Mật khẩu mới không được trùng mật khẩu cũ')];
                        user.matKhau = matKhauMoi;
                        return [4 /*yield*/, this.userRepo.save(user)];
                    case 4:
                        _a.sent();
                        return [2 /*return*/, {
                                ok: true
                            }];
                    case 5:
                        error_3 = _a.sent();
                        return [2 /*return*/, (0, createError_1.createError)('Server', 'Lỗi server, thử lại sau')];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    AuthService = __decorate([
        (0, common_1.Injectable)(),
        __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User))
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
