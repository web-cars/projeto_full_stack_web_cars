import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";
//import { CarAds } from "./carAds.entity";
import { Advertisements } from "./adversitements.entity";


@Entity("images")
export class Images {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  file: string;
  
  @Column({ name: 'id' })
  ads_id: string;

  @OneToOne(() => Advertisements, ads => ads.id)
  @JoinColumn({name:'id'})
    ads: Advertisements;
}                                                                                                                                                                                                        