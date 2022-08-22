const express = require('express')

const { submitNewUser, loginUser } = require('../controllers/userController')

const router = express.Router()

const { loginValidationSchema } = require('../helpers/loginValidationSchema')
const { registerValidationSchema } = require('../helpers/registerValidationSchema')
const { validationMiddleware } = require('../middlewares/validationMiddleware')

router.post('/register', validationMiddleware(registerValidationSchema), submitNewUser)
router.post('/login', validationMiddleware(loginValidationSchema), loginUser)

module.exports = router
