import { Types } from 'mongoose';
import { InputType, Field } from 'type-graphql';

import { ChapterInput } from './input-chapter.model';

import { TScripture } from '../scripture.constants';

@InputType()
export class ScriptureInput {
  @Field()
  readonly title: string;
  @Field()
  readonly type: TScripture;
  @Field()
  readonly chapter: Types.Array<ChapterInput>;
}

