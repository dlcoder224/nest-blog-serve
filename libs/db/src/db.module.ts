import { Global, Module } from '@nestjs/common';
import { DbService } from './db.service';
import { TypegooseModule } from 'nestjs-typegoose';
import { User } from './models/user.model';
import { Menu } from './models/menu.model';

const models = TypegooseModule.forFeature([User, Menu]);

@Global()
@Module({
  imports: [
    TypegooseModule.forRoot('mongodb://101.201.47.18:27017/greenNavDB'),
    models,
  ],
  providers: [DbService],
  exports: [DbService, models],
})
export class DbModule {}
