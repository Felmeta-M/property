import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
// import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from '../schemas/users.schema';
// import * as bcrypt from 'bcrypt';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  // async create(createUserDto: CreateUserDto): Promise<User> {
  //   const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
  //   const createdUser = new this.userModel({ ...createUserDto, password: hashedPassword });
  //   return createdUser.save();
  // }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async findOne(username: string): Promise<User | null> {
    const user = await this.userModel.findOne({ username }).exec();
    if (!user) {
      return null; // Explicitly return null if user not found
    }
    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    return this.userModel.findByIdAndUpdate(id, updateUserDto, { new: true }).exec();
  }

  async remove(id: string): Promise<any> {
    return this.userModel.findByIdAndDelete(id).exec();
  }
}
