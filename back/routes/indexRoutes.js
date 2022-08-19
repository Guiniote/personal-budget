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

// example of a route with index controller get function
router.get('/', homeInfo)
router.get('/transaction', allTransactions)
router.get('/transaction/new', newTransaction)
router.post('/transaction/new', userTokenMiddleware, submitNewTransaction)
router.delete('/transaction/:id', userTokenMiddleware, deleteTransaction)
router.get('/transaction/:id', getTransaction)
router.patch('/transaction/:id', userTokenMiddleware, updateTransaction)
router.get('/users', allUsers) // Quitar luego
router.get('/user', oneUser) // Quitar luego
router.post('/user/new', submitNewUser)
router.post('/user/login', loginUser)

module.exports = router
