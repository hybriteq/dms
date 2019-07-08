import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Doc } from '../interfaces';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class DocService {
    constructor(@InjectModel('Doc') private readonly docModel: Model<Doc>) { }

    async create(createDocDto: any): Promise<Doc> {
        createDocDto.updatedTime = Date.now()
        const createdCat = new this.docModel(createDocDto);
        return await createdCat.save();
    }

    async findAll(): Promise<Doc[]> {
        return await this.docModel.find().exec();
    }
}
