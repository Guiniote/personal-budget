const createHttpError = require('http-errors')
const {
  getAllTransactions,
  maxId,
  createNewTransaction,
  deleteOneTransaction,
} = require('../services/indexServices')
const { endpointResponse } = require('../helpers/success')
const { catchAsync } = require('../helpers/catchAsync')

// example of a controller. First call the service, then build the controller method
module.exports = {
  allTransactions: catchAsync(async (req, res, next) => {
    try {
      const response = await getAllTransactions()
      endpointResponse({
        res,
        message: 'All transactions retrieved successfully',
        body: response,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error retrieving index] - [index - GET]: ${error.message}`,
      )
      next(httpError)
    }
  }),

  newTransaction: catchAsync(async (req, res, next) => {
    try {
      const itemCreated = await createNewTransaction({
        id: (await maxId()) + 1,
        user: req.body.user,
        concept: req.body.concept,
        category: req.body.category,
        amount: req.body.amount,
        date: req.body.date,
        type: req.body.type,
      })
      endpointResponse({
        res,
        code: 201,
        message: 'Transaction created successfully',
        body: itemCreated,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error retrieving index] - [index - GET]: ${error.message}`,
      )
      next(httpError)
    }
  }),

  deleteTransaction: catchAsync(async (req, res, next) => {
    try {
      const id = Number(req.params.id)
      const itemDeleted = await deleteOneTransaction(id)
      endpointResponse({
        res,
        code: 204,
        message: 'Transaction deleted successfully',
        body: itemDeleted,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error retrieving index] - [index - GET]: ${error.message}`,
      )
      next(httpError)
    }
  }),
}
