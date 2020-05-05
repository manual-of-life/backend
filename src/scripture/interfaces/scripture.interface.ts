import { Document, Types } from 'mongoose';

import { Chapter } from './chapter.interface';

import { TScripture } from '../scripture.constants';

export interface Scripture extends Document {
  readonly id?: string;
  readonly title: string;
  readonly type: TScripture;
  readonly chapter: Types.Array<Chapter>;
}
