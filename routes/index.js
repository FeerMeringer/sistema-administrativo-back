import express from 'express';
import authRouter from './auth.js';
import clienteRouter from './cliente.js'
import productoRouter from './producto.js'
import VentaRouter from './venta.js'
import instalacionRouter from './instalacion.js'


const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});


router.use('/auth', authRouter);
router.use('/clientes', clienteRouter)
router.use('/productos', productoRouter)
router.use('/ventas', VentaRouter)
router.use('/instalacion', instalacionRouter)

export default router;




