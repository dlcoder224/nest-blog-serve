import { Global, Module } from '@nestjs/common';
import { DbService } from './db.service';
import { TypegooseModule } from 'nestjs-typegoose';
import { User } from './dtos/user.dto';
// import { User } from '@libs/db/dtos/user.dto';

const models = TypegooseModule.forFeature([User]);

@Global()
@Module({
  imports: [
    TypegooseModule.forRoot('mongodb://127.0.0.1:27017/nest-blog-serve'),
    models,
  ],
  providers: [DbService],
  exports: [DbService, models],
})
export class DbModule {}
