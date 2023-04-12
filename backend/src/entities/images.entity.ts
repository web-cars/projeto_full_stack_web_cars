import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { CarAds } from "./carAds.entity";

@Entity("images")
export class Images {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  @Column()
  file: string;
  @ManyToOne(() => CarAds, (car) => car.images)
  car: CarAds;
}
