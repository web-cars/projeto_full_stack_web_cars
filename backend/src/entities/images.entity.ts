import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";
//import { CarAds } from "./carAds.entity";
import { Advertisements } from "./adversitements.entity";


@Entity("images")
export class Images {
  @PrimaryGeneratedColumn("uuid")
  img_id: string;

  @Column()
  file: string;
  
  @Column({ name: 'ads_id' })
  ads_id: string;

  @OneToOne(() => Advertisements, ads => ads.ads_id)
  @JoinColumn({name:'ads_id'})
  ads: Advertisements;
}                                                                                                                                                                                                        