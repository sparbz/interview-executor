import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, Column, OneToMany } from 'typeorm';
import { SimpleTask } from './task.entity';

@Entity()
export class SimpleTaskInstance {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @ManyToOne(() => SimpleTask, task => task.id)
  @JoinColumn({ name: 'task_id' })
  task!: SimpleTask;

  @Column()
  taskName!: string; // Simplify by possibly removing if the name can be accessed via the task relationship

  @Column({ type: 'json', nullable: true })
  taskPayload?: any; // Simplify structure or use specific DTOs for payload

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
