import { InputType, Field, ID } from 'type-graphql';

import { VerseType } from './input-verse.model';

@InputType()
export class ChapterType {
  @Field(() => ID)
  readonly id?: string;
  @Field()
  readonly verse: [VerseType];
}

