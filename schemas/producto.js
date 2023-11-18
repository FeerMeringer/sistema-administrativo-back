import Joi from 'joi-oid';

const productoSchema = Joi.object({
  nombre: Joi.string()
    .required()
    .messages({
      "any.required": "El campo de nombre es obligatorio"
    }),
  codigo: Joi.string()
    .required()
    .messages({
      "any.required": "El campo de código es obligatorio"
    }),
  descripcion: Joi.string()
    .required()
    .messages({
      "any.required": "El campo de descripción es obligatorio"
    }),
  precioUnitarioUSD: Joi.number()
    .required()
    .messages({
      "any.required": "El campo de precio unitario en USD es obligatorio"
    }),
  precioWPUSD: Joi.number()
    .required()
    .messages({
      "any.required": "El campo de precio WP en USD es obligatorio"
    }),
  precioPesos: Joi.number()
    .required()
    .messages({
      "any.required": "El campo de precio en pesos es obligatorio"
    }),
  iva: Joi.number()
    .required()
    .messages({
      "any.required": "El campo de IVA es obligatorio"
    }),
  categoria: Joi.string()
    .required()
    .messages({
      "any.required": "El campo de categoría es obligatorio"
    }),
  valorDolar: Joi.number()  // Agrega este campo
    .required()
    .messages({
      "any.required": "El campo de valorDolar es obligatorio"
    }),
});


export default productoSchema;
