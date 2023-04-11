import { MigrationInterface, QueryRunner } from "typeorm";

export class carAdsEntity1681225372703 implements MigrationInterface {
    name = 'carAdsEntity1681225372703'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "cars_ads" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "fipePrice" numeric(10,2) NOT NULL, "price" numeric(10,2) NOT NULL, "isActive" boolean NOT NULL, "description" character varying(256) NOT NULL, "color" character varying(25) NOT NULL, "model" character varying(256) NOT NULL, "brand" "public"."cars_ads_brand_enum" NOT NULL, "year" "public"."cars_ads_year_enum" NOT NULL, "fuel_type" "public"."cars_ads_fuel_type_enum" NOT NULL, CONSTRAINT "PK_ecf4c1e889636dc827e79dbe430" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "images" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "file" character varying NOT NULL, "carId" uuid, CONSTRAINT "PK_1fe148074c6a1a91b63cb9ee3c9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "images" ADD CONSTRAINT "FK_c966d343d95687961368797192e" FOREIGN KEY ("carId") REFERENCES "cars_ads"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "images" DROP CONSTRAINT "FK_c966d343d95687961368797192e"`);
        await queryRunner.query(`DROP TABLE "images"`);
        await queryRunner.query(`DROP TABLE "cars_ads"`);
    }

}
