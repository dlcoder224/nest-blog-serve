import { User } from '@libs/db/dtos/user.dto';
import { Controller } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { ApiTags } from '@nestjs/swagger';
import { Crud } from 'nestjs-mongoose-crud';

@Crud({
  model: User,
})
@Controller('users')
@ApiTags('用户模块')
export class UsersController {
  constructor(@InjectModel(User) private readonly model) {}
}
