import { ObjectType, Field, ID } from 'type-graphql';

import { TextType } from './create-text.dto';

@ObjectType()
export class VerseType {
  @Field(() => ID)
  readonly id?: string;
  @Field()
  readonly text: [TextType];
  @Field(() => Array)
  readonly comment: [number];
}
