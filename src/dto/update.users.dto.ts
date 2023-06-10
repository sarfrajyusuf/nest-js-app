/* eslint-disable prettier/prettier */
import {IsEmail, IsNumber, IsOptional, IsString, ValidateNested} from 'class-validator';
import { Type } from 'class-transformer';
import { AddressDTO } from './address.dto';
import { CreateUserDTO } from './create.user.dto';
import {PartialType,OmitType} from '@nestjs/mapped-types'
// export class UpdateUserDTO{
//    @IsString()
//    @IsOptional()
//     name:string

//     @IsEmail()
//    @IsOptional()
//     email:string

//     @IsString()
//     @IsOptional()
//     password:string

//     @IsNumber()
//     @IsOptional()
//     age?:number

//     @IsString()
//     @IsOptional()
//     phone?:number

//     @IsString({each:true})
//     @IsOptional()
//     social?:string[]

//     @Type(()=>AddressDTO)
//     @ValidateNested()
//     @IsOptional()   
//      address:AddressDTO

//     metaData:Record<string,any>;
// }



//here we can use @nestjs/mapped-types to copy of the class and make them optional

// export class UpdateUserDTO extends OmitType(CreateUserDTO,["account_type","metaData"]){}   //with partial type 


export class UpdateUserDTO extends PartialType(CreateUserDTO){}   //with partial type 





