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
import { ArticleModule } from './article.module';
import { IsNotEmpty } from 'class-validator';

class CreateArticleDto {
  @ApiProperty({ description: '文章标题', example: '文章标题1' })
  @IsNotEmpty({ message: '请填写标题' })
  title: string;
  @ApiProperty({ description: '文章内容', example: '文章内容1' })
  content: string;
}

@Controller('article')
@ApiTags('文章模块')
export class ArticleController {
  @Get('/getArticleList')
  @ApiOperation({
    summary: '文章列表',
  })
  async getArticleList() {
    return await ArticleModule.find();
  }

  @Post('/createArticle')
  @ApiOperation({
    summary: '创建文章',
  })
  async createArticle(@Body() createArticleDto: CreateArticleDto) {
    console.log(createArticleDto, 'body');
    await ArticleModule.create(createArticleDto);
    return {
      success: true,
      data: createArticleDto,
    };
  }

  @Get('/getArticleDetail/:id')
  @ApiOperation({
    summary: '文章详情',
  })
  async getArticleDetail(@Param('id') id: string | number) {
    return await ArticleModule.findById(id);
  }

  @Put('/updateArticle/:id')
  @ApiOperation({
    summary: '编辑更新文章',
  })
  async updateArticle(
    @Param('id') id: string | number,
    @Body() updateArticleDto: CreateArticleDto,
  ) {
    await ArticleModule.findByIdAndUpdate(id, updateArticleDto);
    return {
      id,
      data: updateArticleDto,
    };
  }

  @Delete('/deleteArticle/:id')
  @ApiOperation({
    summary: '删除文章',
  })
  async deleteArticle(@Param('id') id: string | number) {
    await ArticleModule.findByIdAndDelete(id);
    return {
      id,
    };
  }
}
