import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'items'})
export class Items{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    createdBy: number;
}