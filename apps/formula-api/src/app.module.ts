import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SeasonsModule } from './seasons/seasons.module';
import { DatabseModule } from './databse/databse.module';
import { ConfigModule } from '@nestjs/config';
import config from './config/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
    }),
    SeasonsModule,
    DatabseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
