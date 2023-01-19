import {Module} from "@nestjs/common";
import {SequelizeModule} from "@nestjs/sequelize";
import {UserModule} from "./users/user/user.module";
import {ConfigModule} from "@nestjs/config";
import * as process from "process";
import {User} from "./users/user/user.model";
import {FilesModule} from "./imagens/imagen.module";

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
        FilesModule
    ],
})
export class AppModule{}