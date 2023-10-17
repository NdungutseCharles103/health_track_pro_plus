import Joi from 'joi';

const patientSchema = Joi.object({
   patientName: Joi.string().required(),
   patientNationalID: Joi.string().required().length(16),
   frequentSickness: Joi.string().required(),
   disease: Joi.number(),
});

export default patientSchema;
