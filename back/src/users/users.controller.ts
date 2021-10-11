import { Body, Controller, Post, Req } from '@nestjs/common';
import { UsersService } from './users.service';
import { Request } from 'express';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  async create(@Req() req: Request, @Body() dto) {
    return this.usersService.save(dto);
  }
}
