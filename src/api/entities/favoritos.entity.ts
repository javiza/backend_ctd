import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Usuario } from "./usuario.entity";
import { Videos } from "./videos.entity";


@Entity()
export class Favoritos {
 
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Usuario, usuario => usuario.favoritos)
  usuario: Usuario;

  @ManyToOne(() => Videos, videos => videos.favoritos)
  video: Videos;

  @Column()
  fecha_agregado: string;
}