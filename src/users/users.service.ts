/* eslint-disable prettier/prettier */
import { BadRequestException, Injectable, NotFoundException, ServiceUnavailableException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateUserDTO } from "src/dto/create.user.dto";
import { UpdateUserDTO } from "src/dto/update.users.dto";
import { USER_MODEL, UserDocument } from "src/schema/user";

@Injectable()
export class UserService {
    constructor(@InjectModel(USER_MODEL) private readonly userModel: Model<UserDocument>) {
    }

    async create(createUserDto:CreateUserDTO) {
        try {

            const user = await this.userModel.create(createUserDto);
            return user

        } catch (error) {
            if (error.name === "ValidationError") {
                throw new BadRequestException(error.errors)
            }
            else {
                throw new ServiceUnavailableException()
            }

        }

    }

    async findAll() {
        const user = await this.userModel.find();
        return user
    }


    async findOne(id: string) {
        const user = await this.userModel.findById(id);

        if (!user) {
            throw new NotFoundException("User not Found")
        }
        return user
    }

    async update(id: string, updateUserDto:UpdateUserDTO) {
    
        const updatedUser = await this.userModel.findByIdAndUpdate(id, updateUserDto, { new: true })
       
        if (!updatedUser) {
            throw new NotFoundException("User not found")
        }

        return updatedUser
    }

    async remove(id: string) {
        const deletedUser = await this.userModel.findByIdAndDelete(id);
        if (!deletedUser) {
            throw new NotFoundException("User not found")
        }
        return { _id: id }

    }

}