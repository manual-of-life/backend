import { Types } from 'mongoose';
import { InputType, Field } from 'type-graphql';

import { VerseInput } from './input-verse.model';

@InputType()
export class ChapterInput {
  @Field()
  readonly idx: number;
  @Field()
  readonly verse: Types.Array<VerseInput>;
}

