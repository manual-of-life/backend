import { Types } from 'mongoose';

import { TRainbow } from '../scripture.constants';

export interface Words extends Types.Subdocument {
  readonly word: string;
  readonly type?: TRainbow;
  readonly explanation?: string;
}
