import Cliente from '../models/cliente.js'; // Asegúrate de tener la ruta correcta al modelo de cliente

async function guardarCliente(req, res) {
    try {
        const nuevoCliente = req.body;

        // Validar los datos del cliente usando el esquema Joi
        const resultadoValidacion = clienteSchema.validate(nuevoCliente);

        if (resultadoValidacion.error) {
            return res.status(400).json({ error: resultadoValidacion.error.details });
        }

        // Crear una nueva instancia del modelo Cliente
        const cliente = new Cliente(nuevoCliente);

        // Guardar el cliente en la base de datos
        await cliente.save();

        return res.status(201).json({ mensaje: 'Cliente guardado con éxito' });
    } catch (error) {
        return res.status(500).json({ error: 'Ocurrió un error al guardar el cliente' });
    }
}

export default guardarCliente;
