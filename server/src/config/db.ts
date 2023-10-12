import { RFIDData } from '../models/RFIDData';
import { SensorData } from '../models/SensorData';
import { Sequelize } from 'sequelize-typescript';

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database.sqlite',
})

sequelize.addModels([SensorData, RFIDData]);

export default sequelize;
