import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateKanbanDto } from './dtos/create-kanban.dto';
import { KanbanService } from './kanban.service';
import { Roles, User } from '../decorators';
import { Role } from '../roles/role.enum';
import { where } from 'sequelize';
import { Task } from 'src/task/task.model';

@Controller('kanbans')
export class KanbanController {
    constructor(private kanbanService: KanbanService,
    ) { }

    @Post()
    create(@User() user) {
        return this.kanbanService.create(user.id);
    }

    // @Get(':id')
    // getKanbansTasks(@User() user, @Param('id') id) {
    //     return this.kanbanService.getKanbansTasks(id, user.id)
    // }


    @Get('/all')
    getAll(@User() user) {
        return this.kanbanService.findAll(user.id, user.id);
    }


    @Post(':id')
    delete(@Param('id') id, @User() user) {
        return this.kanbanService.delete(id, user.id);
    }


}
