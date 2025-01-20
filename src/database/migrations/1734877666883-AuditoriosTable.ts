import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class AuditoriosTable1734877666883 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                    name: 'auditorios',
                    columns: [
                        {
                            name: 'id',
                            isPrimary: true,
                            type: 'serial'
                        },
                        {
                            name: 'name',
                            type: 'varchar',
                            length: '150'
                        },
                        {
                            name: 'capacity',
                            type: 'int'
                        },
                        {
                            name: 'location',
                            type: 'varchar',
                            length: '255'
                        },
                        {
                            name: 'has_projector',
                            type: 'boolean'
                        },
                        {
                            name: 'has_sound_system',
                            type: 'boolean'
                        },
                        {
                            name: 'created_at',
                            type: 'timestamp',
                            default: 'now()'

                        },
                        {
                            name: 'updated_at',
                            type: 'timestamp',
                            default: 'now()'
                        }
                    ]
                }
            )
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('auditorios')
    }

}
