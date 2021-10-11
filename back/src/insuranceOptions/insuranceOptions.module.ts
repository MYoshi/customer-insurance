import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InsuranceOptionsService } from './insuranceOptions.service';
import { InsuranceOptionsController } from './insuranceOptions.controller';
import { InsuranceOption } from './insuranceOption.entity';

@Module({
  imports: [TypeOrmModule.forFeature([InsuranceOption])],
  providers: [InsuranceOptionsService],
  exports: [InsuranceOptionsService],
  controllers: [InsuranceOptionsController],
})
export class InsuranceOptionsModule {}
