import { Request, Response } from 'express';
import { SensorData } from '../models/SensorData';
import { ApiResponse } from '../utils/ApiResponse';

export const getSensorData = async (req: Request, res: Response) => {
  try {
    const sensorData = await SensorData.findAll();
    res.json(new ApiResponse(true, sensorData, "Successfully retrieved SensorData"));
  } catch (error) {
    console.log(error);
    res.status(500).json(new ApiResponse(false, null, 'Failed to retrieve RFIDData', error));
  }
};

export const createSensorData = async (req: Request, res: Response) => {
  try {
    const sensorData = await SensorData.create(req.body);
    res.status(201).json(new ApiResponse(true, sensorData, "Successfully created SensorData"));
  } catch (error) {
    res.status(500).json(new ApiResponse(false, null, 'Failed to retrieve RFIDData', error));
  }
};

export const getSensorDataById = async (req: Request, res: Response) => {
  try {
    const sensorData = await SensorData.findByPk(req.params.id);
    res.json(new ApiResponse(true, sensorData, "Successfully retrieved SensorData"));
  } catch (error) {
    res.status(500).json(new ApiResponse(false, null, 'Failed to retrieve RFIDData', error));
  }
};

export const updateSensorData = async (req: Request, res: Response) => {
  try {
    const sensorData = await SensorData.findByPk(req.params.id);
    if (sensorData) {
      await sensorData.update(req.body);
      res.json(new ApiResponse(true, sensorData, "Successfully updated SensorData"));
    } else {
      res.status(404).json(new ApiResponse(false, null, 'SensorData not found'));
    }
  } catch (error) {
    res.status(500).json(new ApiResponse(false, null, 'Failed to retrieve RFIDData', error));
  }
};

export const deleteSensorData = async (req: Request, res: Response) => {
  try {
    const sensorData = await SensorData.findByPk(req.params.id);
    if (sensorData) {
      await sensorData.destroy();
      res.json(new ApiResponse(true, sensorData, "Successfully deleted SensorData"));
    } else {
      res.status(404).json(new ApiResponse(false, null, 'SensorData not found'));
    }
  } catch (error) {
    res.status(500).json(new ApiResponse(false, null, 'Failed to retrieve RFIDData', error));
  }
};

export const deleteAllSensorData = async (req: Request, res: Response) => {
  try {
    await SensorData.destroy({ where: {} });
    res.json(new ApiResponse(true, null, "Successfully deleted all SensorData"));
  } catch (error) {
    res.status(500).json(new ApiResponse(false, null, 'Failed to retrieve RFIDData', error));
  }
};


