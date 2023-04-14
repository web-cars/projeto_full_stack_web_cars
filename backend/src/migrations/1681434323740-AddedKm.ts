import { MigrationInterface, QueryRunner } from "typeorm";

export class AddedKm1681434323740 implements MigrationInterface {
    name = 'AddedKm1681434323740'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cars_ads" ADD "kilometers" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cars_ads" DROP COLUMN "kilometers"`);
    }

}
