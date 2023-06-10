/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { JobsService } from "./jobs.service";


@Module({
    imports:[],
    providers:[JobsService],
    exports:[]
})
export class JobModule{

}