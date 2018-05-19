import { Entity, Column, ObjectIdColumn, ObjectID, PrimaryGeneratedColumn, PrimaryColumn, Index } from 'typeorm';

@Entity()
export class Hero {
    @ObjectIdColumn() readonly _id: ObjectID;

    @Column() @Index({ unique: true }) readonly id: number;
    @Column() readonly name: string;
    @Column() readonly saying: string;
}
