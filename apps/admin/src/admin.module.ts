import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { DbModule } from '@libs/db';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';
import { MenusController } from './menus/menus.controller';
import { MenusModule } from './menus/menus.module';

@Module({
  imports: [DbModule, UsersModule, MenusModule],
  controllers: [AdminController, UsersController, MenusController],
  providers: [AdminService],
})
export class AdminModule {}
