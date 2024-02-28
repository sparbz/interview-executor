import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, Column, OneToMany } from 'typeorm';
import { SimpleTaskInstance } from './task-instance.entity';

@Entity()
export class SimpleTaskRun {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @ManyToOne(() => SimpleTaskInstance, taskInstance => taskInstance.id)
  @JoinColumn({ name: 'task_instance_id' })
  taskInstance!: SimpleTaskInstance;

  @Column({ type: 'json', nullable: true })
  taskInputs?: any; // Simplify structure for inputs

  @Column({ type: 'jsonb', nullable: true })
  result?: any; // Simplify the result structure or use specific DTOs

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
