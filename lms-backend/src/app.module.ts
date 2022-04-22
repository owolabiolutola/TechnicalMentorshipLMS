import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './courses/courses.module';
import { config } from "dotenv";

config()

@Module({
  imports: [
    MongooseModule.forRoot(
      process.env.MONGO_URI
      ),
    CoursesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
