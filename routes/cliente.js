import express from 'express';
import validator from '../middlewares/validator.js';
import schemaCliente from '../schemas/cliente.js';
import clienteControllers from '../controllers/clienteControllers.js';


const { create, getAll, getOne, update, destroyOne } = clienteControllers;

const router = express.Router();

// Rutas de clientes utilizando clienteControllers
router.post('/', validator(schemaCliente), create);
router.get('/', getAll);
router.get('/:id', getOne);
router.put('/:id', validator(schemaCliente), update);
router.delete('/:id', destroyOne); 

export default router;