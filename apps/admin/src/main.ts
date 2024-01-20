import { NestFactory } from '@nestjs/core';
import { AdminModule } from './admin.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { HttpFilter } from '../../common/filter';
import { Response } from '../../common/response';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AdminModule);
  // 设置允许跨域
  app.enableCors();

  // 全局管道 全局验证
  app.useGlobalPipes(new ValidationPipe());
  // 全局响应拦截器，返回给前端数据格式
  app.useGlobalInterceptors(new Response());
  // 后端全局异常拦截器
  app.useGlobalFilters(new HttpFilter());

  const config = new DocumentBuilder()
    .setTitle('绿色导航管理端API')
    .setDescription('绿色导航管理端API')
    .setVersion('1.0')
    // .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(3000);
  console.log('http://localhost:3000/api-docs');
}
bootstrap();
