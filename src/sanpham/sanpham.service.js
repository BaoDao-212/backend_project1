"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.SanPhamService = void 0;
var common_1 = require("@nestjs/common");
var typeorm_1 = require("@nestjs/typeorm");
var lodash_1 = require("lodash");
var core_entity_1 = require("../../../../../../src/common/entities/core.entity");
var createError_1 = require("../../../../../../src/common/utils/createError");
var user_entity_1 = require("../../../../../../src/user/entities/user.entity");
var typeorm_2 = require("typeorm");
var sanpham_entity_1 = require("./entities/sanpham.entity");
var SanPhamService = /** @class */ (function () {
    function SanPhamService(sanphamRepo, userRepo) {
        this.sanphamRepo = sanphamRepo;
        this.userRepo = userRepo;
    }
    // quản lí thêm sản phẩm
    SanPhamService.prototype.addSanPham = function (input) {
        return __awaiter(this, void 0, void 0, function () {
            var sanPham, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.sanphamRepo.findOne({
                                where: {
                                    ten: input.ten
                                }
                            })];
                    case 1:
                        sanPham = _a.sent();
                        if (sanPham)
                            return [2 /*return*/, (0, createError_1.createError)('Input', 'Mặt hàng này đã tồn tại')];
                        return [4 /*yield*/, this.sanphamRepo.save(this.sanphamRepo.create(__assign(__assign({}, input), { ngayTao: new Date() })))];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        console.log(error_1);
                        return [2 /*return*/, (0, createError_1.createError)('Server', 'Lỗi server, thử lại sau')];
                    case 4: return [2 /*return*/, {
                            ok: true
                        }];
                }
            });
        });
    };
    // xem thông tin sản phẩm cho người dùng thông thường
    SanPhamService.prototype.xemThongTinSanPham = function (input) {
        return __awaiter(this, void 0, void 0, function () {
            var sanpham, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.sanphamRepo.findOne({
                                where: { id: input.SanPhamId }
                            })];
                    case 1:
                        sanpham = _a.sent();
                        if (!sanpham)
                            return [2 /*return*/, (0, createError_1.createError)('Input', 'Sản phẩm không tồn tại')];
                        return [2 /*return*/, {
                                ok: true,
                                sanpham: sanpham
                            }];
                    case 2:
                        error_2 = _a.sent();
                        return [2 /*return*/, (0, createError_1.createError)('Server', 'Lỗi server, thử lại sau')];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    SanPhamService.prototype.editSanPham = function (input) {
        return __awaiter(this, void 0, void 0, function () {
            var sanPhamId, sanPham, updateSanPham, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        sanPhamId = input.sanPhamId;
                        return [4 /*yield*/, this.sanphamRepo.findOne({
                                where: {
                                    id: sanPhamId
                                }
                            })];
                    case 1:
                        sanPham = _a.sent();
                        if (!sanPham)
                            return [2 /*return*/, (0, createError_1.createError)('Input', 'Sản phẩm này không hợp lệ')];
                        updateSanPham = __assign(__assign({}, sanPham), (0, lodash_1.omitBy)(input, function (v) { return v == null || v == undefined; }));
                        this.sanphamRepo.save(updateSanPham);
                        return [2 /*return*/, {
                                ok: true
                            }];
                    case 2:
                        error_3 = _a.sent();
                        return [2 /*return*/, (0, createError_1.createError)('Server', 'Lỗi server, thử lại sau')];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    // xem danh sach nguoi dung cho quan li
    SanPhamService.prototype.xemDanhSachSanPham = function (input) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, page, resultsPerPage, tenSanPham, _b, sanPhams, totalResults, _c, _d, error_4;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        _e.trys.push([0, 3, , 4]);
                        _a = input.paginationInput, page = _a.page, resultsPerPage = _a.resultsPerPage, tenSanPham = input.tenSanPham;
                        return [4 /*yield*/, this.sanphamRepo.findAndCount({
                                where: {
                                    ten: tenSanPham ? (0, typeorm_2.ILike)("%".concat(tenSanPham, "%")) : undefined
                                },
                                skip: (page - 1) * resultsPerPage,
                                take: resultsPerPage,
                                order: {
                                    ngayTao: core_entity_1.SortOrder.DESC
                                }
                            })];
                    case 1:
                        _b = _e.sent(), sanPhams = _b[0], totalResults = _b[1];
                        _d = (_c = console).log;
                        return [4 /*yield*/, this.sanphamRepo.find()];
                    case 2:
                        _d.apply(_c, [_e.sent()]);
                        console.log(sanPhams);
                        return [2 /*return*/, {
                                ok: true,
                                sanPhams: sanPhams,
                                paginationOutput: {
                                    totalResults: totalResults,
                                    totalPages: Math.ceil(totalResults / resultsPerPage)
                                }
                            }];
                    case 3:
                        error_4 = _e.sent();
                        return [2 /*return*/, (0, createError_1.createError)('Server', 'Lỗi server, thử lại sau')];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    SanPhamService = __decorate([
        (0, common_1.Injectable)(),
        __param(0, (0, typeorm_1.InjectRepository)(sanpham_entity_1.SanPham)),
        __param(1, (0, typeorm_1.InjectRepository)(user_entity_1.User))
    ], SanPhamService);
    return SanPhamService;
}());
exports.SanPhamService = SanPhamService;
