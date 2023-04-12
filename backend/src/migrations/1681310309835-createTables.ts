import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTables1681310309835 implements MigrationInterface {
    name = 'CreateTables1681310309835'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "advertisements" ("ads_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "fipePrice" numeric(10,2) NOT NULL, "price" numeric(10,2) NOT NULL, "isActive" boolean NOT NULL, "description" character varying(256) NOT NULL, "color" character varying(25) NOT NULL, "model" character varying(256) NOT NULL, "brand" character varying(256) NOT NULL, "year" integer NOT NULL, "fuel_type" character varying(256) NOT NULL, "vehicle_type" character varying(256) NOT NULL, CONSTRAINT "PK_dc53842bff8a7fc9d1432136379" PRIMARY KEY ("ads_id"))`);
        await queryRunner.query(`CREATE TABLE "images" ("img_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "file" character varying NOT NULL, "ads_id" uuid NOT NULL, CONSTRAINT "REL_f0ec5dd9f56a20ea4569b8e206" UNIQUE ("ads_id"), CONSTRAINT "PK_20e62e85e70ce41f03dc0b8f94f" PRIMARY KEY ("img_id"))`);
        await queryRunner.query(`ALTER TABLE "images" ADD CONSTRAINT "FK_f0ec5dd9f56a20ea4569b8e206e" FOREIGN KEY ("ads_id") REFERENCES "advertisements"("ads_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "images" DROP CONSTRAINT "FK_f0ec5dd9f56a20ea4569b8e206e"`);
        await queryRunner.query(`DROP TABLE "images"`);
        await queryRunner.query(`DROP TABLE "advertisements"`);
    }

}
