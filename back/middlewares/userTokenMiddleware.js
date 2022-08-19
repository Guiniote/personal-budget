const jwt = require('jsonwebtoken')
const { ErrorObject } = require('../helpers/error')

exports.userTokenMiddleware = (req, res, next) => {
  try {
    const authorization = req.get('authorization')
    let token = ''

    if (authorization && authorization.toLowerCase().startsWith('bearer')) {
      token = authorization.substring(7)
    }

    const decodedToken = jwt.verify(token, process.env.SECRET)

    if (!token || !decodedToken.id) {
      throw new ErrorObject('token missing or invalid', 401)
    }

    // const { id: userId } = decodedToken
    console.log(decodedToken.id)
    req.userId = decodedToken.id
    // req.userId = userId
  } catch (error) {
    throw new ErrorObject('token missing or invalid', 401 || 500)
  }
  next()
}
