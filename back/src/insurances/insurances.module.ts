import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InsurancesService } from './insurances.service';
import { InsurancesController } from './insurances.controller';
import { Insurance } from './insurance.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Insurance])],
  providers: [InsurancesService],
  controllers: [InsurancesController],
})
export class InsurancesModule {}
