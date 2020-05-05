import { Types } from 'mongoose';
import { ObjectType, Field, ID } from 'type-graphql';

import { ChapterType } from './create-chapter.dto';

import { TScripture } from '../scripture.constants';

@ObjectType()
export class ScriptureType {
  @Field(() => ID)
  readonly id?: string;
  @Field()
  readonly title: string;
  @Field()
  readonly type: TScripture;
  @Field()
  readonly chapter: [ChapterType];
}

