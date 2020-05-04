import { Document } from 'mongoose';

export interface Text extends Document {
  readonly word: string;
  readonly type: string;
  readonly explanation: string;
}
