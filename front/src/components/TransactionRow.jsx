import React from 'react'
import { Link } from 'react-router-dom'

function Transaction({ transaction, onDelete }) {
  const rawDate = new Date(transaction.date)
  const realDate =
    rawDate.getUTCDate() +
    '-' +
    (rawDate.getUTCMonth() + 1) +
    '-' +
    rawDate.getUTCFullYear()

  return (
    <>
      <tbody>
        <tr key={transaction.id}>
          <td>{transaction.category}</td>
          <td>{transaction.concept}</td>
          <td>{transaction.amount}</td>
          <td>{realDate}</td>
          <td>{transaction.user}</td>
          <td>{transaction.transactionType}</td>
          <td>
            <button onClick={() => onDelete(transaction.id)}>Borrar</button>
            <Link to={`/transaction/${transaction.id}`}>
              <button>Editar</button>
            </Link>
          </td>
        </tr>
      </tbody>
    </>
  )
}

export default Transaction
