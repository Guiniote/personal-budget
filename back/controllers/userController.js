const createHttpError = require('http-errors')
const {
  getAllUsers, getOneUser, createNewUser, getLoginUser,
} = require('../services/userServices')
const { endpointResponse } = require('../helpers/success')
const { catchAsync } = require('../helpers/catchAsync')

module.exports = {
  // Find all users in database
  allUsers: catchAsync(async (req, res, next) => {
    try {
      console.log(4)
      const response = await getAllUsers()
      endpointResponse({
        res,
        message: 'All users retrieved successfully',
        body: response,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error retrieving users] - [index - GET]: ${error.message}`,
      )
      next(httpError)
    }
  }),

  // Find one user in database
  oneUser: catchAsync(async (req, res, next) => {
    try {
      const response = await getOneUser(req.body.userEmail)
      endpointResponse({
        res,
        message: 'User retrieved successfully',
        body: response,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error retrieving user] - [index - GET]: ${error.message}`,
      )
      next(httpError)
    }
  }),

  // Create user
  submitNewUser: catchAsync(async (req, res, next) => {
    try {
      await createNewUser({
        ...req.body,
      })
      endpointResponse({
        res,
        code: 201,
        message: 'User created successfully',
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error creating user] - [index - POST]: ${error.message}`,
      )
      next(httpError)
    }
  }),

  // Login user
  loginUser: catchAsync(async (req, res, next) => {
    try {
      const response = await getLoginUser(req.body.eMail, req.body.password)
      endpointResponse({
        res,
        message: 'User retrieved successfully',
        body: response,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error retrieving user] - [index - GET]: ${error.message}`,
      )
      next(httpError)
    }
  }),
}
