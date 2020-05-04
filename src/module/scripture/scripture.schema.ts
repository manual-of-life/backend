import * as mongoose from 'mongoose';

export const ScriptureSchema = new mongoose.Schema({
  id: Number,
  title: String,
  chapter: [{
    id: Number,
    verse: [{
      id: Number,
      text: [{
        word: String,
        type: String,
        explanation: String,
      }],
      comment: [Number],
    }],
  }],
});
