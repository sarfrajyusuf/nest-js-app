/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { UserService } from "./users.service";
import { UsersController } from "./users.controller";


@Module({
    imports:[],
    controllers:[UsersController],
    providers:[UserService],
    exports:[]
})
export class UsersModule{}