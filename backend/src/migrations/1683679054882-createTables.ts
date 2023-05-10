import { MigrationInterface, QueryRunner } from "typeorm";

export class createTables1683679054882 implements MigrationInterface {
    name = 'createTables1683679054882'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TYPE "public"."cars_ads_year_enum" RENAME TO "cars_ads_year_enum_old"`);
        await queryRunner.query(`CREATE TYPE "public"."cars_ads_year_enum" AS ENUM('2022', '2021', '2020', '2019', '2018')`);
        await queryRunner.query(`ALTER TABLE "cars_ads" ALTER COLUMN "year" TYPE "public"."cars_ads_year_enum" USING "year"::"text"::"public"."cars_ads_year_enum"`);
        await queryRunner.query(`DROP TYPE "public"."cars_ads_year_enum_old"`);
        await queryRunner.query(`ALTER TYPE "public"."cars_ads_fuel_type_enum" RENAME TO "cars_ads_fuel_type_enum_old"`);
        await queryRunner.query(`CREATE TYPE "public"."cars_ads_fuel_type_enum" AS ENUM('1', '2', '3', '4')`);
        await queryRunner.query(`ALTER TABLE "cars_ads" ALTER COLUMN "fuel_type" TYPE "public"."cars_ads_fuel_type_enum" USING "fuel_type"::"text"::"public"."cars_ads_fuel_type_enum"`);
        await queryRunner.query(`DROP TYPE "public"."cars_ads_fuel_type_enum_old"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."cars_ads_fuel_type_enum_old" AS ENUM('1', '2', '3')`);
        await queryRunner.query(`ALTER TABLE "cars_ads" ALTER COLUMN "fuel_type" TYPE "public"."cars_ads_fuel_type_enum_old" USING "fuel_type"::"text"::"public"."cars_ads_fuel_type_enum_old"`);
        await queryRunner.query(`DROP TYPE "public"."cars_ads_fuel_type_enum"`);
        await queryRunner.query(`ALTER TYPE "public"."cars_ads_fuel_type_enum_old" RENAME TO "cars_ads_fuel_type_enum"`);
        await queryRunner.query(`CREATE TYPE "public"."cars_ads_year_enum_old" AS ENUM('2022', '2021', '2020', '2019')`);
        await queryRunner.query(`ALTER TABLE "cars_ads" ALTER COLUMN "year" TYPE "public"."cars_ads_year_enum_old" USING "year"::"text"::"public"."cars_ads_year_enum_old"`);
        await queryRunner.query(`DROP TYPE "public"."cars_ads_year_enum"`);
        await queryRunner.query(`ALTER TYPE "public"."cars_ads_year_enum_old" RENAME TO "cars_ads_year_enum"`);
    }

}
