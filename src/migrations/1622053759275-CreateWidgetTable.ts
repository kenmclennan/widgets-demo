import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateWidgetTable1622053759275 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        return queryRunner.query(`
            CREATE TABLE IF NOT EXISTS "widgets" (
                "id" uuid NOT NULL DEFAULT gen_random_uuid(),
                "name" varchar(63) NOT NULL,
                "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
                "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
                PRIMARY KEY ("id")
            );
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        return queryRunner.query(`
            DROP TABLE IF EXISTS "widgets";
        `);
    }
}
