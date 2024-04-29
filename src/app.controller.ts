import {
  Body,
  Controller,
  FileTypeValidator,
  MaxFileSizeValidator,
  ParseFilePipe,
  Post,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import {
  AnyFilesInterceptor,
  FileFieldsInterceptor,
  FileInterceptor,
  FilesInterceptor,
} from '@nestjs/platform-express';
import { storage } from './storage';

@Controller()
export class AppController {
  @Post('upload')
  @UseInterceptors(
    // 第一个参数file是文件的参数名称，dest是目录
    FileInterceptor('file', {
      dest: 'uploads',
    }),
  )
  // file是接收到的文件，其他参数使用body接收
  uploadFile(@UploadedFile() file: Express.Multer.File, @Body() body) {
    console.log('---uploadFile--- \n', file);
    console.log(body);
  }

  @Post('uploads')
  @UseInterceptors(
    // files接收参数的名称，3是最多上传文件数，dest是知道上传目录
    FilesInterceptor('files', 3, {
      dest: 'uploads',
    }),
  )
  // Express.Multer.File[] 接收文件的参数类型
  // files 文件参数名称
  uploadFiles(@UploadedFiles() files: Express.Multer.File[], @Body() body) {
    console.log('---uploadFiles--- \n', files);
    console.log(body);
  }

  @Post('uploadMultiple')
  @UseInterceptors(
    FileFieldsInterceptor(
      [
        {
          name: 'aaa', // 接收文件的参数名称为aaa
          maxCount: 2, // 这个字段最多接收的文件个数
        },
        {
          name: 'bbb',
          maxCount: 3,
        },
      ],
      {
        dest: 'uploads', // 上传目录
      },
    ),
  )
  uploaduploadMultiple(
    @UploadedFiles()
    files: {
      aaa?: Express.Multer.File[]; // aaa 参数
      bbb?: Express.Multer.File[]; // bbb 参数
    },
    @Body() body,
  ) {
    console.log('---uploadMultiple--- \n', files);
    console.log(body);
  }

  @Post('anyUploads')
  @UseInterceptors(
    // AnyFilesInterceptor 接收文件参数未知时使用
    AnyFilesInterceptor({
      storage: storage, // 自义定上传目录和文件名称
    }),
  )
  async anyUploads(
    @UploadedFiles(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({ maxSize: 5000 }),
          new FileTypeValidator({ fileType: 'image/jpg' }),
        ],
      }),
    )
    files: Express.Multer.File[],
    @Body() body,
  ) {
    console.log('---anyUploads--- \n', files);
    console.log(body);
  }
}
