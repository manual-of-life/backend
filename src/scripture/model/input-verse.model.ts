import { InputType, Field, ID } from 'type-graphql';

import { TextType } from './input-text.model';

@InputType()
export class VerseType {
  @Field(() => ID)
  readonly id?: string;
  @Field()
  readonly text: [TextType];
  @Field(() => Array)
  readonly comment: [number];
}
