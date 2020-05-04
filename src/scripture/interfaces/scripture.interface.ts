import { Document } from 'mongoose';

import { Chapter } from './chapter.interface';

import { TScripture } from '../scripture.constants';

export interface Scripture extends Document {
  readonly id: number;
  readonly title: string;
  readonly type: TScripture;
  readonly chapter: [Chapter];
}
