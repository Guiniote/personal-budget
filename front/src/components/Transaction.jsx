import React from 'react'

function Transaction({ transaction }) {
  return (
    <div>
      <p>Usuario: {transaction.userId}</p>
      <p>Concepto: {transaction.concept}</p>
      <p>Categoría: {transaction.categoryId}</p>
      <p>Importe: {transaction.amount}</p>
      <p>Fecha: {transaction.date}</p>
      <p>Tipo: {transaction.transactionTypeId}</p>
    </div>
  )
}

export default Transaction
