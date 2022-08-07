const { Op } = require('sequelize')
const { ErrorObject } = require('../helpers/error')
const { transactionFormat } = require('../helpers/transactionFormat')
const { Transactions } = require('../database/models')

// Find all the transactions in the database and format the info the way needed
exports.getAllTransactions = async () => {
  try {
    const allTransactions = []
    await Transactions.findAll({
      include: ['user', 'category', 'transactionType'],
    }).then((transactions) => {
      transactions.map((transaction) => {
        allTransactions.push(transactionFormat(transaction))
        return 0
      })
    })
    return allTransactions
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

// Create a transaction in the database
exports.createNewTransaction = async (newTransaction) => {
  try {
    await Transactions.create(newTransaction)
    return
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

// Delete a transaction in the database
exports.deleteOneTransaction = async (transactionId) => {
  try {
    await Transactions.destroy({
      where: { id: transactionId },
    })
    return
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

// Update a transaction in the database
exports.updateTransaction = async (transaction) => {
  try {
    await Transactions.update(
      {
        userId: transaction.userId,
        concept: transaction.concept,
        categoryId: transaction.categoryId,
        amount: transaction.amount,
        date: transaction.date,
      },
      {
        where: { id: transaction.id },
      },
    )
    return
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

// Get every income in the database
exports.getIncomes = async () => {
  try {
    return await Transactions.sum('amount', {
      where: { transactionTypeId: { [Op.eq]: 1 } },
    })
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

// Get every expense in the database
exports.getExpenses = async () => {
  try {
    return await Transactions.sum('amount', {
      where: { transactionTypeId: { [Op.eq]: 2 } },
    })
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

// Calculate the actual balance
exports.actualBalance = async () => {
  try {
    return (await this.getIncomes()) - (await this.getExpenses())
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

// Get last 10 transactions
exports.getLastTenTransactions = async () => {
  try {
    const lastTenTransactions = []
    await Transactions.findAll({
      include: ['user', 'category', 'transactionType'],
      limit: 10,
      order: [['createdAt', 'DESC']],
    }).then((transactions) => {
      transactions.map((transaction) => {
        lastTenTransactions.push(transactionFormat(transaction))
        return 0
      })
    })
    return lastTenTransactions
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

// Get home info requested, such as actual balance and last 10 transactions
exports.getHomeInfo = async () => {
  try {
    const homeInfo = {
      actualBalance: await this.actualBalance(),
      lastTenTransactions: await this.getLastTenTransactions(),
    }
    return homeInfo
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}
