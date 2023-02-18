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
exports.MaGiamGiaService = void 0;
var common_1 = require("@nestjs/common");
var typeorm_1 = require("@nestjs/typeorm");
var core_entity_1 = require("../../../../../../src/common/entities/core.entity");
var createError_1 = require("../../../../../../src/common/utils/createError");
var typeorm_2 = require("typeorm");
var magiamgia_entity_1 = require("./entities/magiamgia.entity");
var MaGiamGiaService = /** @class */ (function () {
    function MaGiamGiaService(MaGiamGiaRepo) {
        this.MaGiamGiaRepo = MaGiamGiaRepo;
    }
    // quản lí thêm người dùng
    MaGiamGiaService.prototype.addMaGiamGia = function (input) {
        return __awaiter(this, void 0, void 0, function () {
            var codeVoucher, endDate, minAmount, startDate, typeDiscount, voucherAmount, magiamgia, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        codeVoucher = input.codeVoucher, endDate = input.endDate, minAmount = input.minAmount, startDate = input.startDate, typeDiscount = input.typeDiscount, voucherAmount = input.voucherAmount;
                        if (endDate < startDate)
                            return [2 /*return*/, (0, createError_1.createError)('Input', 'Ngày bắt đầu và ngày hết hạn không hợp lệ')];
                        return [4 /*yield*/, this.MaGiamGiaRepo.findOne({
                                where: {
                                    codeVoucher: codeVoucher
                                }
                            })];
                    case 1:
                        magiamgia = _a.sent();
                        if (magiamgia)
                            return [2 /*return*/, (0, createError_1.createError)('Input', 'Mã giảm giá đã trùng tên với mã trước đây')];
                        if (voucherAmount > minAmount)
                            return [2 /*return*/, (0, createError_1.createError)('Input', 'Số tiền giảm giá không hợp lệ')];
                        return [4 /*yield*/, this.MaGiamGiaRepo.save(this.MaGiamGiaRepo.create(__assign({}, input)))];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        return [2 /*return*/, (0, createError_1.createError)('Server', 'Lỗi server, thử lại sau')];
                    case 4: return [2 /*return*/, {
                            ok: true
                        }];
                }
            });
        });
    };
    // xem thông tin voucher cho quản lí
    MaGiamGiaService.prototype.xemThongTinMaGiamGiaChoQuanLi = function (input) {
        return __awaiter(this, void 0, void 0, function () {
            var magiamgia, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.MaGiamGiaRepo.findOne({
                                where: { id: input.maGiamGiaId }
                            })];
                    case 1:
                        magiamgia = _a.sent();
                        if (!magiamgia)
                            return [2 /*return*/, (0, createError_1.createError)('Input', 'Người dùng không tồn tại')];
                        return [2 /*return*/, {
                                ok: true,
                                maGiamGia: magiamgia
                            }];
                    case 2:
                        error_2 = _a.sent();
                        return [2 /*return*/, (0, createError_1.createError)('Server', 'Lỗi server, thử lại sau')];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    // xem danh sach nguoi dung cho quan li
    MaGiamGiaService.prototype.xemDanhSachMaGiamGia = function (input) {
        return __awaiter(this, void 0, void 0, function () {
            var codeVoucher, _a, page, resultsPerPage, _b, maGiamGias, totalResults, error_3;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        codeVoucher = input.codeVoucher, _a = input.paginationInput, page = _a.page, resultsPerPage = _a.resultsPerPage;
                        return [4 /*yield*/, this.MaGiamGiaRepo.findAndCount({
                                where: {
                                    codeVoucher: codeVoucher ? (0, typeorm_2.ILike)("%".concat(codeVoucher, "%")) : undefined
                                },
                                skip: (page - 1) * resultsPerPage,
                                take: resultsPerPage,
                                order: {
                                    updatedAt: core_entity_1.SortOrder.DESC
                                }
                            })];
                    case 1:
                        _b = _c.sent(), maGiamGias = _b[0], totalResults = _b[1];
                        return [2 /*return*/, {
                                ok: true,
                                maGiamGias: maGiamGias,
                                paginationOutput: {
                                    totalResults: totalResults,
                                    totalPages: Math.ceil(totalResults / resultsPerPage)
                                }
                            }];
                    case 2:
                        error_3 = _c.sent();
                        return [2 /*return*/, (0, createError_1.createError)('Server', 'Lỗi server, thử lại sau')];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    MaGiamGiaService = __decorate([
        (0, common_1.Injectable)(),
        __param(0, (0, typeorm_1.InjectRepository)(magiamgia_entity_1.MaGiamGia))
    ], MaGiamGiaService);
    return MaGiamGiaService;
}());
exports.MaGiamGiaService = MaGiamGiaService;
