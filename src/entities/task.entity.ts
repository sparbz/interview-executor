import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, Column, OneToMany } from 'typeorm';


@Entity()
export class SimpleTask {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  name!: string;

  dependencies?: string[];

}
