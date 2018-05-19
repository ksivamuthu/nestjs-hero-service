import { Entity, Column, ObjectIdColumn, ObjectID, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Hero {
    @ObjectIdColumn() readonly id: number;
    @Column() readonly name: string;
    @Column() readonly saying: string;
}
