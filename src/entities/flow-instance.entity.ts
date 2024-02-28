import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, Column, OneToMany } from 'typeorm';
import { SimpleFlow } from './flow.entity';


@Entity()
export class SimpleFlowInstance {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @ManyToOne(() => SimpleFlow, flow => flow.id)
  @JoinColumn({ name: 'flow_id' })
  flow!: SimpleFlow;

  @Column()
  flowName!: string; // You may choose to normalize this by only relying on the relation

  @Column('json')
  flowArgs!: any[]; // Simplify to any[] for the purpose of this exercise

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
