import { Document } from 'mongoose';

import { Verse } from './verse.interface';

export interface Chapter extends Document {
  readonly id: string;
  readonly verse: [Verse];
}
