import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterColumnBirthDateToString1681837619800 implements MigrationInterface {
    name = 'AlterColumnBirthDateToString1681837619800'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "birthDate"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "birthDate" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "birthDate"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "birthDate" TIMESTAMP NOT NULL`);
    }

}
