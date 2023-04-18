import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { CarAds } from "./carAds.entity";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", length: 255 })
  name: string;

  @Column({ type: "varchar", length: 127 })
  email: string;

  @Column({ type: "varchar", length: 14 })
  cpf: string;

  @Column({ type: "varchar", length: 12 })
  cellphone: string;

  @Column({ type: "varchar", length: 127 })
  password: string;

  @Column({ type: "boolean", default: false })
  isAdmin: boolean;

  @Column({ type: "varchar", length: 8 })
  birthDate: string;

  @Column({ type: "text", nullable: true })
  description: string;

  @Column({ type: "uuid", nullable: true })
  addressId: string;

  @OneToMany(() => CarAds, (carAd) => carAd.user)
  carsAds: CarAds[];
}