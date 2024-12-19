import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Job, JobSchema } from '../schemas/jobs.schema';
import { JobsService } from './jobs.service';
import { JobsController } from './jobs.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: Job.name, schema: JobSchema }])],
  exports: [MongooseModule],
  controllers: [JobsController],
  providers: [JobsService],
})
export class JobsModule {}
