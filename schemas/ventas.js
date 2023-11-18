import Joi from 'joi-oid';

const ventaSchema = Joi.object({
  producto: Joi.string().required(),
  monto: Joi.number().required(),
});

export default ventaSchema;