import express from 'express';
import { getSensorData, getSensorDataById, createSensorData, deleteAllSensorData, deleteSensorData, updateSensorData } from '../controllers/SensorDataController';
import { createRFIDData, getRFIDData, updateRFIDData, deleteAllRFIDData, deleteRFIDData } from '../controllers/RFIDDataController';

const router = express.Router();

router.get('/sensor-data', getSensorData);
router.post('/sensor-data', createSensorData);
router.get('/sensor-data/:id', getSensorDataById);
router.put('/sensor-data/:id', updateSensorData);
router.delete('/sensor-data/:id', deleteSensorData);
router.delete('/sensor-data', deleteAllSensorData);


router.get('/rfid-data', getRFIDData);
router.post('/rfid-data', createRFIDData);
router.put('/rfid-data/:id', updateRFIDData);
router.delete('/rfid-data/:id', deleteRFIDData);
router.delete('/rfid-data', deleteAllRFIDData);

export default router;
