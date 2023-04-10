import { MigrationInterface, QueryRunner } from "typeorm";

export class carAds1681152337093 implements MigrationInterface {
    name = 'carAds1681152337093'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "images" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "file" character varying NOT NULL, "carId" uuid, CONSTRAINT "PK_1fe148074c6a1a91b63cb9ee3c9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "model" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, CONSTRAINT "PK_d6df271bba301d5cc79462912a4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "year" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "year" integer NOT NULL, CONSTRAINT "PK_506885a7430147dbff28fa689fd" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "fuel_type" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, CONSTRAINT "PK_546a28980794b5335ca804e76d8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "color" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, CONSTRAINT "PK_d15e531d60a550fbf23e1832343" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "cars_ads" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "fipePrice" numeric(10,2) NOT NULL, "price" numeric(10,2) NOT NULL, "isActive" boolean NOT NULL, "description" character varying(256) NOT NULL, CONSTRAINT "PK_ecf4c1e889636dc827e79dbe430" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "images" ADD CONSTRAINT "FK_c966d343d95687961368797192e" FOREIGN KEY ("carId") REFERENCES "cars_ads"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "images" DROP CONSTRAINT "FK_c966d343d95687961368797192e"`);
        await queryRunner.query(`DROP TABLE "cars_ads"`);
        await queryRunner.query(`DROP TABLE "color"`);
        await queryRunner.query(`DROP TABLE "fuel_type"`);
        await queryRunner.query(`DROP TABLE "year"`);
        await queryRunner.query(`DROP TABLE "model"`);
        await queryRunner.query(`DROP TABLE "images"`);
    }

}
