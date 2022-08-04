const { ErrorObject } = require('../helpers/error')

let movements = [
  {
    id: 1,
    user: 'German',
    concept: 'Sueldo',
    category: 'Ingresos fijos',
    amount: 2000,
    date: '01/08/2022',
    type: 'Ingreso',
  },
  {
    id: 2,
    user: 'German',
    concept: 'Galletitas',
    category: 'Alimentos y Bebidas',
    amount: 150,
    date: '02/08/2022',
    type: 'Egreso',
  },
  {
    id: 3,
    user: 'German',
    concept: 'Coca Cola',
    category: 'Alimentos y Bebidas',
    amount: 180,
    date: '02/08/2022',
    type: 'Egreso',
  },
  {
    id: 4,
    user: 'German',
    concept: 'Subte',
    category: 'Transporte',
    amount: 40,
    date: '02/08/2022',
    type: 'Egreso',
  },
]

// example of a service
exports.getAllTransactions = async () => {
  try {
    const getIndex = await movements
    return getIndex
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

exports.maxId = () => {
  try {
    const ids = movements.map((movement) => movement.id)
    const maxId = Math.max(...ids)
    return maxId
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

exports.createNewTransaction = async (newMovement) => {
  try {
    movements = [...movements, newMovement]
    return movements
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

exports.deleteOneTransaction = async (id) => {
  try {
    movements = movements.filter((movement) => movement.id !== id)
    return movements
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}
