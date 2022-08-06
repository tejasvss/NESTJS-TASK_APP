import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { TaskStatus } from "./tasks.model";

@Entity()
export class Task {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    status: TaskStatus
}