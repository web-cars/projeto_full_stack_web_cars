import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTables1681673626043 implements MigrationInterface {
    name = 'CreateTables1681673626043'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "images" DROP CONSTRAINT "FK_f0ec5dd9f56a20ea4569b8e206e"`);
        await queryRunner.query(`CREATE TABLE "address" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "cep" character varying(50) NOT NULL, "state" character varying(150) NOT NULL, "city" character varying(200) NOT NULL, "street" character varying NOT NULL, "number" character varying NOT NULL, "complement" character varying NOT NULL, CONSTRAINT "PK_d92de1f82754668b5f5f5dd4fd5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."cars_ads_brand_enum" AS ENUM('Citroën', 'Fiat', 'Ford', 'Chevrolet', 'Honda', 'Hyundai', 'Nissan', 'Peugeot', 'Renault', 'Toyota', 'Volkswagen')`);
        await queryRunner.query(`CREATE TYPE "public"."cars_ads_year_enum" AS ENUM('2022', '2021', '2020', '2019')`);
        await queryRunner.query(`CREATE TYPE "public"."cars_ads_fuel_type_enum" AS ENUM('1', '2', '3')`);
        await queryRunner.query(`CREATE TABLE "cars_ads" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "fipePrice" numeric(10,2) NOT NULL, "price" numeric(10,2) NOT NULL, "isActive" boolean NOT NULL DEFAULT true, "description" character varying(256), "color" character varying(25) NOT NULL, "model" character varying(256) NOT NULL, "kilometers" integer NOT NULL, "brand" "public"."cars_ads_brand_enum" NOT NULL, "year" "public"."cars_ads_year_enum" NOT NULL, "fuel_type" "public"."cars_ads_fuel_type_enum" NOT NULL, "userId" uuid, CONSTRAINT "PK_ecf4c1e889636dc827e79dbe430" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "email" character varying NOT NULL, "cpf" character varying NOT NULL, "cellPhone" character varying NOT NULL, "birthdate" date NOT NULL, "description" character varying NOT NULL, "isAdmin" boolean NOT NULL DEFAULT false, "password" character varying NOT NULL, "addressId" uuid, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "images" DROP CONSTRAINT "PK_20e62e85e70ce41f03dc0b8f94f"`);
        await queryRunner.query(`ALTER TABLE "images" DROP COLUMN "img_id"`);
        await queryRunner.query(`ALTER TABLE "images" DROP CONSTRAINT "REL_f0ec5dd9f56a20ea4569b8e206"`);
        await queryRunner.query(`ALTER TABLE "images" DROP COLUMN "ads_id"`);
        await queryRunner.query(`ALTER TABLE "images" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "images" ADD CONSTRAINT "PK_1fe148074c6a1a91b63cb9ee3c9" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "images" ADD "carId" uuid`);
        await queryRunner.query(`ALTER TABLE "images" ADD CONSTRAINT "FK_c966d343d95687961368797192e" FOREIGN KEY ("carId") REFERENCES "cars_ads"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "cars_ads" ADD CONSTRAINT "FK_98dc8d9651784c02b5f1483605d" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_217ba147c5de6c107f2fa7fa271" FOREIGN KEY ("addressId") REFERENCES "address"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_217ba147c5de6c107f2fa7fa271"`);
        await queryRunner.query(`ALTER TABLE "cars_ads" DROP CONSTRAINT "FK_98dc8d9651784c02b5f1483605d"`);
        await queryRunner.query(`ALTER TABLE "images" DROP CONSTRAINT "FK_c966d343d95687961368797192e"`);
        await queryRunner.query(`ALTER TABLE "images" DROP COLUMN "carId"`);
        await queryRunner.query(`ALTER TABLE "images" DROP CONSTRAINT "PK_1fe148074c6a1a91b63cb9ee3c9"`);
        await queryRunner.query(`ALTER TABLE "images" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "images" ADD "ads_id" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "images" ADD CONSTRAINT "REL_f0ec5dd9f56a20ea4569b8e206" UNIQUE ("ads_id")`);
        await queryRunner.query(`ALTER TABLE "images" ADD "img_id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "images" ADD CONSTRAINT "PK_20e62e85e70ce41f03dc0b8f94f" PRIMARY KEY ("img_id")`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "cars_ads"`);
        await queryRunner.query(`DROP TYPE "public"."cars_ads_fuel_type_enum"`);
        await queryRunner.query(`DROP TYPE "public"."cars_ads_year_enum"`);
        await queryRunner.query(`DROP TYPE "public"."cars_ads_brand_enum"`);
        await queryRunner.query(`DROP TABLE "address"`);
        await queryRunner.query(`ALTER TABLE "images" ADD CONSTRAINT "FK_f0ec5dd9f56a20ea4569b8e206e" FOREIGN KEY ("ads_id") REFERENCES "advertisements"("ads_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
