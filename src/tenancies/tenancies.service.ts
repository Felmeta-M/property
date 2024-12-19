import { Injectable } from '@nestjs/common';
import { CreateTenancyDto } from './dto/create-tenancy.dto';
import { UpdateTenancyDto } from './dto/update-tenancy.dto';

@Injectable()
export class TenanciesService {
  create(createTenancyDto: CreateTenancyDto) {
    return 'This action adds a new tenancy';
  }

  findAll() {
    return `This action returns all tenancies`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tenancy`;
  }

  update(id: number, updateTenancyDto: UpdateTenancyDto) {
    return `This action updates a #${id} tenancy`;
  }

  remove(id: number) {
    return `This action removes a #${id} tenancy`;
  }
}
