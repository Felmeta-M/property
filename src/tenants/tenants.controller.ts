// import { Controller, Get, Query, UseGuards } from '@nestjs/common';
// import { TenantsService } from './tenants.service';
// import { JwtAuthGuard } from '../auth/jwt-auth.guard';

// @Controller('tenants')
// export class TenantsController {
//   constructor(private readonly tenantsService: TenantsService) {}

//   @UseGuards(JwtAuthGuard)
//   @Get('dashboard')
//   async getTenantDashboard(@Query('tenantId') tenantId: string): Promise<any> {
//     return this.tenantsService.getTenantDashboardData(tenantId);
//   }
// }
