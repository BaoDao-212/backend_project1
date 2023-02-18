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
exports.NhanVienService = void 0;
var common_1 = require("@nestjs/common");
var typeorm_1 = require("@nestjs/typeorm");
var lodash_1 = require("lodash");
var core_entity_1 = require("../../../../../../src/common/entities/core.entity");
var createError_1 = require("../../../../../../src/common/utils/createError");
var user_entity_1 = require("../../../../../../src/user/entities/user.entity");
var typeorm_2 = require("typeorm");
var nhanvien_entity_1 = require("./entities/nhanvien.entity");
var NhanVienService = /** @class */ (function () {
    function NhanVienService(NhanVienRepo, UserRepo) {
        this.NhanVienRepo = NhanVienRepo;
        this.UserRepo = UserRepo;
    }
    // quản lí thêm người dùng
    NhanVienService.prototype.addNhanVien = function (input) {
        return __awaiter(this, void 0, void 0, function () {
            var NhanVien_1, nvUser, nhanVienUser, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 6, , 7]);
                        return [4 /*yield*/, this.NhanVienRepo.findOne({
                                where: {
                                    canCuocCongDan: input.canCuocCongDan
                                }
                            })];
                    case 1:
                        NhanVien_1 = _a.sent();
                        if (NhanVien_1)
                            return [2 /*return*/, (0, createError_1.createError)('Input', 'Đã tồn tại nhân viên này')];
                        return [4 /*yield*/, this.UserRepo.findOne({
                                where: {
                                    soDienThoai: input.soDienThoai
                                }
                            })];
                    case 2:
                        nvUser = _a.sent();
                        if (nvUser)
                            return [2 /*return*/, (0, createError_1.createError)('Input', 'Số điện thoại của người này đã tồn tại')];
                        return [4 /*yield*/, this.UserRepo.create({
                                soDienThoai: input.soDienThoai,
                                vaiTroNguoiDung: user_entity_1.VaitroNguoiDung.NhanVien,
                                ten: input.ten,
                                gioiTinh: input.gioiTinh,
                                daDangKi: true,
                                matKhau: 'password'
                            })];
                    case 3:
                        nhanVienUser = _a.sent();
                        return [4 /*yield*/, this.UserRepo.save(nhanVienUser)];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.NhanVienRepo.save(this.NhanVienRepo.create({
                                caLamViec: input.caLamViec,
                                canCuocCongDan: input.canCuocCongDan,
                                chiNhanh: input.chiNhanh,
                                MailLienHe: input.MailLienHe,
                                luong: input.luong,
                                nhanVien: nhanVienUser
                            }))];
                    case 5:
                        _a.sent();
                        return [3 /*break*/, 7];
                    case 6:
                        error_1 = _a.sent();
                        console.log(error_1);
                        return [2 /*return*/, (0, createError_1.createError)('Server', 'Lỗi server, thử lại sau')];
                    case 7: return [2 /*return*/, {
                            ok: true
                        }];
                }
            });
        });
    };
    // xem thông tin người dùng cho người dùng thông thường
    NhanVienService.prototype.xemThongTinNhanVien = function (currentNhanVien) {
        return __awaiter(this, void 0, void 0, function () {
            var nhanVien, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.NhanVienRepo.findOne({
                                where: { id: currentNhanVien.id }
                            })];
                    case 1:
                        nhanVien = _a.sent();
                        if (!nhanVien)
                            return [2 /*return*/, (0, createError_1.createError)('Input', 'Người dùng không tồn tại')];
                        return [2 /*return*/, {
                                ok: true,
                                nhanVien: nhanVien
                            }];
                    case 2:
                        error_2 = _a.sent();
                        return [2 /*return*/, (0, createError_1.createError)('Server', 'Lỗi server, thử lại sau')];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    // xem thông tin người dùng cho quản lí
    NhanVienService.prototype.xemThongTinNhanVienChoQuanLi = function (input) {
        return __awaiter(this, void 0, void 0, function () {
            var nhanVien, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.NhanVienRepo.findOne({
                                where: { id: input.NhanVienId }
                            })];
                    case 1:
                        nhanVien = _a.sent();
                        if (!nhanVien)
                            return [2 /*return*/, (0, createError_1.createError)('Input', 'Người dùng không tồn tại')];
                        return [2 /*return*/, {
                                ok: true,
                                nhanVien: nhanVien
                            }];
                    case 2:
                        error_3 = _a.sent();
                        return [2 /*return*/, (0, createError_1.createError)('Server', 'Lỗi server, thử lại sau')];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    NhanVienService.prototype.editNhanVien = function (input) {
        return __awaiter(this, void 0, void 0, function () {
            var updateNhanVien;
            return __generator(this, function (_a) {
                try {
                    updateNhanVien = __assign({}, (0, lodash_1.omitBy)(input, function (v) { return v == null || v == undefined; }));
                    this.NhanVienRepo.save(updateNhanVien);
                    return [2 /*return*/, {
                            ok: true
                        }];
                }
                catch (error) {
                    return [2 /*return*/, (0, createError_1.createError)('Server', 'Lỗi server, thử lại sau')];
                }
                return [2 /*return*/];
            });
        });
    };
    // xem danh sach nguoi dung cho quan li
    NhanVienService.prototype.xemDanhSachNhanVien = function (input) {
        return __awaiter(this, void 0, void 0, function () {
            var canCuocCongDan, soDienThoai, _a, page, resultsPerPage, _b, nhanViens, totalResults, error_4;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        canCuocCongDan = input.canCuocCongDan, soDienThoai = input.soDienThoai, _a = input.paginationInput, page = _a.page, resultsPerPage = _a.resultsPerPage;
                        return [4 /*yield*/, this.NhanVienRepo.findAndCount({
                                where: {
                                    canCuocCongDan: canCuocCongDan
                                        ? (0, typeorm_2.ILike)("%".concat(canCuocCongDan, "%"))
                                        : undefined,
                                    nhanVien: {
                                        soDienThoai: soDienThoai ? (0, typeorm_2.ILike)("%".concat(soDienThoai, "%")) : undefined
                                    }
                                },
                                relations: {
                                    nhanVien: true
                                },
                                skip: (page - 1) * resultsPerPage,
                                take: resultsPerPage,
                                order: {
                                    updatedAt: core_entity_1.SortOrder.DESC
                                }
                            })];
                    case 1:
                        _b = _c.sent(), nhanViens = _b[0], totalResults = _b[1];
                        return [2 /*return*/, {
                                ok: true,
                                nhanViens: nhanViens,
                                paginationOutput: {
                                    totalResults: totalResults,
                                    totalPages: Math.ceil(totalResults / resultsPerPage)
                                }
                            }];
                    case 2:
                        error_4 = _c.sent();
                        return [2 /*return*/, (0, createError_1.createError)('Server', 'Lỗi server, thử lại sau')];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    NhanVienService = __decorate([
        (0, common_1.Injectable)(),
        __param(0, (0, typeorm_1.InjectRepository)(nhanvien_entity_1.NhanVien)),
        __param(1, (0, typeorm_1.InjectRepository)(user_entity_1.User))
    ], NhanVienService);
    return NhanVienService;
}());
exports.NhanVienService = NhanVienService;
