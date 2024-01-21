import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { InjectModel } from 'nestjs-typegoose';
import { Crud } from 'nestjs-mongoose-crud';
import { Menu } from '@libs/db/models/menu.model';

@Crud({
  model: Menu,
})
@Controller('menus')
@ApiTags('菜单模块')
export class MenusController {
  constructor(@InjectModel(Menu) private readonly model) {}
}
