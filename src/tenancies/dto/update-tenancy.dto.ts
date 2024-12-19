import { PartialType } from '@nestjs/swagger';
import { CreateTenancyDto } from './create-tenancy.dto';

export class UpdateTenancyDto extends PartialType(CreateTenancyDto) {}
