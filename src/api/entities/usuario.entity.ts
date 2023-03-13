import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  OneToMany,
} from 'typeorm';
import { Videos } from './videos.entity';




@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  correo: string;

  @Column()
  contrasena: string;
  @Column()
  foto: string;

  @OneToOne(() => Videos, (videos) => videos.usuario)
  videos: Videos;
  

}

 