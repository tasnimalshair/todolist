import {
  Column,
  Model,
  Table,
  PrimaryKey,
  AutoIncrement,
  HasMany,
  DataType,
  BelongsToMany,

} from 'sequelize-typescript';
import { Role } from '../roles/role.enum';
import { Task } from '../task/task.model';
import { Kanban } from 'src/kanban/kanban.model';
import { SharedKanbanBoard } from 'src/shared-kanban-board/shared-kanban-board.model'; const { ENUM, DATE, NUMBER, STRING } = DataType;

@Table({
  tableName: 'Users',
  paranoid: true,
  underscored: true
})
export class User extends Model<User> {
  @PrimaryKey
  @AutoIncrement
  @Column(NUMBER)
  id: number;

  @Column(STRING)
  name: string;

  @Column(STRING)
  email: string;

  @Column(STRING)
  password: string;

  @HasMany(() => Task)
  tasks: Task[];


  @HasMany(() => Kanban)
  kanban: Kanban[];

  @Column({
    type: ENUM,
    values: Object.keys(Role)
  })
  role: Role;


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

  @BelongsToMany(() => Kanban, () => SharedKanbanBoard, 'sharedByUserId')
  sharedBoards: Kanban[];
}

