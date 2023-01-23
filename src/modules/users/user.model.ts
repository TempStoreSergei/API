import {Column, DataType, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
interface UserCreate {
    FirstName: string
    LastName:  string
    BirthDay:  Date
    Gender:    boolean
    PathToImage: string
}
@Table({tableName: 'Users'})
export class User extends Model<User, UserCreate> {
    @ApiProperty({example: 1, description: 'Уникальный индификаторы'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    Id:        number
    @ApiProperty({example: 'Sergei', description: 'Имя'})
    @Column({type: DataType.STRING, allowNull: false})
    FirstName: string
    @ApiProperty({example: 'Ziablikov', description: 'Фамилия'})
    @Column({type: DataType.STRING, allowNull: false})
    LastName:  string
    @ApiProperty({example: '01-10-2003', description: 'Дата рождения'})
    @Column({type: DataType.DATE, allowNull: false})
    BirthDay:  Date
    @ApiProperty({example: 'Male', description: 'Пол'})
    @Column({type: DataType.BOOLEAN, allowNull: false})
    Gender:    boolean
    @ApiProperty({example: 'mypikche.png', description: 'Путь к файлу'})
    @Column({type: DataType.STRING, allowNull: true})
    PathToImage:  string
}