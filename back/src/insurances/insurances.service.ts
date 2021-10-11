import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Insurance } from './insurance.entity';

@Injectable()
export class InsurancesService {
  constructor(
    @InjectRepository(Insurance)
    private insurancesRepository: Repository<Insurance>,
  ) {}

  async save(init: Partial<Insurance>): Promise<void> {
    const insurance = new Insurance(init);

    //VALIDATION

    this.insurancesRepository.save(insurance);
  }

  findAll(): Promise<Insurance[]> {
    return this.insurancesRepository.find();
  }

  findOne(id: string): Promise<Insurance> {
    return this.insurancesRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.insurancesRepository.delete(id);
  }
}
