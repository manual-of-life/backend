import { Module } from '@nestjs/common';
import { ScriptureService } from './scripture.service';
import { ScriptureResolver } from './scripture.resolver';

@Module({
  providers: [ScriptureService, ScriptureResolver]
})
export class ScriptureModule {}
