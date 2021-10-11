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
import { InsuranceOption } from '../insuranceOptions/insuranceOption.entity';

@Entity()
export class Insurance extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne((type) => Vehicle, (vehicle) => vehicle.insurances)
  @JoinColumn([
    { name: 'vehicleId', referencedColumnName: 'id' },
    { name: 'userId', referencedColumnName: 'userId' },
  ])
  vehicle: Vehicle;

  @ManyToOne((type) => Payment, (payment) => payment.insurances)
  @JoinColumn([
    { name: 'paymentId', referencedColumnName: 'id' },
    { name: 'userId', referencedColumnName: 'userId' },
  ])
  payment: Payment;

  @ManyToOne((type) => User, (user) => user.insurances)
  user: User;

  @ManyToMany(
    (type) => InsuranceOption,
    (insuranceOption) => insuranceOption.insurances,
  )
  @JoinTable()
  insuranceOptions: InsuranceOption[];

  constructor(init?: Partial<Insurance>) {
    super();
    Object.assign(this, init);
  }
}
