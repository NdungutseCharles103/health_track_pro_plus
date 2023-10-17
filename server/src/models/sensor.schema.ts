import Joi from 'joi';

const sensorSchema = Joi.object({
   heartRate: Joi.number().required(),
   bodyTemperature: Joi.number().required(),
});

export default sensorSchema;
