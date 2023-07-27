"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_dev_1 = require("./config.dev");
const config_pro_1 = require("./config.pro");
const NODE_ENV = process.env.NODE_ENV || 'development';
exports.default = NODE_ENV === 'development' ? config_dev_1.default : config_pro_1.default;
//# sourceMappingURL=index.js.map