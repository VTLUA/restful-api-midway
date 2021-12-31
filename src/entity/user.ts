import { Column, Model } from 'sequelize-typescript';
import { BaseTable } from '@midwayjs/sequelize';

console.log('BaseTable::', BaseTable);

@BaseTable
export class User extends Model {
  @Column({
    comment: '用户名',
  })
  username: string;

  @Column({
    comment: '用户密码',
  })
  password: string;
}
