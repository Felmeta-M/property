// import { Test, TestingModule } from '@nestjs/testing';
// import { TenantsService } from './tenants.service';
// import { getModelToken } from '@nestjs/mongoose';

// describe('TenantsService', () => {
//   let service: TenantsService;

//   beforeEach(async () => {
//     const module: TestingModule = await Test.createTestingModule({
//       providers: [
//         TenantsService,
//         { provide: getModelToken('Property'), useValue: {} },
//         { provide: getModelToken('Tenancy'), useValue: {} },
//         { provide: getModelToken('Job'), useValue: {} },
//         { provide: getModelToken('User'), useValue: {} },
//       ],
//     }).compile();

//     service = module.get<TenantsService>(TenantsService);
//   });

//   it('should be defined', () => {
//     expect(service).toBeDefined();
//   });

//   it('should return tenant dashboard data', async () => {
//     const tenantId = 'tenant1';
//     const result = await service.getTenantDashboardData(tenantId);
//     expect(result).toHaveProperty('totalProperties');
//     expect(result).toHaveProperty('totalActiveTenancies');
//     expect(result).toHaveProperty('jobStatusBreakdown');
//     expect(result).toHaveProperty('associatedUsers');
//   });
// });
