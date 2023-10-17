import { Request, Response } from 'express';
import { Disease } from '../models/Disease';
import { ApiResponse } from '../utils/ApiResponse';
import diseaseSchema from '../models/disease.schema';

export const getDisease = async (req: Request, res: Response) => {
   try {
      const disease = await Disease.findAll();
      res.json(new ApiResponse(true, disease, 'Successfully retrieved Disease'));
   } catch (error) {
      console.log(error);
      res.status(500).json(new ApiResponse(false, null, 'Failed to retrieve Disease', error));
   }
};

export const createDisease = async (req: Request, res: Response) => {
   try {
      const { error, value } = diseaseSchema.validate(req.body);
      if (error) {
         res.status(400).json(new ApiResponse(false, null, 'Failed to create Disease', error));
      } else {
         const disease = await Disease.create(value);
         res.status(201).json(new ApiResponse(true, disease, 'Successfully created Disease'));
      }
   } catch (error) {
      res.status(500).json(new ApiResponse(false, null, 'Failed to retrieve Disease', error));
   }
};

export const getDiseaseById = async (req: Request, res: Response) => {
   try {
      const disease = await Disease.findByPk(req.params.id);
      if (disease) {
         res.json(new ApiResponse(true, disease, 'Successfully retrieved Disease'));
      } else {
         res.status(404).json({ error: 'Disease not found' });
      }
   } catch (error) {
      res.status(500).json(new ApiResponse(false, null, 'Failed to retrieve Disease', error));
   }
};

export const updateDisease = async (req: Request, res: Response) => {
   try {
      const disease = await Disease.findByPk(req.params.id);
      if (disease) {
         await disease.update(req.body);
         res.json(new ApiResponse(true, disease, 'Successfully updated Disease'));
      } else {
         res.status(404).json({ error: 'Disease not found' });
      }
   } catch (error) {
      res.status(500).json(new ApiResponse(false, null, 'Failed to retrieve Disease', error));
   }
};

export const deleteDisease = async (req: Request, res: Response) => {
   try {
      const disease = await Disease.findByPk(req.params.id);
      if (disease) {
         await disease.destroy();
         res.json(new ApiResponse(true, disease, 'Successfully deleted Disease'));
      } else {
         res.status(404).json({ error: 'Disease not found' });
      }
   } catch (error) {
      res.status(500).json(new ApiResponse(false, null, 'Failed to retrieve Disease', error));
   }
};

export const deleteAllDisease = async (req: Request, res: Response) => {
   try {
      await Disease.destroy({ where: {} });
      res.json(new ApiResponse(true, null, 'Successfully deleted all Disease'));
   } catch (error) {
      res.status(500).json(new ApiResponse(false, null, 'Failed to retrieve Disease', error));
   }
};
