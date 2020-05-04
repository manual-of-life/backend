import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ScriptureModule } from './scripture/scripture.module';

@Module({
  imports: [ScriptureModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
