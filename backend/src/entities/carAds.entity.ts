import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Images } from "./images.entity";
import { Brand, FuelType, Year } from "../enum/carAds.enum";

@Entity("cars_ads")
export class CarAds {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  @Column({ type: "decimal", precision: 10, scale: 2 })
  fipePrice: number;
  @Column({ type: "decimal", precision: 10, scale: 2 })
  price: number;
  @Column()
  isActive: boolean;
  @Column({ length: 256 })
  description: string;
  @Column({ length: 25 })
  color: string;
  @Column({ length: 256 })
  model: string;
  @Column({ type: "enum", enum: Brand })
  brand: Brand;
  @Column({ type: "enum", enum: Year })
  year: Year;
  @Column({ type: "enum", enum: FuelType })
  fuel_type: FuelType;
  @OneToMany(() => Images, (Images) => Images, {
    eager: true,
  })
  images: Images[];
}
