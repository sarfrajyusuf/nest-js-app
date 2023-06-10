/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { JobModule } from './jobs/jobs.module';
import { MongooseModelModule } from './schema/allModel/mongoose.model.module';


@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/mydatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }, 
  
),UsersModule,JobModule,MongooseModelModule],
})
export class AppModule {}
