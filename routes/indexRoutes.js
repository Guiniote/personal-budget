const express = require('express')
const {
  allTransactions,
  newTransaction,
  deleteTransaction,
} = require('../controllers/indexController')

const router = express.Router()

// example of a route with index controller get function
router.get('/', allTransactions)
router.post('/new', newTransaction)
router.delete('/movement/:id', deleteTransaction)

module.exports = router
