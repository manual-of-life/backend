import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { ScriptureType } from './dto/create-scripture.dto';
import { Scripture } from './interfaces/scripture.interface';
import { ScriptureInput } from './model/input-scripture.model';

@Injectable()
export class ScriptureService {
  constructor(@InjectModel('Scripture') private itemModel: Model<Scripture>) {}

  async create(createScriptureDto: ScriptureInput): Promise<ScriptureType> {
    const createdScripture = new this.itemModel(createScriptureDto);
    return await createdScripture.save();
  }

  async findAll(): Promise<ScriptureType[]> {
    return await this.itemModel.find().exec();
  }

  async findOne(id: string): Promise<ScriptureType> {
    return await this.itemModel.findOne({ _id: id });
  }

  async delete(id: string): Promise<ScriptureType> {
    return await this.itemModel.findByIdAndRemove(id);
  }

  async update(id: string, item: Scripture): Promise<ScriptureType> {
    return await this.itemModel.findByIdAndUpdate(id, item, { new: true });
  }
}
