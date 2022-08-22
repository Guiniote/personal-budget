const express = require('express')
const {
  allTransactions,
  submitNewTransaction,
  deleteTransaction,
  updateTransaction,
  homeInfo,
  newTransaction,
  getTransaction,
} = require('../controllers/transactionController')

// const { submitNewUser, loginUser } = require('../controllers/userController')

const router = express.Router()
const { userTokenMiddleware } = require('../middlewares/userTokenMiddleware')
const {
  transactionPostValidationSchema,
  transactionPatchValidationSchema,
} = require('../helpers/transactionValidationSchema')
// const { loginValidationSchema } = require('../helpers/loginValidationSchema')
// const { registerValidationSchema } = require('../helpers/registerValidationSchema')
const { validationMiddleware } = require('../middlewares/validationMiddleware')

router.get('/', homeInfo)
router.get('/transaction', allTransactions)
router.get('/transaction/new', newTransaction)
router.post(
  '/transaction/new',
  userTokenMiddleware,
  validationMiddleware(transactionPostValidationSchema),
  submitNewTransaction,
)
router.delete('/transaction/:id', userTokenMiddleware, deleteTransaction)
router.get('/transaction/:id', getTransaction)
router.patch(
  '/transaction/:id',
  userTokenMiddleware,
  validationMiddleware(transactionPatchValidationSchema),
  updateTransaction,
)
// router.post('/user/new', validationMiddleware(registerValidationSchema), submitNewUser)
// router.post('/user/login', validationMiddleware(loginValidationSchema), loginUser)

module.exports = router
