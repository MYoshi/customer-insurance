import { Body, Controller, Post, Req } from '@nestjs/common';
import { InsuranceOptionsService } from './insuranceOptions.service';
import { Request } from 'express';

@Controller('insurances')
export class InsuranceOptionsController {
  constructor(private insurancesService: InsuranceOptionsService) {}

  @Post()
  async create(@Req() req: Request, @Body() dto) {
    return this.insurancesService.save(dto);
  }
}
