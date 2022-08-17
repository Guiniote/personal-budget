const { Op } = require('sequelize')
const { ErrorObject } = require('../helpers/error')
const { transactionFormat } = require('../helpers/transactionFormat')
const { Transactions, Categories, TransactionTypes } = require('../database/models')

// Get all categories
exports.getAllCategories = async () => {
  try {
    const categories = []
    await Categories.findAll().then((categoriesData) => {
      categoriesData.map((category) => {
        categories.push({
          id: category.id,
          name: category.categoryName,
        })
        return 0
      })
    })
    return categories
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

// Get all types of transactions
exports.getAllTransactionTypes = async () => {
  try {
    const transactionTypes = []
    await TransactionTypes.findAll().then((transactionTypesData) => {
      transactionTypesData.map((transactionType) => {
        transactionTypes.push({
          id: transactionType.id,
          name: transactionType.transactionTypeName,
        })
        return 0
      })
    })
    return transactionTypes
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

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

// Structure for transactions page information
exports.getTransactions = async () => {
  try {
    const transactionsInfo = {
      categories: await this.getAllCategories(),
      transactionTypes: await this.getAllTransactionTypes(),
      allTransactions: await this.getAllTransactions(),
    }
    return transactionsInfo
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

// Get categories and transactions types for the new transaction's form
exports.getNewFormInfo = async () => {
  try {
    const newFormInfo = {
      categories: await this.getAllCategories(),
      transactionTypes: await this.getAllTransactionTypes(),
    }
    return newFormInfo
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
exports.getActualBalance = async () => {
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

// Structure home info requested, such as actual balance and last 10 transactions
exports.getHomeInfo = async () => {
  try {
    const homeInfo = {
      actualBalance: await this.getActualBalance(),
      lastTenTransactions: await this.getLastTenTransactions(),
    }
    return homeInfo
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}
