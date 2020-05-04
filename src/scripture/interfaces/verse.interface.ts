import { Document } from 'mongoose';

import { Text } from './text.interface';

export interface Verse extends Document {
  readonly id: string;
  readonly text: [Text];
  readonly comment: [number];
}
