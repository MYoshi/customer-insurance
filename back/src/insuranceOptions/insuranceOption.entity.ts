import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToMany,
  JoinTable,
  BaseEntity,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Vehicle } from '../vehicles/vehicle.entity';
import { User } from '../users/user.entity';
import { Payment } from '../payments/payment.entity';
import { Insurance } from '../insurances/insurance.entity';

@Entity()
export class InsuranceOption extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  value: number;

  @Column()
  name: string;

  @ManyToMany((type) => Insurance, (insurance) => insurance.insuranceOptions)
  insurances: Insurance[];

  constructor(init?: Partial<InsuranceOption>) {
    super();
    Object.assign(this, init);
  }
}
