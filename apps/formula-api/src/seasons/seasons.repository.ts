import {Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class Seasons {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    year: number;

    @Column()
    url: string;
}
