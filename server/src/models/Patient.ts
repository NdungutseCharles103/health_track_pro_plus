import { Column, Model, Table, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Disease } from './Disease';

@Table
export class Patient extends Model {
   @Column(DataType.STRING)
   patientName!: string;

   @Column(DataType.STRING)
   patientNationalID!: string;

   @ForeignKey(() => Disease)
   @Column(DataType.INTEGER)
   diseaseId!: number;

   @BelongsTo(() => Disease)
   frequentSickness!: Disease;
}
