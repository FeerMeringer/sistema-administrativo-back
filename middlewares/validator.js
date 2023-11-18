const validator = (schema) => [
    (req, res, next) => {
        
        const validation = schema.validate(req.body, {abortEarly:true})
        //console.log(validation.error)
        console.log(validation.error?.details) //acá es donde están todos los errores de validacion
        if (validation.error) {
            console.log(req.body) 
            return res.status(400).json({
                success: false,
                message: validation.error.details.map((error)=>error.message)
            })
        }
        return next()
    }
]

export default validator;



