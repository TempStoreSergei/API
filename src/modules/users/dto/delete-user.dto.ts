import {ApiProperty} from "@nestjs/swagger";
import {IsNotEmpty, IsNumber} from "class-validator";

export class DeleteUserDto {
    @ApiProperty({example: 1, description: 'Уникальный индификатор'})
    @IsNotEmpty({message: 'это поле не может быть пустым'})
    @IsNumber({},{message: 'это поле должено быть числом'})
    readonly Id: number
}