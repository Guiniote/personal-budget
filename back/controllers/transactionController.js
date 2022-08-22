const createHttpError = require('http-errors')
const {
  getTransactions,
  createNewTransaction,
  deleteOneTransaction,
  updateTransaction,
  getHomeInfo,
  getNewFormInfo,
  getOneTransaction,
} = require('../services/transactionServices')
const { endpointResponse } = require('../helpers/success')
const { catchAsync } = require('../helpers/catchAsync')

module.exports = {
  // Find all transactions in the database
  allTransactions: catchAsync(async (req, res, next) => {
    try {
      const response = await getTransactions()
      endpointResponse({
        res,
        message: 'All transactions retrieved successfully',
        body: response,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error retrieving transactions] - [index - GET]: ${error.message}`,
      )
      next(httpError)
    }
  }),

  // Get a particular transaction
  getTransaction: catchAsync(async (req, res, next) => {
    try {
      const response = await getOneTransaction(req.params.id)
      endpointResponse({
        res,
        message: 'Transaction retrieved successfully',
        body: response,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error retrieving transaction] - [index - GET]: ${error.message}`,
      )
      next(httpError)
    }
  }),

  // Send categories and transaction types to the new transaction's form
  newTransaction: catchAsync(async (req, res, next) => {
    try {
      const response = await getNewFormInfo()
      endpointResponse({
        res,
        message: 'Info retrieved successfully',
        body: response,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error retrieving info] - [index - GET]: ${error.message}`,
      )
      next(httpError)
    }
  }),

  // Create a transaction
  submitNewTransaction: catchAsync(async (req, res, next) => {
    try {
      await createNewTransaction({
        ...req.body,
      })
      endpointResponse({
        res,
        code: 201,
        message: 'Transaction created successfully',
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error creating transaction] - [index - POST]: ${error.message}`,
      )
      next(httpError)
    }
  }),

  // Delete a transaction
  deleteTransaction: catchAsync(async (req, res, next) => {
    try {
      await deleteOneTransaction(Number(req.params.id))
      endpointResponse({
        res,
        code: 204,
        message: 'Transaction deleted successfully',
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error deleting transaction] - [index - DEL]: ${error.message}`,
      )
      next(httpError)
    }
  }),

  // Update a transaction
  updateTransaction: catchAsync(async (req, res, next) => {
    try {
      await updateTransaction({
        id: req.params.id,
        ...req.body,
      })
      endpointResponse({
        res,
        message: 'Transaction updated successfully',
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error updating transaction] - [index - PATCH]: ${error.message}`,
      )
      next(httpError)
    }
  }),

  // Show home requested info
  homeInfo: catchAsync(async (req, res, next) => {
    try {
      const response = await getHomeInfo()
      endpointResponse({
        res,
        message: 'All info retrieved successfully',
        body: response,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error retrieving info] - [index - GET]: ${error.message}`,
      )
      next(httpError)
    }
  }),
}
