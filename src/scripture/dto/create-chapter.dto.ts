import { Types } from 'mongoose';
import { ObjectType, Field } from 'type-graphql';

import { VerseType } from './create-verse.dto';

@ObjectType()
export class ChapterType {
  @Field()
  readonly idx: number;
  @Field()
  readonly verse: Types.Array<VerseType>;
}

