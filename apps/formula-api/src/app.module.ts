import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SeasonsModule } from './seasons/seasons.module';
import { DatabseModule } from './databse/databse.module';

@Module({
  imports: [SeasonsModule, DatabseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
