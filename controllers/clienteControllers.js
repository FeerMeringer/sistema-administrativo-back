import Cliente from '../models/cliente.js';


const clienteControllers = {

    create: async (req, res, next) => {
        console.log('Entró en la función create');
        const { user } = req;
        const { nombre, ...clienteData } = req.body;
    
        try {
            // Verificar si el nombre de cliente ya existe en la base de datos
            const existingCliente = await Cliente.findOne({ nombre });
    
            if (existingCliente) {
                return res.status(400).json({
                    success: false,
                    message: 'El nombre de cliente ya está en uso.',
                });
            }
    
            // Crear el cliente con el nombre proporcionado
            let cliente = await Cliente.create({ nombre, ...clienteData });
    
            return res.status(201).json({
                success: true,
                message: 'Cliente creado exitosamente',
                cliente,
            });
        } catch (error) {
            console.error('Error al crear el cliente:', error);
            next(error);
        }
    },
    
getAll: async (req, res, next) => {
    console.log('Entró en la función getAll');

    const { clienteData } = req.body;

    try {
        // Obtener todos los clientes del usuario actual ordenados por nombre
        let clientes = await Cliente.find({clienteData}).sort({ nombre: 1 });
        console.log(clientes)

        return res.status(200).json({
            success: true,
            clientes,
        });
    } catch (error) {
        console.error('Error al obtener clientes:', error);
        next(error);
    }
},

getOne: async (req, res, next) => {
    try {
        let cliente = await Cliente.findById(req.params.id);
        if (cliente) {
            return res
                .status(200)
                .json({
                    cliente
                });
        }
    } catch (error) {
        next(error);
    }
},

update: async (req, res, next) => {
    console.log('Entró en la función update');
    try {
        let cliente = await Cliente.findByIdAndUpdate(
            req.params.id,
            req.body
        );
        if (cliente) {
            return res
                .status(200)
                .json({
                    message: 'Cliente Successfully Updated'
                });
        }
    } catch (error) {
        next(error);
    }
},

destroyOne: async (req, res, next) => {
    try {
        let cliente = await Cliente.findByIdAndDelete(req.params.id);
        if (cliente) {
            return res
                .status(200)
                .json({
                    message: 'Cliente Successfully Deleted'
                });
        }
    } catch (error) {
        next(error);
    }
}

}

export default clienteControllers;



