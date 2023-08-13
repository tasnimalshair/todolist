import { Controller, Get, Param, Post, UseInterceptors } from '@nestjs/common';
import { KanbanService } from './kanban.service';
import { Transaction, User } from '../decorators';
import { TransactionInterceptor } from 'src/interceptor/transaction.interceptor';

@Controller('kanbans')
@UseInterceptors(TransactionInterceptor)
export class KanbanController {
    constructor(private kanbanService: KanbanService,
    ) { }

    @Post()
    create(@User() user, @Transaction() transaction) {
        return this.kanbanService.create(user.id, transaction);
    }


    @Get('/all')
    getAll(@User() user, @Transaction() transaction) {
        return this.kanbanService.findAll(user.id, transaction);
    }


    @Post(':id')
    delete(@Param('id') id, @User() user, @Transaction() transaction) {
        return this.kanbanService.delete(id, user.id, transaction);
    }


}
