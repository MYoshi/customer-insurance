import { Body, Controller, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { VehiclesService } from './vehicles.service';

@Controller('vehicles')
export class VehiclesController {
  constructor(private vehiclesService: VehiclesService) {}

  @Post()
  async create(@Req() req: Request, @Body() dto) {
    return this.vehiclesService.save(dto);
  }
}
