// import { Module } from '@nestjs/common';
// import { MongooseModule } from '@nestjs/mongoose';
// import { TenantsController } from './tenants.controller';
// import { TenantsService } from './tenants.service';
// import { Property, PropertySchema } from '../schemas/properties.schema';
// import { Tenancy, TenancySchema } from '../schemas/tenancies.schema';
// import { Job, JobSchema } from '../schemas/jobs.schema';
// import { User, UserSchema } from '../schemas/users.schema';

// @Module({
//   imports: [
//     MongooseModule.forFeature([
//       { name: Property.name, schema: PropertySchema },
//       { name: Tenancy.name, schema: TenancySchema },
//       { name: Job.name, schema: JobSchema },
//       { name: User.name, schema: UserSchema },
//     ]),
//   ],
//   controllers: [TenantsController],
//   providers: [TenantsService],
// })
// export class TenantsModule {}
