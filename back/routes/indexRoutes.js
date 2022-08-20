const express = require('express')
const {
  allTransactions,
  submitNewTransaction,
  deleteTransaction,
  updateTransaction,
  homeInfo,
  newTransaction,
  getTransaction,
} = require('../controllers/indexController')

const {
  allUsers, oneUser, submitNewUser, loginUser,
} = require('../controllers/userController')

const router = express.Router()
const { userTokenMiddleware } = require('../middlewares/userTokenMiddleware')
const { transactionValidationSchema } = require('../helpers/transactionValidationSchema')
const { loginValidationSchema } = require('../helpers/loginValidationSchema')
const { registerValidationSchema } = require('../helpers/registerValidationSchema')
const { validationMiddleware } = require('../middlewares/validationMiddleware')

// example of a route with index controller get function
router.get('/', homeInfo)
router.get('/transaction', allTransactions)
router.get('/transaction/new', newTransaction)
router.post(
  '/transaction/new',
  userTokenMiddleware,
  validationMiddleware(transactionValidationSchema),
  submitNewTransaction,
)
router.delete('/transaction/:id', userTokenMiddleware, deleteTransaction)
router.get('/transaction/:id', getTransaction)
router.patch(
  '/transaction/:id',
  userTokenMiddleware,
  validationMiddleware(transactionValidationSchema),
  updateTransaction,
)
router.get('/users', allUsers) // Quitar luego
router.get('/user', oneUser) // Quitar luego
router.post('/user/new', validationMiddleware(registerValidationSchema), submitNewUser)
router.post('/user/login', validationMiddleware(loginValidationSchema), loginUser)

module.exports = router
