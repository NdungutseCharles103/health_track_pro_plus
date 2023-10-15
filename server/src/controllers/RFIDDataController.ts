import { Request, Response } from 'express';
import { RFIDData } from '../models/RFIDData';
import { ApiResponse } from '../utils/ApiResponse';

export const getRFIDData = async (req: Request, res: Response) => {
  try {
    const rfidData = await RFIDData.findAll();
    res.json(new ApiResponse(true, rfidData, "Successfully retrieved RFIDData"));
  } catch (error) {
    res.status(500).json(new ApiResponse(false, null, 'Failed to retrieve RFIDData', error));
  }
};

export const createRFIDData = async (req: Request, res: Response) => {
  try {
    const rfidData = await RFIDData.create(req.body);
    res.status(201).json(new ApiResponse(true, rfidData, "Successfully created RFIDData"));
  } catch (error) {
    res.status(500).json(new ApiResponse(false, null, 'Failed to retrieve RFIDData', error));
  }
};

export const getRFIDDataById = async (req: Request, res: Response) => {
  try {
    const rfidData = await RFIDData.findByPk(req.params.id);
    if (rfidData) {
      res.json(new ApiResponse(true, rfidData, "Successfully retrieved RFIDData"));
    } else {
      res.status(404).json({ error: 'RFIDData not found' });
    }
  } catch (error) {
    res.status(500).json(new ApiResponse(false, null, 'Failed to retrieve RFIDData', error));
  }
};

export const updateRFIDData = async (req: Request, res: Response) => {
  try {
    const rfidData = await RFIDData.findByPk(req.params.id);
    if (rfidData) {
      await rfidData.update(req.body);
      res.json(new ApiResponse(true, rfidData, "Successfully updated RFIDData"));
    } else {
      res.status(404).json({ error: 'RFIDData not found' });
    }
  } catch (error) {
    res.status(500).json(new ApiResponse(false, null, 'Failed to retrieve RFIDData', error));
  }
};

export const deleteRFIDData = async (req: Request, res: Response) => {
  try {
    const rfidData = await RFIDData.findByPk(req.params.id);
    if (rfidData) {
      await rfidData.destroy();
      res.json(new ApiResponse(true, rfidData, "Successfully deleted RFIDData"));
    } else {
      res.status(404).json({ error: 'RFIDData not found' });
    }
  } catch (error) {
    res.status(500).json(new ApiResponse(false, null, 'Failed to retrieve RFIDData', error));
  }
};

export const deleteAllRFIDData = async (req: Request, res: Response) => {
  try {
    await RFIDData.destroy({ where: {} });
    res.json(new ApiResponse(true, null, "Successfully deleted all RFIDData"));
  } catch (error) {
    res.status(500).json(new ApiResponse(false, null, 'Failed to retrieve RFIDData', error));
  }
};
