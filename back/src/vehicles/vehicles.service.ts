import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Vehicle } from './vehicle.entity';

@Injectable()
export class VehiclesService {
  constructor(
    @InjectRepository(Vehicle)
    private vehiclesRepository: Repository<Vehicle>,
  ) {}

  async save(init: Partial<Vehicle>): Promise<void> {
    const user = new Vehicle(init);

    //VALIDATION

    this.vehiclesRepository.save(user);
  }

  findAll(): Promise<Vehicle[]> {
    return this.vehiclesRepository.find();
  }

  findOne(id: string): Promise<Vehicle> {
    return this.vehiclesRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.vehiclesRepository.delete(id);
  }
}
