import { Request, Response } from 'express';
import { Patient } from '../models/Patient';
import { ApiResponse } from '../utils/ApiResponse';

export const getPatient = async (req: Request, res: Response) => {
   try {
      const patient = await Patient.findAll();
      res.json(new ApiResponse(true, patient, 'Successfully retrieved Patient'));
   } catch (error) {
      res.status(500).json(new ApiResponse(false, null, 'Failed to retrieve Patient', error));
   }
};

export const createPatient = async (req: Request, res: Response) => {
   try {
      const patient = await Patient.create(req.body);
      res.status(201).json(new ApiResponse(true, patient, 'Successfully created Patient'));
   } catch (error) {
      res.status(500).json(new ApiResponse(false, null, 'Failed to retrieve Patient', error));
   }
};

export const getPatientById = async (req: Request, res: Response) => {
   try {
      const patient = await Patient.findByPk(req.params.id);
      if (patient) {
         res.json(new ApiResponse(true, patient, 'Successfully retrieved Patient'));
      } else {
         res.status(404).json({ error: 'Patient not found' });
      }
   } catch (error) {
      res.status(500).json(new ApiResponse(false, null, 'Failed to retrieve Patient', error));
   }
};

export const updatePatient = async (req: Request, res: Response) => {
   try {
      const patient = await Patient.findByPk(req.params.id);
      if (patient) {
         await patient.update(req.body);
         res.json(new ApiResponse(true, patient, 'Successfully updated Patient'));
      } else {
         res.status(404).json({ error: 'Patient not found' });
      }
   } catch (error) {
      res.status(500).json(new ApiResponse(false, null, 'Failed to retrieve Patient', error));
   }
};

export const deletePatient = async (req: Request, res: Response) => {
   try {
      const patient = await Patient.findByPk(req.params.id);
      if (patient) {
         await patient.destroy();
         res.json(new ApiResponse(true, patient, 'Successfully deleted Patient'));
      } else {
         res.status(404).json({ error: 'Patient not found' });
      }
   } catch (error) {
      res.status(500).json(new ApiResponse(false, null, 'Failed to retrieve Patient', error));
   }
};

export const deleteAllPatient = async (req: Request, res: Response) => {
   try {
      await Patient.destroy({ where: {} });
      res.json(new ApiResponse(true, null, 'Successfully deleted all Patient'));
   } catch (error) {
      res.status(500).json(new ApiResponse(false, null, 'Failed to retrieve Patient', error));
   }
};
