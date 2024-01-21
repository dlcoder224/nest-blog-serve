import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticleModule } from './article/article.module';
import { MenusController } from './menus/menus.controller';
import { DbModule } from '@libs/db';

@Module({
  imports: [ArticleModule, DbModule],
  controllers: [AppController, MenusController],
  providers: [AppService],
})
export class AppModule {}
