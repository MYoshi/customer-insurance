import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { PaymentsModule } from './payments/payments.module';
import { InsurancesModule } from './insurances/insurances.module';
import { VehiclesModules } from './vehicles/vehicles.module';
import { InsuranceOptionsModule } from './insuranceOptions/insuranceOptions.module';

@Module({
  imports: [
    UsersModule,
    PaymentsModule,
    InsurancesModule,
    VehiclesModules,
    InsuranceOptionsModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'test',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
