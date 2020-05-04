import { InputType, Field, ID } from 'type-graphql';

import { VerseInput } from './input-verse.model';

@InputType()
export class ChapterInput {
  @Field(() => ID)
  readonly id?: string;
  @Field()
  readonly verse: [VerseInput];
}

