import * as process from "process";
import {NestFactory} from "@nestjs/core";
import {AppModule} from "./app.module";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";

async function start() {
    const PORT = process.env.PORT;
    const app = await NestFactory.create(AppModule)
    const config = new DocumentBuilder()
        .setTitle('Документация к API серверу')
        .setDescription('Описание всех доступны методов')
        .setVersion('1.0.0')
        .build()
    const document = SwaggerModule.createDocument(app, config)
    SwaggerModule.setup('/api/docs', app, document)
    await app.listen(PORT)
}

start()