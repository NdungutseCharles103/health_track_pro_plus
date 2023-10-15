import express from 'express';
import {
   getSensorData,
   getSensorDataById,
   createSensorData,
   deleteAllSensorData,
   deleteSensorData,
   updateSensorData,
} from '../controllers/SensorDataController';
import {
   createRFIDData,
   getRFIDData,
   updateRFIDData,
   deleteAllRFIDData,
   deleteRFIDData,
} from '../controllers/RFIDDataController';
import {
   getRFIDChartData,
   getRFIDChartDataWeek,
   getRFIDChartDataYearInByMonths,
   getRFIDChartDataRange,
   getRFIDChartDataYear,
   getRFIDChartDataMonth,
} from '../controllers/charts/RFIDChartContoller';

const router = express.Router();

// SensorData routes
router.get('/sensor-data', getSensorData);
router.post('/sensor-data', createSensorData);
router.get('/sensor-data/:id', getSensorDataById);
router.put('/sensor-data/:id', updateSensorData);
router.delete('/sensor-data/:id', deleteSensorData);
router.delete('/sensor-data', deleteAllSensorData);

// RFIDData routes
router.get('/rfid-data', getRFIDData);
router.post('/rfid-data', createRFIDData);
router.put('/rfid-data/:id', updateRFIDData);
router.delete('/rfid-data/:id', deleteRFIDData);
router.delete('/rfid-data', deleteAllRFIDData);
//rfid chart data routes
router.get('/rfid-data/chart', getRFIDChartData);
router.get('/rfid-data/chart/week', getRFIDChartDataWeek);
router.get('/rfid-data/chart/month', getRFIDChartDataYearInByMonths);
router.get('/rfid-data/chart/days-month', getRFIDChartDataMonth);
router.get('/rfid-data/chart/year', getRFIDChartDataYear);
router.get('/rfid-data/chart/range', getRFIDChartDataRange);

export default router;
