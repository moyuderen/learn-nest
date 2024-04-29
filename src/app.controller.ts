import {
  Body,
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { AppService } from './app.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('upload')
  @UseInterceptors(
    FileInterceptor('chunk', {
      dest: 'uploads',
    }),
  )
  upload(@UploadedFile() chunk: Express.Multer.File, @Body() body) {
    const { filename, index, uuid } = body;
    const { name } = path.parse(filename);
    // 创建该文件的唯一目录（uuid）
    const dir = `uploads/chunks_${name}_${uuid}`;
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
    // 把每个chunk的copy到对应文件的目录下，并且进行编号
    fs.cpSync(chunk.path, `${dir}/${name}_${index}`);
    // 删除uploads目录下的chunk
    fs.rmSync(chunk.path);

    // 返回前端文件名和文件名对应的唯一id
    return { uuid, filename };
  }

  @Post('merge')
  merge(@Body('filename') filename, @Body('uuid') uuid) {
    const { name } = path.parse(filename);
    // 找到要合并文件的唯一目录
    const dir = `uploads/chunks_${name}_${uuid}`;
    // 读取目录下的文件路径，即多个chunk
    const files = fs.readdirSync(dir);
    let start = 0;
    let count = 0;
    files.forEach((file) => {
      // 找到该chunk的完整路径
      const filePath = `${dir}/${file}`;
      // 创建一个流文件
      const stream = fs.createReadStream(filePath);
      stream
        .pipe(
          // 将流文件以start位置，写入指定文件
          fs.createWriteStream(`uploads/${filename}`, {
            start: start,
          }),
        )
        .on('finish', () => {
          // 每个chuck写入完成的回调
          count++; // 记录写到哪个chunk

          // 所有chunk都写入完成后，删除之前唯一文件目录
          if (count === files.length) {
            fs.rm(dir, { recursive: true }, () => {});
          }
        });
      // 更新写入的开始位置
      start += fs.statSync(filePath).size;
    });
  }
}
