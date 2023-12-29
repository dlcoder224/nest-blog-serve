import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticleModule } from './article/article.module';
import { DbModule } from '@libs/db';

@Module({
  imports: [DbModule, ArticleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
