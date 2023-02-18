"use strict";
exports.__esModule = true;
exports.createError = void 0;
function createError(mainReason, message) {
    return {
        ok: false,
        error: {
            mainReason: mainReason,
            message: message
        }
    };
}
exports.createError = createError;
