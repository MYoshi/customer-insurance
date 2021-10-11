import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  ManyToMany,
  BaseEntity,
  OneToMany,
  Index,
  JoinColumn,
} from 'typeorm';
import { User } from '../users/user.entity';
import { Insurance } from '../insurances/insurance.entity';

@Entity()
@Index(['id', 'userId'])
export class Vehicle extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @Column()
  color: string;

  @Column()
  plateNumber: string;

  @Column({ nullable: true })
  userId: number;

  @ManyToOne((type) => User, (user) => user.vehicles)
  @JoinColumn([{ name: 'userId', referencedColumnName: 'id' }])
  user: User;

  @OneToMany((type) => Insurance, (insurance) => insurance.vehicle)
  insurances: Insurance[];

  constructor(init?: Partial<Vehicle>) {
    super();
    Object.assign(this, init);
  }
}
