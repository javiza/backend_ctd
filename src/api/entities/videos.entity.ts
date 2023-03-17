import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  OneToOne,
  ManyToMany,
  JoinTable,
  ManyToOne,
} from 'typeorm';
import { Usuario } from './usuario.entity';
import { Vistas } from './vistas.entity';



@Entity()
export class Videos {
  
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titulo: string;

  @Column()
  descripcion: string;
  
  @Column()
  duracion: number;

  @Column()
  fecha_publicacion: number;

  @Column()
  ruta_archivo: string;

  @ManyToOne(() => Usuario, usuario => usuario.videos)
  usuario: Usuario;

  @OneToOne(() => Vistas)
  @JoinColumn({ name: 'vistas_id' })
  vistas: Vistas;

  @OneToMany(() => Vistas, (vistas) => vistas.usuario)
  vistas: Vistas[];
  

}

 
