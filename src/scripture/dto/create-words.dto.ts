import { ObjectType, Field } from 'type-graphql';

import { TRainbow } from '../scripture.constants';

@ObjectType()
export class WordsType {
  @Field()
  readonly word: string;
  @Field()
  readonly type?: TRainbow;
  @Field()
  readonly explanation?: string;
}

