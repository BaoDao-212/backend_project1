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
exports.__esModule = true;
exports.AppModule = void 0;
var apollo_1 = require("@nestjs/apollo");
var common_1 = require("@nestjs/common");
var config_1 = require("@nestjs/config");
var graphql_1 = require("@nestjs/graphql");
var typeorm_1 = require("@nestjs/typeorm");
var Joi = require("joi");
var path_1 = require("path");
var app_controller_1 = require("./app.controller");
var app_service_1 = require("./app.service");
var auth_module_1 = require("./auth/auth.module");
var constants_1 = require("./common/constants/constants");
var data_module_1 = require("./data/data.module");
var donhang_module_1 = require("./donhang/donhang.module");
var donhang_entity_1 = require("./donhang/entities/donhang.entity");
var firebase_module_1 = require("./firebase/firebase.module");
var magiamgia_entity_1 = require("./donhang/entities/magiamgia.entity");
var nhanvien_entity_1 = require("./nhanvien/entities/nhanvien.entity");
var nhanvien_module_1 = require("./nhanvien/nhanvien.module");
var sanpham_entity_1 = require("./sanpham/entities/sanpham.entity");
var sanpham_module_1 = require("./sanpham/sanpham.module");
var sms_module_1 = require("./sms/sms.module");
var upload_module_1 = require("./upload/upload.module");
var user_entity_1 = require("./user/entities/user.entity");
var user_module_1 = require("./user/user.module");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        (0, common_1.Module)({
            imports: [
                config_1.ConfigModule.forRoot({
                    isGlobal: true,
                    envFilePath: process.env.NODE_ENV === 'dev'
                        ? './src/env/.dev.env'
                        : './src/env/.test.env',
                    ignoreEnvFile: process.env.NODE_ENV === 'production',
                    validationSchema: Joi.object({
                        NODE_ENV: Joi.string().required(),
                        COMPANY_NAME: Joi.string().required(),
                        DATABASE_HOST: Joi.string().required(),
                        DATABASE_PORT: Joi.string().required(),
                        DATABASE_USERNAME: Joi.string().required(),
                        DATABASE_PASSWORD: Joi.string().required(),
                        DATABASE_NAME: Joi.string().required(),
                        FIREBASE_API_KEY: Joi.string().required(),
                        FIREBASE_AUTH_DOMAIN: Joi.string().required(),
                        FIREBASE_PROJECT_ID: Joi.string().required(),
                        FIREBASE_STORAGE_BUCKET: Joi.string().required(),
                        FIREBASE_APP_ID: Joi.string().required()
                    })
                }),
                graphql_1.GraphQLModule.forRoot({
                    driver: apollo_1.ApolloDriver,
                    debug: false,
                    autoSchemaFile: (0, path_1.join)(process.cwd(), 'src/generated/schema.gql'),
                    playground: true,
                    context: function (_a) {
                        var _b;
                        var req = _a.req, res = _a.res;
                        return _b = { req: req, res: res }, _b[constants_1.ACCESS_TOKEN] = req.get(constants_1.ACCESS_TOKEN), _b;
                    },
                    cors: {
                        origin: [
                            process.env.CLIENT_DOMAIN,
                            process.env.SERVER_DOMAIN,
                            (process.env.DEV_DOMAIN = 'http://localhost:5173'),
                        ],
                        credentials: true
                    }
                }),
                sms_module_1.SMSModule.forRoot({
                    accountSID: process.env.SMS_ACCOUNT_SID,
                    authToken: process.env.SMS_ACCOUNT_AUTH_TOKEN
                }),
                firebase_module_1.FirebaseModule.forRoot({
                    apiKey: process.env.FIREBASE_API_KEY,
                    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
                    projectId: process.env.FIREBASE_PROJECT_ID,
                    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
                    appId: process.env.FIREBASE_APP_ID
                }),
                typeorm_1.TypeOrmModule.forRoot(__assign(__assign(__assign({ type: 'postgres' }, (process.env.DATABASE_URL
                    ? {
                        url: process.env.DATABASE_URL
                    }
                    : {
                        host: process.env.DATABASE_HOST,
                        port: +process.env.DATABASE_PORT,
                        username: process.env.DATABASE_USERNAME,
                        password: process.env.DATABASE_PASSWORD,
                        database: process.env.DATABASE_NAME
                    })), { entities: [user_entity_1.User, sanpham_entity_1.SanPham, nhanvien_entity_1.NhanVien, magiamgia_entity_1.MaGiamGia, donhang_entity_1.DonHang], synchronize: true }), (process.env.NODE_ENV === 'production'
                    ? {
                        ssl: true,
                        extra: {
                            ssl: {
                                require: true,
                                rejectUnauthorized: false
                            }
                        }
                    }
                    : {}))),
                user_module_1.UserModule,
                auth_module_1.AuthModule,
                upload_module_1.UploadModule,
                data_module_1.DataModule,
                sanpham_module_1.SanPhamModule,
                nhanvien_module_1.NhanVienModule,
                donhang_module_1.DonHangModule,
            ],
            controllers: [app_controller_1.AppController],
            providers: [app_service_1.AppService]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
