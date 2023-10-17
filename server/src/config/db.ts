import { Disease } from '../models/Disease';
import { Patient } from '../models/Patient';
import { SensorData } from '../models/SensorData';
import { Sequelize } from 'sequelize-typescript';

const sequelize = new Sequelize({
   dialect: 'sqlite',
   storage: 'database.sqlite',
});

sequelize.addModels([SensorData, Patient, Disease]);

export default sequelize;
