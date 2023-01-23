import { Controller, Get, Post,UseInterceptors, UploadedFile, Res, Param, HttpStatus } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { editFileName, imageFileFilter } from './imagen.filter';
import {ApiTags} from "@nestjs/swagger";
@Controller('files')
@ApiTags('Files')
export class FilesController {
    constructor() {}
    @Post()
    @UseInterceptors(
        FileInterceptor('image', {
            storage: diskStorage({
                destination: './image',
                filename: editFileName,
            }),
            fileFilter: imageFileFilter,
        }),
    )
    async uploadedFile(@UploadedFile() file) {
        const response = {
            originalname: file.originalname,
            filename: file.filename,
        };
        return {
            status: HttpStatus.OK,
            message: 'Image uploaded successfully!',
            data: response,
        };
    }
    @Get(':imagename')
    getImage(@Param('imagename') image, @Res() res) {
        const response = res.sendFile(image, { root: './image' });
        return {
            status: HttpStatus.OK,
            data: response,
        };
    }
}