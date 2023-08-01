import {
  Column,
  Model,
  Table,
  PrimaryKey,
  AutoIncrement,
  HasMany,
  DataType,

} from 'sequelize-typescript';
import { Role } from '../roles/role.enum';
import { Task } from '../task/task.model';

const { ENUM, DATE, NUMBER, STRING } = DataType;

@Table({
  paranoid: true,
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

  @Column(STRING)
  createdBy: string;

  @Column(STRING)
  updatedBy: string;

  @Column(STRING)
  deletedBy: string;
}
