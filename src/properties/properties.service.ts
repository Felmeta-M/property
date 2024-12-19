import { Injectable } from '@nestjs/common';
import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Property } from '../schemas/properties.schema';

@Injectable()
export class PropertiesService {
  constructor(
    @InjectModel(Property.name) private propertyModel: Model<Property>,
  ) {}

  async findAll(req: any) {
    const tenantId = req.tenantId; // Get tenantId from the request
    return this.propertyModel.find({ tenantId }).exec();
  }
  async searchProperties(tenantId: string, searchQuery: string) {
    return this.propertyModel.aggregate([
      { $match: { tenantId, $text: { $search: searchQuery } } },
      {
        $lookup: {
          from: 'users',
          localField: 'assignedUserId',
          foreignField: '_id',
          as: 'userDetails',
        },
      },
      {
        $lookup: {
          from: 'tenancies',
          localField: '_id',
          foreignField: 'propertyId',
          as: 'tenancyDetails',
        },
      },
    ]);
  }

  create(createPropertyDto: CreatePropertyDto) {
    return 'This action adds a new property';
  }

  findOne(id: number) {
    return `This action returns a #${id} property`;
  }

  update(id: number, updatePropertyDto: UpdatePropertyDto) {
    return `This action updates a #${id} property`;
  }

  remove(id: number) {
    return `This action removes a #${id} property`;
  }
}
