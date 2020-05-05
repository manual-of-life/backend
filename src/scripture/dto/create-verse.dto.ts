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
  readonly words: [WordsType];
  @Field(() => [])
  readonly comment?: [number];
}
