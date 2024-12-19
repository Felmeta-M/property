// import { Module } from '@nestjs/common';
// import { JwtModule } from '@nestjs/jwt';
// import { UsersModule } from '../users/users.module';
// import { AuthService } from './auth.service';
// import { JwtStrategy } from './jwt.strategy';
// import { JwtAuthGuard } from './jwt-auth.guard';

// @Module({
//   imports: [
//     UsersModule,
//     JwtModule.register({
//       secret: process.env.JWT_SECRET || 'secretKey',  // Use environment variable for the secret key
//       signOptions: { expiresIn: '1h' },
//     }),
//   ],
//   providers: [AuthService, JwtStrategy, JwtAuthGuard],
//   exports: [AuthService],
// })
// export class AuthModule {}
