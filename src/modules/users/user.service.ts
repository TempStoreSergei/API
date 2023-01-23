import { Injectable } from '@nestjs/common';
import {User} from "./user.model";
import {InjectModel} from "@nestjs/sequelize";
import {CreateUserDto} from "./dto/create-user.dto";
import {DeleteUserDto} from "./dto/delete-user.dto";
import {UpdateUserDto} from "./dto/update-user.dto";
import {GetUserDto} from "./dto/get-user.dto";

@Injectable()
export class UserService {
    constructor(@InjectModel(User) private userRepository: typeof User) {}

    getYears(birthday: Date ): number{ //Дата рождения
        const now = new Date(); //Текущя дата
        const today = new Date(now.getFullYear(), now.getMonth(), now.getDate()); //Текущя дата без времени
        const birthdayYear = new Date(today.getFullYear(), birthday.getMonth(), birthday.getDate()); //ДР в текущем году
        let age = today.getFullYear() - birthday.getFullYear();
        if (today < birthdayYear) {
            age = age-1
        }
        return age
    }

    getImage(pathToFile: string): string {

        return ''
    }

    async createUser(dto: CreateUserDto) {
        const user = await this.userRepository.create(dto)
        return user
    }

    async getAllUsers() {
        let users = []
        const infoUsers = await this.userRepository.findAll()
        infoUsers.forEach( (element) => {
            let user: GetUserDto = {
                Id: element.Id,
                FirstName: element.FirstName,
                LastName: element.LastName,
                Gender: element.Gender ? "Male" : "Female",
                BirthDay: element.BirthDay.toLocaleDateString('en-US'),
                Years: this.getYears(element.BirthDay)
            }
            users.push(user)
        })
        return users
    }

    async deleteUser(info: DeleteUserDto) {
        const user = await this.userRepository.findByPk(info.Id);
        if(user != null) {
            return await user.destroy();
        }
        return null
    }

    async updateUser(info: UpdateUserDto) {
        const user = await this.userRepository.findByPk(info.Id);
        if(user != null) {
            return await user.update(info)
        }
        return null
    }
}
