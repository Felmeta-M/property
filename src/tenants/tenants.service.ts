// import { Injectable } from '@nestjs/common';
// import { InjectModel } from '@nestjs/mongoose';
// import { Model } from 'mongoose';
// import { Property } from '../schemas/properties.schema';
// import { Tenancy } from '../schemas/tenancies.schema';
// import { Job } from '../schemas/jobs.schema';
// import { User } from '../schemas/users.schema';

// interface TenantDashboardData {
//   totalProperties: number;
//   totalActiveTenancies: number;
//   jobStatusBreakdown: { [key: string]: number };
//   associatedUsers: { name: string; roles: string[] }[];
// }

// @Injectable()
// export class TenantsService {
//   constructor(
//     @InjectModel(Property.name) private propertyModel: Model<Property>,
//     @InjectModel(Tenancy.name) private tenancyModel: Model<Tenancy>,
//     @InjectModel(Job.name) private jobModel: Model<Job>,
//     @InjectModel(User.name) private userModel: Model<User>,
//   ) {}

//   async getTenantDashboardData(tenantId: string): Promise<TenantDashboardData> {
//     // Validate tenantId (optional)

//     // Aggregate data
//     const [totalProperties, totalTenancies, jobStatusBreakdown, associatedUsers] = await Promise.all([
//       this.propertyModel.countDocuments({ tenantId }),
//       this.tenancyModel.countDocuments({ tenantId, status: 'ACTIVE' }),
//       this.jobModel.aggregate([
//         { $match: { tenantId } },
//         { $group: { _id: '$status', count: { $sum: 1 } } },
//       ]),
//       this.userModel.find({ tenantId }, { name: 1, roles: 1, _id: 0 }).lean(),
//     ]);

//     // Transform and return data
//     return {
//       totalProperties,
//       totalActiveTenancies: totalTenancies,
//       jobStatusBreakdown: jobStatusBreakdown.reduce((acc, cur) => {
//         acc[cur._id] = cur.count;
//         return acc;
//       }, {}),
//       associatedUsers,
//     };
//   }
// }
