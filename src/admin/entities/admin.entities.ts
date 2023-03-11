import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";



@Entity()
export class Admin {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre : String;


    @Column()
    contrasena: string;


}