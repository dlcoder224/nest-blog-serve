import { ApiProperty } from '@nestjs/swagger';
import { prop } from '@typegoose/typegoose';

export class Menu {
  @prop()
  @ApiProperty({ description: '菜单名称', example: '百宝箱' })
  name: string;

  @prop()
  @ApiProperty({ description: '前端路由', example: '/user' })
  path: string;

  @prop()
  @ApiProperty({ description: '菜单排序', example: 1 })
  sort: number;
}
