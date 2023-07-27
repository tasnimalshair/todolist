import { Module } from '@nestjs/common';
import { TokenAuthGuard } from './TokenAuthGuard';

@Module({
    providers:[TokenAuthGuard],
    exports:[TokenAuthGuard]
})
export class GuardModule {}
