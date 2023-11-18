import Instalacion from '../models/instalacion.js';

const instalacionControllers = {
  create: async (req, res, next) => {
    console.log('Entró en la función create');
    const instalacionData = req.body;

    try {
      // Crear la instalación con los datos proporcionados
      let instalacion = await Instalacion.create(instalacionData);

      return res.status(201).json({
        success: true,
        message: 'Instalación creada exitosamente',
        instalacion,
      });
    } catch (error) {
      console.error('Error al crear la instalación:', error);
      next(error);
    }
  },

  getAll: async (req, res, next) => {
    console.log('Entró en la función getAll');

    try {
      // Obtener todas las instalaciones del usuario actual ordenadas por fecha de inicio
      let instalaciones = await Instalacion.find().sort({ fechaInicio: 1 });
      console.log(instalaciones);

      return res.status(200).json({
        success: true,
        instalaciones,
      });
    } catch (error) {
      console.error('Error al obtener instalaciones:', error);
      next(error);
    }
  },

  getOne: async (req, res, next) => {
    try {
      let instalacion = await Instalacion.findById(req.params.id);
      if (instalacion) {
        return res.status(200).json({
          instalacion,
        });
      }
    } catch (error) {
      next(error);
    }
  },

  update: async (req, res, next) => {
    console.log('Entró en la función update');
    try {
      let instalacion = await Instalacion.findByIdAndUpdate(
        req.params.id,
        req.body
      );
      if (instalacion) {
        return res.status(200).json({
          message: 'Instalación actualizada exitosamente',
        });
      }
    } catch (error) {
      next(error);
    }
  },

  destroyOne: async (req, res, next) => {
    try {
      let instalacion = await Instalacion.findByIdAndDelete(req.params.id);
      if (instalacion) {
        return res.status(200).json({
          message: 'Instalación eliminada exitosamente',
        });
      }
    } catch (error) {
      next(error);
    }
  },
};

export default instalacionControllers;
