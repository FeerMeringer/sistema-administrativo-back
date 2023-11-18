import Producto from '../models/producto.js';

const productoControllers = {
    create: async (req, res, next) => {
        console.log('Entró en la función create');
        const { nombre, ...productoData } = req.body;

        try {
            // Verificar si el nombre del producto ya existe en la base de datos
            const existingProducto = await Producto.findOne({ nombre });

            if (existingProducto) {
                return res.status(400).json({
                    success: false,
                    message: 'El nombre del producto ya está en uso.',
                });
            }

            // Crear el producto con el nombre proporcionado
            let producto = await Producto.create({ nombre, ...productoData });

            return res.status(201).json({
                success: true,
                message: 'Producto creado exitosamente',
                producto,
            });
        } catch (error) {
            console.error('Error al crear el producto:', error);
            next(error);
        }
    },

    getAll: async (req, res, next) => {
        console.log('Entró en la función getAll');

        try {
            // Obtener todos los productos
            let productos = await Producto.find().sort({ nombre: 1 });
            console.log(productos);

            return res.status(200).json({
                success: true,
                productos,
            });
        } catch (error) {
            console.error('Error al obtener productos:', error);
            next(error);
        }
    },

    getOne: async (req, res, next) => {
        try {
            let producto = await Producto.findById(req.params.id);
            if (producto) {
                return res.status(200).json({
                    producto,
                });
            }
        } catch (error) {
            next(error);
        }
    },

    update: async (req, res, next) => {
        console.log('Entró en la función update');
        try {
            let producto = await Producto.findByIdAndUpdate(req.params.id, req.body);
            if (producto) {
                return res.status(200).json({
                    message: 'Producto actualizado exitosamente',
                });
            }
        } catch (error) {
            next(error);
        }
    },

    destroyOne: async (req, res, next) => {
        try {
            let producto = await Producto.findByIdAndDelete(req.params.id);
            if (producto) {
                return res.status(200).json({
                    message: 'Producto eliminado exitosamente',
                });
            }
        } catch (error) {
            next(error);
        }
    },
};

export default productoControllers;
