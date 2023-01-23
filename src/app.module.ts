import {Module} from "@nestjs/common";
import {SequelizeModule} from "@nestjs/sequelize";
import {UserModule} from "./modules/users/user.module";
import {ConfigModule} from "@nestjs/config";
import * as process from "process";
import {User} from "./modules/users/user.model";
import {FilesModule} from "./modules/imagens/imagen.module";
import {MulterModule} from "@nestjs/platform-express";

@Module({
    controllers: [],
    providers: [],
    imports: [
        ConfigModule.forRoot({isGlobal: true}),
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRESS_PORT),
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRESS_PASSWORD,
            database: process.env.POSTGRES_DB,
            models: [User],
            autoLoadModels: true
        }),
        UserModule,
        MulterModule.register({
            dest: './image',
        }),
        FilesModule,
    ],
})
export class AppModule{}