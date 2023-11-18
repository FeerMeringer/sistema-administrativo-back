import Joi from 'joi-oid';

const clienteSchema = Joi.object({
    nombre: Joi.string()
        .required()
        .messages({
            "any.required": "El campo de nombre es obligatorio"
        }),
    apellido: Joi.string()
        .required()
        .messages({
            "any.required": "El campo de apellido es obligatorio"
        }),
    correo: Joi.string()
        .email()
        .required()
        .messages({
            "string.email": "El correo electrónico debe ser válido",
            "any.required": "El campo de correo es obligatorio"
        }),
    telefono: Joi.string()
        .required()
        .messages({
            "any.required": "El campo de teléfono es obligatorio"
        }),
    direccion: Joi.string()
        .required()
        .messages({
            "any.required": "El campo de dirección es obligatorio"
        }),
        tipo: Joi.array()
        .items(Joi.string().valid('instalacion', 'venta', 'presupuesto'))
        .single()
        .required()
        .messages({
            "any.required": "Se debe seleccionar al menos un tipo",
            "array.base": "Al menos un tipo debe ser seleccionado"
        })
})

export default clienteSchema;

