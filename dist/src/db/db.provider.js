"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProvider = void 0;
const config_1 = require("@nestjs/config");
const sequelize_typescript_1 = require("sequelize-typescript");
const constants_1 = require("../common/constants");
const task_model_1 = require("../task/task.model");
const user_model_1 = require("../user/user.model");
exports.databaseProvider = [
    {
        provide: constants_1.PROVIDERS.DATABASE_PROVIDER,
        useFactory: (configService) => {
            const sequelize = new sequelize_typescript_1.Sequelize({
                ...configService.get(constants_1.DATABASE_CONFIG),
                logging: false,
            });
            sequelize.addModels([user_model_1.User, task_model_1.Task]);
            return sequelize;
        },
        inject: [config_1.ConfigService],
    },
];
//# sourceMappingURL=db.provider.js.map