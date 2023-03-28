import { Tdl, TdlDocument } from './entities/tdl.entities';
import { UpdateTdlDto } from './dtos/update-tdl.dto';
import { CreateTdlDto } from './dtos/create-tdl.dto';
import {
  BadRequestException,
  Injectable,
  ValidationPipe,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class TdlService {
  constructor(@InjectModel(Tdl.name) private tdlModel: Model<TdlDocument>) {}

  create(createTdlDto: CreateTdlDto) {
    const createdTdl = new this.tdlModel(createTdlDto);
    return createdTdl.save();
  }

  findAll() {
    return this.tdlModel.find().exec();
  }

  findOne(id: string) {
    return this.tdlModel.findById(id);
  }

  update(id: string, updateTdlDto: UpdateTdlDto) {
    return this.tdlModel.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        ...updateTdlDto,
      },
      {
        new: true,
      },
    );
  }

  remove(id: string) {
    return this.tdlModel
      .deleteOne({
        _id: id,
      })
      .exec();
  }
}
