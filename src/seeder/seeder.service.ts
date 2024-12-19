import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Job } from '../schemas/jobs.schema';
import { Property } from '../schemas/properties.schema';
import { Role } from '../schemas/roles.schema';
import { Tenancy } from '../schemas/tenancies.schema';
import { User } from '../schemas/users.schema';

@Injectable()
export class SeederService implements OnModuleInit {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    @InjectModel(Property.name) private propertyModel: Model<Property>,
    @InjectModel(Tenancy.name) private tenancyModel: Model<Tenancy>,
    @InjectModel(Job.name) private jobModel: Model<Job>,
    @InjectModel(Role.name) private roleModel: Model<Role>,
  ) {}

  async onModuleInit() {
    console.log('Starting seed...');
    await this.seedRoles();
    await this.seedUsers();
    await this.seedProperties();
    console.log('Seeding complete!');
  }

  async seedRoles() {
    const roles = [
      { name: 'Admin', permissions: ['ALL'] },
      { name: 'PropertyManager', permissions: ['VIEW', 'EDIT_PROPERTIES'] },
      { name: 'Maintenance', permissions: ['VIEW_JOBS', 'UPDATE_JOBS'] },
    ];
    await this.roleModel.insertMany(roles);
    console.log('Roles seeded.');
  }

  async seedUsers() {
    const users = [
      { name: 'Admin User', email: 'admin@example.com', password: 'password', roles: ['Admin'], tenantId: 'tenant1' },
      { name: 'Manager', email: 'manager@example.com', password: 'password', roles: ['PropertyManager'], tenantId: 'tenant1' },
      { name: 'Technician', email: 'tech@example.com', password: 'password', roles: ['Maintenance'], tenantId: 'tenant1' },
    ];
    await this.userModel.insertMany(users);
    console.log('Users seeded.');
  }

  async seedProperties() {
    const properties = [
      { name: 'Villa Sunrise', address: '123 Ocean Drive', ownerId: 'owner1', tenantId: 'tenant1', metadata: {} },
      { name: 'Skyline Apartments', address: '45 City Lane', ownerId: 'owner2', tenantId: 'tenant1', metadata: {} },
    ];
    await this.propertyModel.insertMany(properties);
    console.log('Properties seeded.');
  }
}
