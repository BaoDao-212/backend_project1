"use strict";
exports.__esModule = true;
exports.Roles = void 0;
var common_1 = require("@nestjs/common");
function Roles(roles) {
    return (0, common_1.SetMetadata)('roles', roles);
}
exports.Roles = Roles;
