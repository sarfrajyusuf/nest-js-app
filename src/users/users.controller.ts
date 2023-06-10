/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { UserService } from "./users.service";
import { CreateUserDTO } from "src/dto/create.user.dto";
import { UpdateUserDTO } from "src/dto/update.users.dto";

@Controller('users')
export class UsersController{
    constructor(private readonly userService:UserService){}
    
    @Post()
    create(@Body() createUserDto:CreateUserDTO){
        return this.userService.create(createUserDto)
    }

    @Get()
    findAll(){
        return this.userService.findAll()
    }

    @Get(":id")
    findOne(@Param("id") id:string){
        return this.userService.findOne(id)
    }

    @Put(":id")
    update(@Param("id") id:string, @Body() updateUserDto:UpdateUserDTO){
        return this.userService.update(id,updateUserDto)
    }

    @Delete(":id")
    remove(@Param("id") id:string){
        return this.userService.remove(id)
    }
}