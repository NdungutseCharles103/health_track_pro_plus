import { Column, Model, Table, DataType } from 'sequelize-typescript';

@Table
export class RFIDData extends Model {

  @Column(DataType.STRING)
  patientName!: string;

  @Column(DataType.STRING)
  patientNationalID!: string;

  @Column(DataType.STRING)
  frequentSickness!: string;
}