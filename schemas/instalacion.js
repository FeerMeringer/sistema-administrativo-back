import Joi from 'joi-oid';
const instalacionSchema = Joi.object({
    nombreCompleto: Joi.string().required(),
    direccion: Joi.string().required(),
    fechaInicio: Joi.date().required(),
    tipoInstalacion: Joi.string().required(),
    presupuestoEstimado: Joi.number(),
    detallesDeCostos: Joi.string(),
  });
  
  export default instalacionSchema;