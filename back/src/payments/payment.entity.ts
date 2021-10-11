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
export class Payment extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  cardNumber: string;

  @Column()
  cardName: string;

  @Column()
  expirationDate: string;

  @Column({ nullable: true })
  userId: number;

  @ManyToOne((type) => User, (user) => user.payments)
  @JoinColumn([{ name: 'userId', referencedColumnName: 'id' }])
  user: User;

  @OneToMany((type) => Insurance, (insurance) => insurance.payment)
  insurances: Insurance[];

  constructor(init?: Partial<Payment>) {
    super();
    Object.assign(this, init);
  }
}
