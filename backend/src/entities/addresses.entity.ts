import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("addresses")
export class Addresses {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  @Column({ length: 9 })
  cep: string;
  @Column({ length: 127 })
  state: string;
  @Column({ length: 127 })
  city: string;
  @Column({ length: 255 })
  street: string;
  @Column()
  number: number;
  @Column({ nullable: true })
  complement: string;
}
