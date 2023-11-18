import express from 'express';
import schemaVenta from '../schemas/ventas.js';
import validator from '../middlewares/validator.js';
import ventaControllers from '../controllers/ventaControllers.js'


const router = express.Router();
const { create, getAll, getOne, update, destroyOne } = ventaControllers;


router.post('/', validator(schemaVenta), create);
router.get('/', getAll);
router.get('/:id', getOne);
router.put('/:id', validator(schemaVenta), update);
router.delete('/:id', destroyOne);

export default router;

