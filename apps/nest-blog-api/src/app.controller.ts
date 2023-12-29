import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import {
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@Controller()
@ApiTags('默认')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/get')
  @ApiOperation({
    summary: '默认接口',
    description: '接口参数描述',
  })
  @ApiParam({
    name: 'id',
    description: '获取单个数据',
    required: true,
  })
  get(): string {
    return this.appService.getHello();
  }

  @Post('/post')
  @ApiOperation({
    summary: 'post接口',
    description: 'query 参数描述',
  })
  @ApiQuery({
    name: 'page',
    description: '分页信息',
    required: true,
    type: String,
  })
  post(): string {
    return this.appService.getHello();
  }

  @Get('/customize')
  @ApiOperation({
    summary: 'get，自定义接口',
    description: '自定义名称 数据',
  })
  @ApiResponse({ status: 403, description: '88' })
  customize(): string {
    return this.appService.getHello();
  }
}
