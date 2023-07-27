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
import { User } from 'src/user/user.model';

@Table({
  // tableName: 'Tasks',
  // underscored: true,
  // paranoid: true,
})
export class Task extends Model<Task> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column
  name: string;

  @Column
  description: string;

  @Column
  priority: number;

  @Column(DataType.DATE)
  createdAt: Date;

  @Column(DataType.DATE)
  updatedAt: Date;

  @ForeignKey(() => User)
  @Column
  userId: number; 


  @BelongsTo(() => User)
  user: User;

  // static associate(models: any) {
    // Task.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
  // }
}
