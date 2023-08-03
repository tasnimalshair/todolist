import { AutoIncrement, BelongsTo, BelongsToMany, Column, DataType, ForeignKey, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
import { SharedKanbanBoard } from "src/shared-kanban-board/shared-kanban-board.model";
import { Task } from "src/task/task.model";
import { User } from "src/user/user.model";
const { DATE, NUMBER, STRING,ARRAY ,JSON} = DataType;

@Table({
    paranoid: true
})
export class Kanban extends Model<Kanban> {
    @PrimaryKey
    @AutoIncrement
    @Column(NUMBER)
    id: number;


    @ForeignKey(() => User)
    @Column(STRING)
    userId: string;

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

    @Column(STRING)
    createdBy: string;

    @Column(STRING)
    updatedBy: string;

    @Column(STRING)
    deletedBy: string;

    @BelongsToMany(() => User, () => SharedKanbanBoard, 'kanbanId')
    sharedWithUsers: User[];
}