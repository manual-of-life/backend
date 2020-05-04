import { Document } from 'mongoose';

import { Chapter } from './chapter.interface';

export interface Scripture extends Document {
  readonly id: number;
  readonly title: string;
  readonly chapter: [Chapter];
}
