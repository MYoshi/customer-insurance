import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InsuranceOption } from './insuranceOption.entity';

@Injectable()
export class InsuranceOptionsService {
  constructor(
    @InjectRepository(InsuranceOption)
    private insuranceOptionsRepository: Repository<InsuranceOption>,
  ) {}

  async save(init: Partial<InsuranceOption>): Promise<void> {
    const insurance = new InsuranceOption(init);

    //VALIDATION

    this.insuranceOptionsRepository.save(insurance);
  }

  findAll(): Promise<InsuranceOption[]> {
    return this.insuranceOptionsRepository.find();
  }

  findOne(id: string): Promise<InsuranceOption> {
    return this.insuranceOptionsRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.insuranceOptionsRepository.delete(id);
  }
}
