import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOperation, ApiProperty, ApiTags } from '@nestjs/swagger';

class CreateArticleDto {
  @ApiProperty({ description: '文章标题' })
  title: string;
  @ApiProperty({ description: '文章内容' })
  content: string;
}

@Controller('article')
@ApiTags('文章模块')
export class ArticleController {
  @Post('/createArticle')
  @ApiOperation({
    summary: '创建文章',
  })
  createArticle(@Body() body: CreateArticleDto) {
    console.log(body, 'body');
    return {
      success: true,
      data: body,
    };
  }

  @Get('/getArticleDetail/:id')
  @ApiOperation({
    summary: '文章详情',
  })
  getArticleDetail(@Param('id') id: string | number) {
    return {
      id,
    };
  }

  @Put('/updateArticle/:id')
  @ApiOperation({
    summary: '编辑文章',
  })
  updateArticle(
    @Param('id') id: string | number,
    @Body() body: CreateArticleDto,
  ) {
    return {
      id,
      data: body,
    };
  }

  @Delete('/deleteArticle/:id')
  @ApiOperation({
    summary: '删除文章',
  })
  deleteArticle(@Param('id') id: string | number) {
    return {
      id,
    };
  }
}
