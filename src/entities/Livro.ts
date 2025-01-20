import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
  } from "typeorm";
  
  @Entity("books")
  export default class Livro {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ type: "varchar", nullable: false })
    title: string;
  
    @Column({ type: "text" })
    description: string;
  
    @Column({ type: "date" })
    publication_date: Date;
  
    @Column({ type: "varchar", nullable: false })
    isbn: string;
  
    @Column({ type: "int" })
    page_count: number;
  
    @Column({ type: "varchar" })
    language: string;
  
    @CreateDateColumn({ type: "timestamp" })
    created_at: Date;
  
    @UpdateDateColumn({ type: "timestamp" })
    updated_at: Date;
  }
  