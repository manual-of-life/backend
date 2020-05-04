import { InputType, Field } from 'type-graphql';

import { ChapterType } from './input-chapter.model';

import { TScripture } from '../scripture.constants';

@InputType()
export class ScriptureType {
  @Field()
  readonly title: string;
  @Field()
  readonly type: TScripture;
  readonly chapter: [ChapterType];
}

