import { InputType, Field } from 'type-graphql';

@InputType()
export class TextType {
  @Field()
  readonly word: string;
  @Field()
  readonly type: string;
  @Field()
  readonly explanation: string;
}

