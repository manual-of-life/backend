import { ObjectType, Field, ID } from 'type-graphql';

import { ChapterType } from './create-chapter.dto';

@ObjectType()
export class ScriptureType {
  @Field(() => ID)
  readonly id?: string;
  @Field()
  readonly title: string;
  @Field()
  readonly chapter: [ChapterType];
}

