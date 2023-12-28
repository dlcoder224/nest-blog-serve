import { Module } from '@nestjs/common';
import { ArticleController } from './article.controller';
import { ArticleService } from './article.service';
import { getModelForClass, prop } from '@typegoose/typegoose';

@Module({
  controllers: [ArticleController],
  providers: [ArticleService],
})
export class ArticleClass {
  @prop()
  title: string;
  @prop()
  content: string;
}
export const ArticleModule = getModelForClass(ArticleClass);
