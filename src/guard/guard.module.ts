import { Module } from '@nestjs/common';
import { TokenAuthGuard } from './TokenAuthGuard';
import { RoleGuard } from './rules.guard';
import { UserService } from 'src/user/user.service';
import { UserModule } from 'src/user/user.module';

@Module({
    imports: [UserModule],
    providers: [TokenAuthGuard, RoleGuard],
    exports: [TokenAuthGuard, RoleGuard]
})
export class GuardModule {}
