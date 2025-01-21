import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class AutorTable1734647036114 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                name: "autor",
                columns: [
                    {
                        name: "id",
                        type: "serial",
                        isPrimary: true,
                    },
                    {
                        name: "name",
                        type: "varchar",
                        length: "150",
                        isNullable: false,
                    },
                    {
                        name: "birthDate",
                        type: "date",
                    },
                    {
                        name: "biography",
                        type: "text",
                    },
                    {
                        name: "nationality",
                        type: "varchar",
                        length: "100",
                        isNullable: false,
                    },
                    {
                        name: "active",
                        type: "boolean",
                        default: true,
                    },
                    {
                        name: "createdAt",
                        type: "timestamp",
                        default: `'now()'`,
                    },
                    {
                        name: "updatedAt",
                        type: "timestamp",
                        default: `'now()'`,
                    }
                ]

        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('autor')
    }

}
