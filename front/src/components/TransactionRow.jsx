import React from 'react'

function Transaction({ transaction }) {
  return (
    <>
      <tbody>
        <tr key={transaction.id}>
          <td>{transaction.category}</td>
          <td>{transaction.concept}</td>
          <td>{transaction.amount}</td>
          <td>{transaction.date}</td>
          <td>{transaction.user}</td>
          <td>{transaction.transactionType}</td>
        </tr>
      </tbody>
    </>
  )
}

export default Transaction
