import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToMany,
  BaseEntity,
} from 'typeorm';
import { Vehicle } from '../vehicles/vehicle.entity';
import { Payment } from '../payments/payment.entity';
import { Insurance } from '../insurances/insurance.entity';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @OneToMany((type) => Vehicle, (vehicle) => vehicle.user)
  vehicles: Vehicle[];

  @OneToMany((type) => Payment, (payment) => payment.user)
  payments: Payment[];

  @OneToMany((type) => Insurance, (insurance) => insurance.user)
  insurances: Insurance[];

  constructor(init?: Partial<User>) {
    super();
    Object.assign(this, init);
  }
}
