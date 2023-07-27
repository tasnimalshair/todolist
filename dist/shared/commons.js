"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.returnRes = void 0;
const returnRes = (res, statusCode, status, msg, data) => {
    return res.status(statusCode).json({
        status: {
            status: status,
            msg: msg,
        },
        data: data ? data : [],
    });
};
exports.returnRes = returnRes;
//# sourceMappingURL=commons.js.map