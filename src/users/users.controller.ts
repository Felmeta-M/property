import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
// import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // Create a new user
  // @Post()
  // create(@Body() createUserDto: CreateUserDto) {
  //   return this.usersService.create(createUserDto);
  // }

  // Get all users
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  // Get a specific user by username
  @Get(':username')
  findOne(@Param('username') username: string) {
    return this.usersService.findOne(username); // Pass username as string
  }

  // Update a user's details
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto); // Pass id as string
  }

  // Remove a user by id
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id); // Pass id as string
  }
}
