import {
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Images } from "./images.entity";
import { Model } from "./model.entity";
import { Year } from "./year.entity";
import { Fuel } from "./fuel.entity";
import { Color } from "./color.entity";

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
  @OneToMany(() => Images, (Images) => Images, {
    eager: true,
  })
  images: Images[];
  @OneToOne(() => Model, (model) => model, {
    eager: true,
  })
  model: Model;
  @OneToOne(() => Year, (year) => year, {
    eager: true,
  })
  year: Year;
  @OneToOne(() => Fuel, (fuel) => fuel, {
    eager: true,
  })
  fuel_type: Fuel;
  @OneToOne(() => Color, (color) => color, {
    eager: true,
  })
  color: Color;
}
