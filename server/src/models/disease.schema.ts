import Joi from 'joi';

const diseaseSchema = Joi.object({
   name: Joi.string().required(),
   description: Joi.string(),
});

export default diseaseSchema;
