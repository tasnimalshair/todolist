/* eslint-disable prettier/prettier */
import { IsNotEmpty } from 'class-validator';
import {
    Column,
    Model,
    Table,
    PrimaryKey,
    AutoIncrement,
    IsEmail,
    HasMany,
    DataType,
    
  } from 'sequelize-typescript';
import { Task } from 'src/task/task.model';
  
@Table({
  // tableName: 'Users',
  // underscored: true,
  // paranoid: true,
})
  export class User extends Model<User> {
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @IsNotEmpty()
    @Column
    name:string;
    
    @IsNotEmpty()
    @IsEmail
    @Column
    email: string;

    @IsNotEmpty()
    @Column
    password: string;

    @HasMany(() => Task)
  tasks: Task[];

  @Column(DataType.DATE)
  createdAt: Date;

  @Column(DataType.DATE)
  updatedAt: Date;

  // static associate(models: any) {
  //   User.hasMany(models.Task, { foreignKey: 'userId', as: 'tasks' });
  // }

  }
  