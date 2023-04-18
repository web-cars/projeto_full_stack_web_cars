import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Images } from "./images.entity";
import { Brand, FuelType, Year } from "../enum/carAds.enum";
import { User } from "./users.entity";

@Entity("cars_ads")
export class CarAds {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  @Column({ type: "decimal", precision: 10, scale: 2 })
  fipePrice: number;
  @Column({ type: "decimal", precision: 10, scale: 2 })
  price: number;
  @Column({ default: true })
  isActive: boolean;
  @Column({ length: 256, nullable: true })
  description: string;
  @Column({ length: 25 })
  color: string;
  @Column({ length: 256 })
  model: string;
  @Column()
  kilometers: number;
  @Column({ type: "enum", enum: Brand })
  brand: Brand;
  @Column({ type: "enum", enum: Year })
  year: Year;
  @Column({ type: "enum", enum: FuelType })
  fuel_type: FuelType;
  @OneToMany(() => Images, (image) => image.car, {
    eager: true,
  })
  images: Images[];

  @ManyToOne(() => User, (user) => user.carsAds)
  user: User;
}
