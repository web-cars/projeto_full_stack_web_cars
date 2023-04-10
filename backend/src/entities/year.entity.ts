import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("year")
export class Year {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  @Column()
  year: number;
}
