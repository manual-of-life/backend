import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ScriptureModule } from './scripture/scripture.module';

@Module({
  imports: [
    ScriptureModule,
    GraphQLModule.forRoot({
     autoSchemaFile: 'schema.gql',
    }),
    MongooseModule.forRoot('mongodb://localhost/graphql')
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
