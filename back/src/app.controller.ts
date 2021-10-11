import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { getManager } from 'typeorm';
import { AppService } from './app.service';
import { User } from './users/user.entity';
import { Payment } from './payments/payment.entity';
import { Vehicle } from './vehicles/vehicle.entity';
import { Insurance } from './insurances/insurance.entity';
import { Request } from 'express';
import { InsuranceOptionsService } from './insuranceOptions/insuranceOptions.service';

@Controller('app')
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly insuranceOptionsService: InsuranceOptionsService,
  ) {}

  @Post()
  async create(@Req() req: Request, @Body() dto) {
    await getManager().transaction(async (transactionalEntityManager) => {
      const user = new User(dto.user);
      await transactionalEntityManager.save(user);
      const payment = new Payment(dto.payment);
      payment.user = user;
      const vehicle = new Vehicle(dto.vehicle);
      vehicle.user = user;
      await transactionalEntityManager.save(payment);
      await transactionalEntityManager.save(vehicle);
      const insuranceOptions = await this.insuranceOptionsService.findAll();
      const chosenInsuranceOptions = insuranceOptions.filter(
        (value, index) => dto.insuranceOptions[index],
      );

      const insurance = new Insurance();
      insurance.vehicle = vehicle;
      insurance.payment = payment;
      insurance.user = user;
      insurance.insuranceOptions = chosenInsuranceOptions;
      await transactionalEntityManager.save(insurance);
    });
  }
}
