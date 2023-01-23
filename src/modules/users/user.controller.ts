import {Body, Controller, Delete, Get, Post, Put, UsePipes} from '@nestjs/common';
import {CreateUserDto} from "./dto/create-user.dto";
import {UserService} from "./user.service";
import {DeleteUserDto} from "./dto/delete-user.dto";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {User} from "./user.model";
import {UpdateUserDto} from "./dto/update-user.dto";
import {ValidationPipe} from "../pipes/validation.pipe";
@ApiTags('User')
@Controller('user')
export class UserController {
    constructor(private userServic: UserService) {}
    @ApiOperation({summary: 'Создание пользователя'})
    @ApiResponse({status: 200, type: User})
    @Post()
    create(@Body() userDto: CreateUserDto){
        return this.userServic.createUser(userDto)
    }

    @ApiOperation({summary: 'Получить всех пользователей'})
    @ApiResponse({status: 200, type: [User]})
    @Get()
    getAll() {
        return this.userServic.getAllUsers()
    }
    @ApiOperation({summary: 'Удалить пользователя'})
    @ApiResponse({status: 200, type: null})
    @UsePipes(ValidationPipe)
    @Delete()
    deleteUser(@Body() userIdDto: DeleteUserDto) {
        return this.userServic.deleteUser(userIdDto)
    }

    @ApiOperation({summary: 'Обновить информацию о пользователе'})
    @ApiResponse({status: 200, type: User})
    @UsePipes(ValidationPipe)
    @Put()
    updateUser(@Body() userIdDto: UpdateUserDto) {
        return this.userServic.updateUser(userIdDto)
    }
}
