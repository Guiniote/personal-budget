const express = require('express')
const {
  allTransactions,
  newTransaction,
  deleteTransaction,
  updateTransaction,
  homeInfo,
} = require('../controllers/indexController')

const router = express.Router()

// example of a route with index controller get function
router.get('/', homeInfo)
router.get('/transaction', allTransactions)
router.post('/transaction/new', newTransaction)
router.delete('/transaction/:id', deleteTransaction)
router.patch('/transaction/:id', updateTransaction)

module.exports = router
