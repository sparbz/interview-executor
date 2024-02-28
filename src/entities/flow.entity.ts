import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, Column, OneToMany } from 'typeorm';
import { SimpleTask } from './task.entity';

@Entity()
export class SimpleFlow {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  name!: string;

  @Column()
  description!: string;

  tasks!: SimpleTask[]

}
