import { Types } from 'mongoose';

import { Verse } from './verse.interface';

export interface Chapter extends Types.Subdocument {
  readonly idx: number;
  readonly verse: Types.Array<Verse>;
}
