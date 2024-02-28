import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, Column, OneToMany } from 'typeorm';
import { SimpleFlowInstance } from './flow-instance.entity';


@Entity()
export class SimpleFlowRun {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @ManyToOne(() => SimpleFlowInstance, flowInstance => flowInstance.id)
  @JoinColumn({ name: 'flow_instance_id' })
  flowInstance!: SimpleFlowInstance;

  @Column('json')
  flowArgs!: any[]; // Simplify to any[] for this exercise

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
