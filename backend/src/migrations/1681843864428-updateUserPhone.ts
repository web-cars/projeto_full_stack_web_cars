import { MigrationInterface, QueryRunner } from "typeorm";

export class updateUserPhone1681843864428 implements MigrationInterface {
    name = 'updateUserPhone1681843864428'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "UQ_15f2ebe082a6e43a960f9f88411"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "cellphone"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "cellphone" character varying(15) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "UQ_15f2ebe082a6e43a960f9f88411" UNIQUE ("cellphone")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "UQ_15f2ebe082a6e43a960f9f88411"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "cellphone"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "cellphone" character varying(12) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "UQ_15f2ebe082a6e43a960f9f88411" UNIQUE ("cellphone")`);
    }

}
