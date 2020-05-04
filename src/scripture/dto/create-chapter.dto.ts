import { ObjectType, Field, ID } from 'type-graphql';

import { VerseType } from './create-verse.dto';

@ObjectType()
export class ChapterType {
  @Field(() => ID)
  readonly id?: string;
  @Field()
  readonly verse: [VerseType];
}

