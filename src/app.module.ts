import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';

console.log("----process.env----",process.env)

@Module({
  imports: [
    UsersModule,
    MongooseModule.forRoot(
      //Replace this line with the one Cluster > Connect > Connect your Application
      `mongodb+srv://${process.env.MONGO_ATLAS_USER}:${process.env.MONGO_ATLAS_PASSWORD}@cluster0.gs3mn.mongodb.net/${process.env.MONGO_ATLAS_DB}?retryWrites=true&w=majority`,
      // 'mongodb+srv://zubair:Pyerx123@cluster0.gs3mn.mongodb.net/zubair?retryWrites=true&w=majority',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
