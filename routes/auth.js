import express from 'express'
import validator from '../middlewares/validator.js'
import schema from '../schemas/users.js'
import controller from '../controllers/auth.js'


const { sign_in} = controller

let router = express.Router();


router.post('/signin', validator(schema), sign_in )


// module.exports = router;
export default router