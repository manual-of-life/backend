import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ScriptureSchema } from './scripture.schema';
import { ScriptureService } from './scripture.service';
import { ScriptureResolver } from './scripture.resolver';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Scripture', schema: ScriptureSchema }])],
  providers: [ScriptureService, ScriptureResolver]
})
export class ScriptureModule {}
