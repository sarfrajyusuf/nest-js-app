/* eslint-disable prettier/prettier */
import { Global, Module } from "@nestjs/common";
import { USER_MODEL, UserSchema } from "../user";
import { JOB_MODEL, JobSchema } from "../job";
import { MongooseModule } from "@nestjs/mongoose";

const MODELS=[
    {name:USER_MODEL,schema:UserSchema},
    {name:JOB_MODEL,schema:JobSchema}
]

@Global()
@Module({
    imports:[MongooseModule.forFeature(MODELS)],
    exports:[MongooseModule]
})
export class MongooseModelModule{}