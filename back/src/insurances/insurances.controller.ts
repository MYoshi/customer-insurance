import { Body, Controller, Post, Req } from '@nestjs/common';
import { InsurancesService } from './insurances.service';
import { Request } from 'express';

@Controller('insurances')
export class InsurancesController {
  constructor(private insurancesService: InsurancesService) {}

  @Post()
  async create(@Req() req: Request, @Body() dto) {
    return this.insurancesService.save(dto);
  }
}
