import { Document } from 'mongoose';

import { Text } from './text.interface';

export interface Verse extends Document {
  readonly id: number;
  readonly text: [Text];
  readonly comment: [number];
}
