import { AutoIncrement, BelongsTo, BelongsToMany, Column, DataType, ForeignKey, HasMany, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { SharedKanbanBoard } from 'src/shared-kanban-board/shared-kanban-board.model';
import { Task } from 'src/task/task.model';
import { User } from 'src/user/user.model';
const { DATE, NUMBER, STRING, ARRAY, JSON } = DataType;

@Table({
    tableName: 'Kanbans',
    paranoid: true,
    underscored: true
})
export class Kanban extends Model<Kanban> {
    @PrimaryKey
    @AutoIncrement
    @Column(NUMBER)
    id: number;


    @ForeignKey(() => User)
    @Column(NUMBER)
    userId: number;

    @BelongsTo(() => User)
    user: User;

    @HasMany(() => Task)
    tasks: Task[];

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

    @BelongsToMany(() => User, () => SharedKanbanBoard, 'kanbanId')
    sharedWithUsers: User[];
}