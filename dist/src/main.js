"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const core_2 = require("@nestjs/core");
const TokenAuthGuard_1 = require("./guard/TokenAuthGuard");
const user_service_1 = require("./user/user.service");
const jwt_1 = require("@nestjs/jwt");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        bufferLogs: true,
    });
    app.useGlobalPipes(new common_1.ValidationPipe({ whitelist: true }));
    app.useGlobalGuards(new TokenAuthGuard_1.TokenAuthGuard(app.get(jwt_1.JwtService), new core_2.Reflector(), app.get(user_service_1.UserService)));
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map