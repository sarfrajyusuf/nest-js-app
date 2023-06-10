/* eslint-disable prettier/prettier */
// import { Type } from '@nestjs/common';
import {IsEmail, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString, ValidateNested} from 'class-validator';
import { Type } from 'class-transformer';
import { ACCOUNT_TYPE } from 'src/constants';
import { AddressDTO } from './address.dto';

export class CreateUserDTO{
   @IsString()
   @IsNotEmpty()
    name:string

    @IsEmail()
   @IsNotEmpty()
    email:string

    @IsString()
    @IsNotEmpty()
    password:string

    @IsNumber()
    @IsOptional()
    age?:number

    @IsNumber()
    @IsOptional()
    phone?:number

    @IsEnum(ACCOUNT_TYPE)
    @IsNotEmpty()
    account_type:ACCOUNT_TYPE

    @IsString({each:true})
    @IsOptional()
    social?:string[]

    @Type(()=>AddressDTO)
    
    @ValidateNested()
    @IsNotEmpty()
    address:AddressDTO

    metaData:Record<string,any>;
}