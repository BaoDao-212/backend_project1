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
exports.UserService = void 0;
var common_1 = require("@nestjs/common");
var typeorm_1 = require("@nestjs/typeorm");
var lodash_1 = require("lodash");
var core_entity_1 = require("../../../../../../src/common/entities/core.entity");
var createError_1 = require("../../../../../../src/common/utils/createError");
var donhang_entity_1 = require("../../../../../../src/donhang/entities/donhang.entity");
var magiamgia_entity_1 = require("../../../../../../src/donhang/entities/magiamgia.entity");
var nhanvien_entity_1 = require("../../../../../../src/nhanvien/entities/nhanvien.entity");
var sanpham_entity_1 = require("../../../../../../src/sanpham/entities/sanpham.entity");
var typeorm_2 = require("typeorm");
var thongke_entity_1 = require("./entities/thongke.entity");
var user_entity_1 = require("./entities/user.entity");
var UserService = /** @class */ (function () {
    function UserService(userRepo, NhanVienRepo, SanPhamRepo, MaGiamGiaRepo, DonHangRepo, TopSPRepo) {
        this.userRepo = userRepo;
        this.NhanVienRepo = NhanVienRepo;
        this.SanPhamRepo = SanPhamRepo;
        this.MaGiamGiaRepo = MaGiamGiaRepo;
        this.DonHangRepo = DonHangRepo;
        this.TopSPRepo = TopSPRepo;
        this.thongKeChoQuanLy().then(function () {
            console.log('hee');
        });
    }
    // quản lí thêm người dùng
    UserService.prototype.addUser = function (input) {
        return __awaiter(this, void 0, void 0, function () {
            var user, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.userRepo.findOne({
                                where: {
                                    soDienThoai: input.soDienThoai
                                }
                            })];
                    case 1:
                        user = _a.sent();
                        if (user)
                            return [2 /*return*/, (0, createError_1.createError)('Input', 'Đã tồn tại căn cước công dân này')];
                        return [4 /*yield*/, this.userRepo.save(this.userRepo.create(__assign({}, input)))];
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
    // xem thông tin người dùng cho người dùng thông thường
    UserService.prototype.xemThongTinNguoiDung = function (currentUser) {
        return __awaiter(this, void 0, void 0, function () {
            var user, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.userRepo.findOne({
                                where: { id: currentUser.id }
                            })];
                    case 1:
                        user = _a.sent();
                        if (!user)
                            return [2 /*return*/, (0, createError_1.createError)('Input', 'Người dùng không tồn tại')];
                        return [2 /*return*/, {
                                ok: true,
                                user: user
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
    UserService.prototype.xemThongTinNguoiDungChoQuanLi = function (input) {
        return __awaiter(this, void 0, void 0, function () {
            var user, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.userRepo.findOne({
                                where: { id: input.userId }
                            })];
                    case 1:
                        user = _a.sent();
                        if (!user)
                            return [2 /*return*/, (0, createError_1.createError)('Input', 'Người dùng không tồn tại')];
                        return [2 /*return*/, {
                                ok: true,
                                user: user
                            }];
                    case 2:
                        error_3 = _a.sent();
                        return [2 /*return*/, (0, createError_1.createError)('Server', 'Lỗi server, thử lại sau')];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UserService.prototype.editUser = function (input) {
        return __awaiter(this, void 0, void 0, function () {
            var nguoiCanEditId, nguoiCanEdit, updateUser, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        nguoiCanEditId = input.nguoiCanEditId;
                        return [4 /*yield*/, this.userRepo.findOne({
                                where: {
                                    id: nguoiCanEditId
                                }
                            })];
                    case 1:
                        nguoiCanEdit = _a.sent();
                        if (!nguoiCanEdit)
                            return [2 /*return*/, (0, createError_1.createError)('Input', 'Người yêu cầu không hợp lệ')];
                        updateUser = __assign(__assign({}, nguoiCanEdit), (0, lodash_1.omitBy)(input, function (v) { return v == null || v == undefined; }));
                        this.userRepo.save(updateUser);
                        return [2 /*return*/, {
                                ok: true
                            }];
                    case 2:
                        error_4 = _a.sent();
                        return [2 /*return*/, (0, createError_1.createError)('Server', 'Lỗi server, thử lại sau')];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    // xem danh sach nguoi dung cho quan li
    UserService.prototype.xemDanhSachNguoiDung = function (input) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, page, resultsPerPage, hoTen, soDienThoai, _b, users, totalResults, error_5;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        _a = input.paginationInput, page = _a.page, resultsPerPage = _a.resultsPerPage, hoTen = input.hoTen, soDienThoai = input.soDienThoai;
                        return [4 /*yield*/, this.userRepo.findAndCount({
                                where: {
                                    ten: hoTen ? (0, typeorm_2.ILike)("%".concat(hoTen, "%")) : undefined,
                                    soDienThoai: soDienThoai ? (0, typeorm_2.ILike)("%".concat(soDienThoai, "%")) : undefined
                                },
                                skip: (page - 1) * resultsPerPage,
                                take: resultsPerPage,
                                order: {
                                    updatedAt: core_entity_1.SortOrder.DESC
                                }
                            })];
                    case 1:
                        _b = _c.sent(), users = _b[0], totalResults = _b[1];
                        return [2 /*return*/, {
                                ok: true,
                                users: users,
                                paginationOutput: {
                                    totalResults: totalResults,
                                    totalPages: Math.ceil(totalResults / resultsPerPage)
                                }
                            }];
                    case 2:
                        error_5 = _c.sent();
                        return [2 /*return*/, (0, createError_1.createError)('Server', 'Lỗi server, thử lại sau')];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UserService.prototype.thongKeChoQuanLy = function () {
        return __awaiter(this, void 0, void 0, function () {
            var numberOfUser, numberOfNhanVien, numberOfSanPham, soDonHang, DonHangThangNay, sanPhamBanChay, thongkesp, json, fs_1, fs, jo, error_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 7, , 8]);
                        return [4 /*yield*/, this.userRepo.count()];
                    case 1:
                        numberOfUser = _a.sent();
                        return [4 /*yield*/, this.NhanVienRepo.count()];
                    case 2:
                        numberOfNhanVien = _a.sent();
                        return [4 /*yield*/, this.SanPhamRepo.count({
                                where: {
                                    trangThai: sanpham_entity_1.TrangThai.DangBan
                                }
                            })];
                    case 3:
                        numberOfSanPham = _a.sent();
                        return [4 /*yield*/, this.DonHangRepo.count()];
                    case 4:
                        soDonHang = _a.sent();
                        return [4 /*yield*/, this.DonHangRepo.find({
                                where: {
                                    ngayMua: (0, typeorm_2.LessThan)(new Date()) &&
                                        (0, typeorm_2.MoreThan)(new Date(new Date().getMonth() - 1))
                                }
                            })];
                    case 5:
                        DonHangThangNay = _a.sent();
                        return [4 /*yield*/, this.SanPhamRepo.find({
                                relations: {
                                    donHang: {
                                        sanPham: true
                                    }
                                }
                            })];
                    case 6:
                        sanPhamBanChay = _a.sent();
                        if (new Date().getDay() == 1) {
                            thongkesp = sanPhamBanChay.map(function (sp) {
                                var soluong = sp.donHang
                                    .map(function (dh) {
                                    var idsp = dh.sanPham.findIndex(function (spp) { return spp.id == sp.id; });
                                    return dh.soluong[idsp];
                                })
                                    .reduce(function (p, c) { return p + +c; }, 0);
                                return { ten: sp.ten, soluong: soluong };
                            });
                            thongkesp.sort(function (b, a) {
                                return a.soluong - b.soluong;
                            });
                            json = JSON.stringify(thongkesp.slice(0, 5));
                            fs_1 = require('fs');
                            fs_1.writeFile('../backend_project1/src/datathongkesp', json, function (err) {
                                if (err)
                                    throw err;
                            });
                            console.log(json);
                        }
                        fs = require('fs');
                        jo = fs.readFile('../backend_project1/src/datathongkesp', function (err, data) {
                            if (err) {
                                return console.error(err);
                            }
                            console.log(d);
                            return data.toString();
                        });
                        console.log(jo);
                        return [2 /*return*/, {
                                ok: true
                            }];
                    case 7:
                        error_6 = _a.sent();
                        console.log(error_6);
                        return [2 /*return*/, (0, createError_1.createError)('Server', 'Lỗi server, thử lại sau')];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    UserService = __decorate([
        (0, common_1.Injectable)(),
        __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
        __param(1, (0, typeorm_1.InjectRepository)(nhanvien_entity_1.NhanVien)),
        __param(2, (0, typeorm_1.InjectRepository)(sanpham_entity_1.SanPham)),
        __param(3, (0, typeorm_1.InjectRepository)(magiamgia_entity_1.MaGiamGia)),
        __param(4, (0, typeorm_1.InjectRepository)(donhang_entity_1.DonHang)),
        __param(5, (0, typeorm_1.InjectRepository)(thongke_entity_1.TopSP))
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
