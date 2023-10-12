import { Column, Model, Table, DataType } from 'sequelize-typescript';

@Table
export class SensorData extends Model {
  @Column(DataType.FLOAT)
  heartRate!: number;

  @Column(DataType.FLOAT)
  bodyTemperature!: number;
}