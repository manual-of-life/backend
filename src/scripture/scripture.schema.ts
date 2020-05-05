import * as mongoose from 'mongoose';

const WordsSchema = new mongoose.Schema({
  word: String,
  type: { type: String, required: false } ,
  explanation: { type: String, required: false },
});

const VerseSchema = new mongoose.Schema({
  idx: { type: Number, required: true },
  type: { type: String, required: false },
  words: [WordsSchema],
  comment: { type: Array, required: false },
});

const ChapterSchema = new mongoose.Schema({
  idx: { type: Number, required: true },
  verse: [VerseSchema],
});

export const ScriptureSchema = new mongoose.Schema({
  title: { type: String, required: true },
  type: { type: String, required: true },
  chapter: [ChapterSchema],
});

