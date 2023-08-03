// shared-kanban-board.model.ts
import { Model, Column, ForeignKey, Table, BelongsTo, DataType } from 'sequelize-typescript';
import { Kanban } from '../kanban/kanban.model';
import { User } from 'src/user/user.model';
const { NUMBER, DATE, STRING } = DataType;

@Table({
    paranoid: true,
})
export class SharedKanbanBoard extends Model<SharedKanbanBoard> {
    @ForeignKey(() => User)
    @Column(NUMBER)
    userId: number;

    @ForeignKey(() => Kanban)
    @Column(NUMBER)
    kanbanId: number;

    @BelongsTo(() => User, 'userId')
    sharedByUser: User;

    @BelongsTo(() => Kanban, 'kanbanId')
    kanbanBoard: Kanban;

    @Column(DATE)
    createdAt: Date;

    @Column(DATE)
    updatedAt: Date;

    @Column(DATE)
    deletedAt: Date;

    @Column(STRING)
    createdBy: string;

    @Column(STRING)
    updatedBy: string;

    @Column(STRING)
    deletedBy: string;
}
