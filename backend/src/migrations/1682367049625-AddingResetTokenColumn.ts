import { MigrationInterface, QueryRunner } from "typeorm";

export class AddingResetTokenColumn1682367049625 implements MigrationInterface {
    name = 'AddingResetTokenColumn1682367049625'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "resetToken" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "resetToken"`);
    }

}
