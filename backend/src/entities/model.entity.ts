import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("model")
export class Model {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  @Column()
  name: string;
}
