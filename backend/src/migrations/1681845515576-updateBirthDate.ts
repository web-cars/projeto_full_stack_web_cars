import { MigrationInterface, QueryRunner } from "typeorm";

export class updateBirthDate1681845515576 implements MigrationInterface {
    name = 'updateBirthDate1681845515576'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "birthDate"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "birthDate" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "birthDate"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "birthDate" TIMESTAMP NOT NULL`);
    }

}
