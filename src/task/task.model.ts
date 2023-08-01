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

  @Column(DATE)
  createdAt: Date;

  @Column(DATE)
  updatedAt: Date;

  @ForeignKey(() => User)
  @Column(NUMBER)
  userId: number;


  @BelongsTo(() => User)
  user: User;

  @Column(DATE)
  deletedAt: Date;

  @Column(STRING)
  createdBy: string;

  @Column(STRING)
  updatedBy: string;

  @Column(STRING)
  deletedBy: string;

}
