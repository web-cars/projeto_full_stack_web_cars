import {
  BeforeInsert,
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { CarAds } from "./carAds.entity";
import { Addresses } from "./addresses.entity";
import { hashSync } from "bcryptjs";

@Entity("users")
export class Users {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 255 })
  name: string;

  @Column({ unique: true, length: 127 })
  email: string;

  @Column({ unique: true, length: 14 })
  cpf: string;

  @Column({ unique: true, length: 15 })
  cellphone: string;

  @Column({ length: 127 })
  password: string;

  @Column()
  isAdmin: boolean;

  @Column()
  birthDate: string;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true })
  perfilPhoto: string;

  @BeforeInsert()
  hashPassword() {
    this.password = hashSync(this.password, 10);
  }

  @OneToMany(() => CarAds, (advertisement) => advertisement.user, {
    eager: true,
  })
  advertisements: CarAds[];

  @OneToOne(() => Addresses, { eager: true })
  @JoinColumn()
  address: Addresses;
}

