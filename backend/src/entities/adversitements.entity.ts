import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToMany
  } from "typeorm";

//import { Brand, FuelType, Year } from "../enum/carAds.enum";
import { Images } from "./images.entity";

  
  @Entity()
  export class Advertisements{
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

      @Column({ length: 256 })
      brand: string;

      @Column()
      year: number;

      @Column({ length: 256 })
      fuel_type: string;

      @Column({ length: 256 })
      vehicle_type: string;
      
      @OneToMany(() => Images, (Images) => Images, {
        eager: true,
      })
      images: Images[];

  }