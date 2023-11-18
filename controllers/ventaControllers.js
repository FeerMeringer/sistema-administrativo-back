import Venta from '../models/ventas.js';

const ventaControllers = {
    create: async (req, res, next) => {
        try {
            const { producto, monto } = req.body;

            // Verificar si ya existe una venta con el mismo producto
            const existingVenta = await Venta.findOne({ producto });

            if (existingVenta) {
                // Si ya existe, actualiza el monto en lugar de crear uno nuevo
                existingVenta.monto += monto;
                await existingVenta.save();

                return res.status(200).json({
                    success: true,
                    message: 'Venta actualizada exitosamente',
                    venta: existingVenta,
                });
            }

            // Si no existe, crea una nueva venta
            const nuevaVenta = await Venta.create({ producto, monto });

            return res.status(201).json({
                success: true,
                message: 'Venta creada exitosamente',
                venta: nuevaVenta,
            });
        } catch (error) {
            console.error('Error al crear la venta:', error);
            next(error);
        }
    },

    getAll: async (req, res, next) => {
        try {
            const ventas = await Venta.find();
            return res.status(200).json({
                success: true,
                ventas,
            });
        } catch (error) {
            console.error('Error al obtener las ventas:', error);
            next(error);
        }
    },

    getOne: async (req, res, next) => {
        try {
            const venta = await Venta.findById(req.params.id);
            if (venta) {
                return res.status(200).json({
                    success: true,
                    venta,
                });
            } else {
                return res.status(404).json({
                    success: false,
                    message: 'Venta no encontrada',
                });
            }
        } catch (error) {
            console.error('Error al obtener la venta:', error);
            next(error);
        }
    },

    update: async (req, res, next) => {
        try {
            const venta = await Venta.findByIdAndUpdate(req.params.id, req.body, {
                new: true,
            });

            if (venta) {
                return res.status(200).json({
                    success: true,
                    message: 'Venta actualizada exitosamente',
                    venta,
                });
            } else {
                return res.status(404).json({
                    success: false,
                    message: 'Venta no encontrada',
                });
            }
        } catch (error) {
            console.error('Error al actualizar la venta:', error);
            next(error);
        }
    },

    destroyOne: async (req, res, next) => {
        try {
            const venta = await Venta.findByIdAndDelete(req.params.id);
            if (venta) {
                return res.status(200).json({
                    success: true,
                    message: 'Venta eliminada exitosamente',
                });
            } else {
                return res.status(404).json({
                    success: false,
                    message: 'Venta no encontrada',
                });
            }
        } catch (error) {
            console.error('Error al eliminar la venta:', error);
            next(error);
        }
    },
};

export default ventaControllers;
