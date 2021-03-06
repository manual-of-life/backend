import { Types } from 'mongoose';
import { InputType, Field } from 'type-graphql';

import { WordsInput } from './input-words.model';
import { TRainbow } from '../scripture.constants';

@InputType()
export class VerseInput {
  @Field()
  readonly idx: number;
  @Field()
  readonly type?: TRainbow;
  @Field()
  readonly words: Types.Array<WordsInput>;
  @Field(() => Array)
  readonly comment?: Types.Array<number>;
}
