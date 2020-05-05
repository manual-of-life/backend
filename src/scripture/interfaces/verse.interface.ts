import { Types } from 'mongoose';

import { Words } from './words.interface';

import { TRainbow } from '../scripture.constants';

export interface Verse extends Types.Subdocument {
  readonly idx: number;
  readonly type?: TRainbow;
  readonly words: Types.Array<Words>;
  readonly comment?: Types.Array<number>;
}
