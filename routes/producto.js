import express from 'express';
import validator from '../middlewares/validator.js';
import schemaProducto from '../schemas/producto.js';
import productoControllers from '../controllers/productoControllers.js'


const router = express.Router();
const { create, getAll, getOne, update, destroyOne } = productoControllers;

router.post('/', validator(schemaProducto), create);
router.get('/', getAll);
router.get('/:id', getOne);
router.put('/:id', validator(schemaProducto), update);
router.delete('/:id', destroyOne);

export default router;