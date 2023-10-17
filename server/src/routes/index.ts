import express from 'express';
import {
   getSensorData,
   getSensorDataById,
   createSensorData,
   deleteAllSensorData,
   deleteSensorData,
   updateSensorData,
} from '../controllers/SensorDataController';
import { createPatient, getPatient, updatePatient, deleteAllPatient, deletePatient } from '../controllers/PatientController';
import {
   getRFIDChartData,
   getRFIDChartDataWeek,
   getRFIDChartDataYearInByMonths,
   getRFIDChartDataRange,
   getRFIDChartDataYear,
   getRFIDChartDataMonth,
} from '../controllers/charts/PatientChartContoller';
import {
   getDisease,
   getDiseaseById,
   deleteAllDisease,
   deleteDisease,
   updateDisease,
   createDisease,
} from '../controllers/DiseaseContoller';

const router = express.Router();

// SensorData routes
router.get('/sensor-data', getSensorData);
router.post('/sensor-data', createSensorData);
router.get('/sensor-data/:id', getSensorDataById);
router.put('/sensor-data/:id', updateSensorData);
router.delete('/sensor-data/:id', deleteSensorData);
router.delete('/sensor-data', deleteAllSensorData);

// Patient routes
router.get('/patient', getPatient);
router.post('/patient', createPatient);
router.put('/patient/:id', updatePatient);
router.delete('/patient/:id', deletePatient);
router.delete('/patient', deleteAllPatient);
//rfid chart data routes
router.get('/patient/chart', getRFIDChartData);
router.get('/patient/chart/week', getRFIDChartDataWeek);
router.get('/patient/chart/month', getRFIDChartDataYearInByMonths);
router.get('/patient/chart/days-month', getRFIDChartDataMonth);
router.get('/patient/chart/year', getRFIDChartDataYear);
router.get('/patient/chart/range', getRFIDChartDataRange);

// disease routes
router.get('/disease', getDisease);
router.post('/disease', createDisease);
router.get('/disease/:id', getDiseaseById);
router.put('/disease/:id', updateDisease);
router.delete('/disease/:id', deleteDisease);
router.delete('/disease', deleteAllDisease);

export default router;
