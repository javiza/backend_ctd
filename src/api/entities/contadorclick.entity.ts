import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Usuario } from "./usuario.entity";


@Entity()
export class Clickcount {
  
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  nombre: string;

 @OneToOne(() => Usuario)
  @JoinColumn({ name: 'ussuario_id' })
  usuario: Usuario;

  @Column()
  number_click: number;



}