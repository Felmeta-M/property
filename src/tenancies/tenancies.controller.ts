import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TenanciesService } from './tenancies.service';
import { CreateTenancyDto } from './dto/create-tenancy.dto';
import { UpdateTenancyDto } from './dto/update-tenancy.dto';

@Controller('tenancies')
export class TenanciesController {
  constructor(private readonly tenanciesService: TenanciesService) {}

  @Post()
  create(@Body() createTenancyDto: CreateTenancyDto) {
    return this.tenanciesService.create(createTenancyDto);
  }

  @Get()
  findAll() {
    return this.tenanciesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tenanciesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTenancyDto: UpdateTenancyDto) {
    return this.tenanciesService.update(+id, updateTenancyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tenanciesService.remove(+id);
  }
}
