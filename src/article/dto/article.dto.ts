import { getModelForClass, prop } from '@typegoose/typegoose';

// ArticleData 为表名
export class ArticleData {
  @prop()
  title: string;
  @prop()
  content: string;
}

export const ArticleModel = getModelForClass(ArticleData);
