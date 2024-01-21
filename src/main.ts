import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
// import { TypegooseModule } from 'nestjs-typegoose';

import * as mongoose from 'mongoose';
import { ValidationPipe } from '@nestjs/common';

import { Response } from './common/response';
import { HttpFilter } from './common/filter';

// import { User } from './models/user.model';

// const models = TypegooseModule.forFeature([User]);

async function bootstrap() {
  mongoose
    // .connect('mongodb://127.0.0.1:27017/', { dbName: 'nest-blog-serve' })
    .connect('mongodb://101.201.47.18:27017/', { dbName: 'greenNavDB' })
    .then(() => {
      console.log('数据里连接成功');
    })
    .catch((err) => {
      console.log(err, '数据里连接失败');
    });

  const app = await NestFactory.create(AppModule);

  // 全局管道 全局验证
  app.useGlobalPipes(new ValidationPipe());
  // 全局响应拦截器，返回给前端数据格式
  app.useGlobalInterceptors(new Response());
  // 后端全局异常拦截器
  app.useGlobalFilters(new HttpFilter());

  const config = new DocumentBuilder()
    .setTitle('NestJS小绿导航API描述')
    .setDescription('小绿导航API')
    .setVersion('1.0')
    // .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(3000);
  console.log('api地址：', 'http://localhost:3000/api-docs#/');
}
bootstrap();
