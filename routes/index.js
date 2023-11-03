import express from 'express';
import userRouter from '../controllers/auth.js'

const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

router.use('/auth',userRouter)


export default router;

