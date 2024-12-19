// import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TestModule } from './test/test.module';
import { UsersModule } from './users/users.module';
import { PropertiesModule } from './properties/properties.module';
import { TenanciesModule } from './tenancies/tenancies.module';
import { JobsModule } from './jobs/jobs.module';
import { RolesModule } from './roles/roles.module';
// import { SeederService } from './seeder/seeder.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017', { dbName: 'property' }),
    TestModule,
    UsersModule,
    PropertiesModule,
    TenanciesModule,
    JobsModule,
    RolesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
  // providers: [AppService, SeederService],
})
export class AppModule {}
