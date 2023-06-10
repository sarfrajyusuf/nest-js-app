/* eslint-disable prettier/prettier */

import { Prop, Schema, SchemaFactory, raw } from "@nestjs/mongoose";
import { ACCOUNT_STATUS, ACCOUNT_TYPE } from "src/constants";
import { Address, AddressSchema } from "../common/address.schema";
import {Document} from 'mongoose'
@Schema({
    timestamps:true, 
})
export class User{
    @Prop({required:true})
    name:string

    @Prop({required:true})
    email:string

    @Prop({required:true, select:false})
    password:string

    @Prop({required:true})
    age?:string

    @Prop({required:true})
    phone?:number

    @Prop({
        type:String,
        enum:Object.keys(ACCOUNT_STATUS),
        default :ACCOUNT_STATUS.INACTIVE
    })
    status?:ACCOUNT_STATUS

    @Prop({
        type:String,
        enum:Object.keys(ACCOUNT_TYPE) ,
        default:ACCOUNT_TYPE.EMPLOYER ,
        immutable:true,
        required:true
    })
    account_type:ACCOUNT_TYPE

    @Prop({default:[]})
    social?:string[]
    
    @Prop({default:false})
    isEmailVarified?:boolean

    @Prop({type:AddressSchema,required:true})
    address?:Address
    @Prop(
        raw({
            reference:{type:String},
            beta:{type:Boolean}
        })
    )
    metaData:Record<string,any> | any;

}


const schema=SchemaFactory.createForClass(User)

export type UserDocument=User & Document

export const USER_MODEL=User.name //user reference to Job schema
export const UserSchema=schema