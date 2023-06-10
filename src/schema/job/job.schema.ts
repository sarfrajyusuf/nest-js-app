/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Address, AddressSchema } from "../common/address.schema";
import { JobType } from "src/constants";
import { Types } from "mongoose";
import { USER_MODEL, User } from "../user/user.schema";
import {Document} from 'mongoose'
@Schema({timestamps:true})

export class Job{

    @Prop({
        type:Types.ObjectId,
        ref:USER_MODEL,
        required:true
    })
    employer: string |Types.ObjectId | User

    @Prop({required:true})
    companyName:string

    @Prop({required:true})
    title:string

    @Prop({required:true})
    description:string

    @Prop({required:true})
    experience:string

    @Prop({default:[]})
    tag?:string[]

    @Prop()
    salary?:string

    @Prop({
        type:String,
        enum:Object.keys(JobType),
        required:true
    })
    type:JobType

    @Prop({type:AddressSchema,required:true})
    location:Address
}
export type JobDocument= Job & Document

export const JOB_MODEL=Job.name //user reference to Job schema

export const JobSchema=SchemaFactory.createForClass(Job)