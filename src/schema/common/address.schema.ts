/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Address{
    @Prop({required:true})
    address1:string
    
    @Prop({})
    address2?:string

    @Prop({})
    city?:string

    @Prop({required:true})
    country:string

    @Prop({})
    state:string

    @Prop({})
    zipcode:number
}

const schema=SchemaFactory.createForClass(Address)
export const AddressSchema=schema
