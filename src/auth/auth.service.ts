// import { Injectable } from '@nestjs/common';
// import { JwtService } from '@nestjs/jwt';
// import { UsersService } from '../users/users.service';
// import * as bcrypt from 'bcrypt';

// @Injectable()
// export class AuthService {
//   constructor(private usersService: UsersService, private jwtService: JwtService) {}

//   async validateUser(username: string, password: string): Promise<any> {
//     const user = await this.usersService.findOne(username);
//     if (user && await bcrypt.compare(password, user.password)) {
//       return user;  // Return user if password matches
//     }
//     return null;  // Return null if user not found or password doesn't match
//   }

//   async login(user: any) {
//     const payload = { username: user.username, sub: user._id }; // Using _id instead of userId
//     return {
//       access_token: this.jwtService.sign(payload),
//     };
//   }
// }
