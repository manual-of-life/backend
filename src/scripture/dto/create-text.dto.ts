import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
export class TextType {
  @Field()
  readonly word: string;
  @Field()
  readonly type: string;
  @Field()
  readonly explanation: string;
}

