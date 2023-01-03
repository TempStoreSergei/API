import {ApiProperty} from "@nestjs/swagger";


export class GetUserDto {
    @ApiProperty({example: 1, description: 'Уникальный индификаторы'})
    Id?: number
    @ApiProperty({example: 'Sergei', description: 'Имя'})
    FirstName?: string
    @ApiProperty({example: 'Ziablikov', description: 'Фамилия'})
    LastName?:  string
    @ApiProperty({example: '2003-01-10', description: 'Дата рождения'})
    BirthDay?:  string
    @ApiProperty({example: 'Male', description: 'Пол'})
    Gender?:    string
    @ApiProperty({example: 20, description: 'Количество лет'})
    Years?:     number
}