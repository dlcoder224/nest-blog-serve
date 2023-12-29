import { ApiProperty } from '@nestjs/swagger';
import { modelOptions, prop } from '@typegoose/typegoose';

@modelOptions({
  schemaOptions: {
    // 增加时间戳
    timestamps: true,
  },
})
export class User {
  @ApiProperty({ description: '用户名', example: 'wenlong' })
  @prop()
  useName: string;

  @prop()
  @ApiProperty({ description: '密码', example: '123456' })
  password: string;
}
