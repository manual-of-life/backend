import { InputType, Field, ID } from 'type-graphql';

import { TextInput } from './input-text.model';

@InputType()
export class VerseInput {
  @Field(() => ID)
  readonly id?: string;
  @Field()
  readonly text: [TextInput];
  @Field(() => Array)
  readonly comment: [number];
}
