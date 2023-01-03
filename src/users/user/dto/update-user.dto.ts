import {ApiProperty} from "@nestjs/swagger";
import {IsBoolean, IsDate, IsDateString, IsNotEmpty, IsNumber, IsString} from "class-validator";

export class UpdateUserDto {
    @ApiProperty({example: 1, description: 'Уникальный индификаторы'})
    @IsNotEmpty({message: 'это поле не может быть пустым'})
    @IsNumber({},{message: 'это поле должено быть числом'})
    readonly Id: number
    @ApiProperty({example: 'Sergei', description: 'Имя'})
    @IsNotEmpty({message: 'это поле не может быть пустым'})
    @IsString({message: "это поле должно быть строкой"})
    readonly FirstName: string
    @ApiProperty({example: 'Ziablikov', description: 'Фамилия'})
    @IsNotEmpty({message: 'это поле не может быть пустым'})
    @IsString({message: "это поле должно быть строкой"})
    readonly LastName:  string
    @ApiProperty({example: '2003-01-10', description: 'Дата рождения'})
    @IsNotEmpty({message: 'это поле не может быть пустым'})
    @IsString({message: "это поле должно быть строкой"})
    @IsDateString({},{message: "Это поле должно быть датой"})
    readonly BirthDay:  Date
    @ApiProperty({example: 'true', description: 'Пол - true: Male, false: Female'})
    @IsNotEmpty({message: 'это поле не может быть пустым'})
    @IsBoolean({message: "это поле должно быть строкой"})
    readonly Gender:    boolean
}