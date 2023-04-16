import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
} from "typeorm";

import { User } from "./user.entity";

@Entity("address")
export class Address {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 50 })
  cep: string;

  @Column({ length: 150 })
  state: string;

  @Column({ length: 200 })
  city: string;

  @Column()
  street: string;

  @Column()
  number: string;

  @Column()
  complement: string;

  @OneToMany(() => User, user => user.address)
  users: User[];
}
  