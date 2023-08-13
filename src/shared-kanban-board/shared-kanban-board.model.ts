import { Model, Column, ForeignKey, Table, BelongsTo, DataType } from 'sequelize-typescript';
import { Kanban } from '../kanban/kanban.model';
import { User } from 'src/user/user.model';
const { NUMBER, DATE, STRING } = DataType;

@Table({
    tableName: 'SharedKanbanBoards',
    paranoid: true,
    underscored: true
})
export class SharedKanbanBoard extends Model<SharedKanbanBoard> {
    @ForeignKey(() => User)
    @Column(NUMBER)
    userId: number;

    @ForeignKey(() => Kanban)
    @Column(NUMBER)
    kanbanId: number;

    @BelongsTo(() => User)
    sharedByUser: User;

    @BelongsTo(() => Kanban)
    kanbanBoard: Kanban;

    @Column(DATE)
    createdAt: Date;

    @Column(DATE)
    updatedAt: Date;

    @Column(DATE)
    deletedAt: Date;

    @Column(NUMBER)
    createdBy: number;

    @Column(NUMBER)
    updatedBy: number;

    @Column(NUMBER)
    deletedBy: number;

}
