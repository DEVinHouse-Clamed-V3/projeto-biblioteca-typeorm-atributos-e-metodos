import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class BooksTable1737252388356 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "books",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "title",
                        type: "varchar",
                        isNullable: false,
                    },
                    {
                        name: "description",
                        type: "text",
                        isNullable: true,
                    },
                    {
                        name: "publication_date",
                        type: "date",
                        isNullable: true,
                    },
                    {
                        name: "isbn",
                        type: "varchar",
                        isNullable: false,
                    },
                    {
                        name: "page_count",
                        type: "int",
                        isNullable: true,
                    },
                    {
                        name: "language",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "CURRENT_TIMESTAMP",
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "CURRENT_TIMESTAMP",
                        onUpdate: "CURRENT_TIMESTAMP",
                    },
                ],
            }), true
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
