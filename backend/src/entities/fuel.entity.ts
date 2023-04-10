import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("fuel_type")
export class Fuel {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  @Column()
  name: string;
}
