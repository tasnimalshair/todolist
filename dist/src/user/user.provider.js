"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserProvider = void 0;
const constants_1 = require("../common/constants");
const user_model_1 = require("./user.model");
exports.UserProvider = [
    {
        provide: constants_1.REPOSITORIES.USER_REPOSITORY,
        useFactory: () => {
            return user_model_1.User;
        },
    },
];
//# sourceMappingURL=user.provider.js.map