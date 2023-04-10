import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("color")
export class Color {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  @Column()
  name: string;
}
