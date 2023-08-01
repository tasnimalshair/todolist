"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transaction = void 0;
const common_1 = require("@nestjs/common");
exports.Transaction = (0, common_1.createParamDecorator)((data, context) => {
    return context.switchToRpc().getContext().req.transaction;
});
//# sourceMappingURL=transaction.decorator.js.map