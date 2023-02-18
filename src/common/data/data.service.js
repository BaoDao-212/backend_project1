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
exports.DataService = void 0;
var common_1 = require("@nestjs/common");
var typeorm_1 = require("@nestjs/typeorm");
var lodash_1 = require("lodash");
var user_entity_1 = require("../../../../../../../src/user/entities/user.entity");
var alphabetLetters = (0, lodash_1.range)(26)
    .map(function (e) { return [
    String.fromCharCode(e + 'a'.charCodeAt(0)),
    String.fromCharCode(e + 'A'.charCodeAt(0)),
]; })
    .flat();
var DataService = /** @class */ (function () {
    function DataService(userRepo) {
        this.userRepo = userRepo;
        // this.generateUserData(100);
    }
    // generate dữ liệu người dùng vào csdl
    DataService.prototype.generateUserData = function (soLuong) {
        return __awaiter(this, void 0, void 0, function () {
            var ho, tenDem, ten, ngheNghiep, noiSinh, dauSoDT, datas;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ho = [
                            'Phạm',
                            'Nguyễn',
                            'Trần',
                            'Trương',
                            'Đỗ',
                            'Mã',
                            'Vũ',
                            'Đặng',
                            'Phan',
                            'Hoàng',
                            'Huỳnh',
                            'Lê',
                        ];
                        tenDem = [
                            'Văn',
                            'Thuỳ',
                            'Thị',
                            'Hoàng',
                            'Việt',
                            'An',
                            'Đức',
                            'Khánh',
                            'Nhật',
                            'Khánh',
                            'Quỳnh',
                            'Xuân',
                            'Nhật',
                            'Ngọc',
                        ];
                        ten = [
                            'An',
                            'Dương',
                            'Bình',
                            'Bảo',
                            'Hoàng',
                            'Đức',
                            'Khang',
                            'Thành',
                            'Linh',
                            'Tú',
                            'Huy',
                            'Tùng',
                            'Công',
                            'Cường',
                            'Anh',
                            'Nguyệt',
                            'Vi',
                            'Diệp',
                            'Hà',
                            'Hiền',
                            'Phương',
                            'Thương',
                        ];
                        ngheNghiep = [
                            'Giáo viên',
                            'Nông dân',
                            'Công nhân',
                            'Bộ đội',
                            'Nội trợ',
                            'Bác sĩ',
                            'Y tá',
                            'Lao động tự do',
                            'Nhân viên',
                        ];
                        noiSinh = [
                            'Hoà Bình',
                            'Sơn La',
                            'Hà Giang',
                            'Phú Thọ',
                            'Bắc Giang',
                            'Thái Bình',
                            'Nam Định',
                            'Hà Nội',
                        ];
                        dauSoDT = [
                            '032',
                            '033',
                            '034',
                            '093',
                            '094',
                            '090',
                            '076',
                            '077',
                            '078',
                        ];
                        datas = (0, lodash_1.range)(soLuong).map(function (_) {
                            var temp = "".concat((0, lodash_1.sampleSize)(alphabetLetters, (0, lodash_1.sample)([4, 5, 6])).join(''), ", ").concat((0, lodash_1.sampleSize)(alphabetLetters, (0, lodash_1.sample)([4, 5, 6])).join(''), ", ").concat((0, lodash_1.sample)(noiSinh));
                            var start = new Date(1945, 0, 1);
                            var end = new Date(2022, 0, 1);
                            return _this.userRepo.save(_this.userRepo.create({
                                ten: "".concat((0, lodash_1.sample)(ho), " ").concat((0, lodash_1.sample)(tenDem), " ").concat((0, lodash_1.sample)(ten)),
                                daDangKi: false,
                                soDienThoai: "".concat((0, lodash_1.sample)(dauSoDT)).concat((0, lodash_1.sampleSize)((0, lodash_1.range)(0, 10), 7).join('')),
                                gioiTinh: (0, lodash_1.sample)(['Nam', 'Nữ']),
                                vaiTroNguoiDung: user_entity_1.VaitroNguoiDung.KhachHang
                            }));
                        });
                        return [4 /*yield*/, Promise.all(datas)];
                    case 1:
                        _a.sent();
                        console.log('User data inserted!');
                        return [2 /*return*/];
                }
            });
        });
    };
    DataService = __decorate([
        (0, common_1.Injectable)(),
        __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User))
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;
