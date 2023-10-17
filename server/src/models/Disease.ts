import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
export class Disease extends Model {
   @Column(DataType.STRING)
   name!: string;

   @Column(DataType.STRING)
   description: string = '';
}
