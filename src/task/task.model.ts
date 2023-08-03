/* eslint-disable prettier/prettier */
import {
  Column,
  Model,
  Table,
  PrimaryKey,
  AutoIncrement,
  ForeignKey,
  DataType,
  BelongsTo,
} from 'sequelize-typescript';
import { User } from '../user/user.model';
import { Kanban } from 'src/kanban/kanban.model';
const { DATE, NUMBER, STRING } = DataType;


@Table({
  paranoid: true,
})
export class Task extends Model<Task> {
  @PrimaryKey
  @AutoIncrement
  @Column(NUMBER)
  id: number;

  @Column(STRING)
  name: string;

  @Column(STRING)
  description: string;

  @Column(NUMBER)
  priority: number;


  @ForeignKey(() => User)
  @Column(NUMBER)
  userId: number;

  @BelongsTo(() => User)
  user: User;

  @ForeignKey(() => Kanban)
  @Column(NUMBER)
  kanbanId: number;


  @BelongsTo(() => Kanban)
  kanban: Kanban;


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
