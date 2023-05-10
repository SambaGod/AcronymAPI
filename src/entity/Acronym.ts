import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Acronym {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: true,
  })
  acronym: string;

  @Column({
    nullable: true,
  })
  description: string;
}
