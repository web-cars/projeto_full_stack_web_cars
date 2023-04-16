import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from "typeorm";
import { Address } from "./addresses.entity";
import { CarAds } from "./carAds.entity";

@Entity("user")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  cpf: string;

  @Column()
  cellPhone: string;

  @Column({ type: "date" })
  birthdate: Date;

  @Column()
  description: string;

  @Column({ default: false })
  isAdmin: boolean;

  @Column()
  password: string;

  @ManyToOne(() => Address, (address) => address.users, {
    eager: true,
  })
  address: Address;

  @OneToMany((type) => CarAds, (carAds) => carAds.user, {
    eager: true,
  })
  car_ads: CarAds[];

}
