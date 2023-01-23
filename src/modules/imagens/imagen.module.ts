import { Module } from '@nestjs/common';
import { FilesController } from './imagen.controller';
@Module({
    controllers: [FilesController]
})
export class FilesModule {}