import Joi from "joi-oid";

const userSchema = Joi.object({
    username: Joi.string()
        .required()
        .min(5)
        .max(20)
        .messages({
            "string.min": "El nombre de usuario debe tener al menos 5 caracteres",
            "string.max": "El nombre de usuario debe tener como máximo 20 caracteres",
            "any.required": "El campo de nombre de usuario es obligatorio"
        }),
    password: Joi.string()
        .required()
        .messages({
            "any.required": "El campo de contraseña es obligatorio"
        })
});

export default userSchema;