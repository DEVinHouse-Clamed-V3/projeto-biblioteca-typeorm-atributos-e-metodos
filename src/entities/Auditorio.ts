import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity("auditorios")
export class Auditorio {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string
    
    @Column()
    capacity: number

    @Column()
    location: string

    @Column()
    has_projector: boolean

    @Column()
    has_sound_system: boolean

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
}

export default Auditorio;