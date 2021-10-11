import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Payment } from './payment.entity';

@Injectable()
export class PaymentsService {
  constructor(
    @InjectRepository(Payment)
    private paymentsRepository: Repository<Payment>,
  ) {}

  async save(init: Partial<Payment>): Promise<void> {
    const payment = new Payment(init);

    //VALIDATION

    this.paymentsRepository.save(payment);
  }

  findAll(): Promise<Payment[]> {
    return this.paymentsRepository.find();
  }

  findOne(id: string): Promise<Payment> {
    return this.paymentsRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.paymentsRepository.delete(id);
  }
}
