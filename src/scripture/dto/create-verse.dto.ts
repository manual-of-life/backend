import { Types } from 'mongoose';
import { ObjectType, Field } from 'type-graphql';

import { WordsType } from './create-words.dto';
import { TRainbow } from '../scripture.constants';

@ObjectType()
export class VerseType {
  @Field()
  readonly idx: number;
  @Field()
  readonly type?: TRainbow;
  @Field()
  readonly words: Types.Array<WordsType>;
  @Field(() => [])
  readonly comment?: Types.Array<number>;
}
