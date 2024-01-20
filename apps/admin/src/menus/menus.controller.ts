import { Menu } from '@libs/db/dtos/menu.dto';
import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud } from 'nestjs-mongoose-crud';
import { InjectModel } from 'nestjs-typegoose';

@Crud({
  model: Menu,
})
@Controller('menus')
@ApiTags('菜单模块')
export class MenusController {
  constructor(@InjectModel(Menu) private readonly model) {}
}
