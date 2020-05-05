import { InputType, Field } from 'type-graphql';

import { TRainbow } from '../scripture.constants';

@InputType()
export class WordsInput {
  @Field()
  readonly word: string;
  @Field()
  readonly type?: TRainbow;
  @Field()
  readonly explanation?: string;
}

