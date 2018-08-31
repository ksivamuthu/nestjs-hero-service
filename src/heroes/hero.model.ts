import { Column, Entity, Index, ObjectID, ObjectIdColumn } from "typeorm";

@Entity()
export class Hero {
    // tslint:disable-next-line:variable-name
    @ObjectIdColumn() public readonly _id: ObjectID;

    @Column() @Index({ unique: true }) public readonly id: number;
    @Column() public readonly name: string;
    @Column() public readonly saying: string;
}
