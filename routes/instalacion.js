import express from 'express';
import validator from '../middlewares/validator.js';
import schemaInstalacion from '../schemas/instalacion.js';
import instalacionControllers from '../controllers/instalacionControllers.js';

const { create, getAll, getOne, update, destroyOne } = instalacionControllers;

const router = express.Router();

router.post('/', validator(schemaInstalacion), create);
router.get('/', getAll);
router.get('/:id', getOne);
router.put('/:id', validator(schemaInstalacion), update);
router.delete('/:id', destroyOne); 

export default router;