import React from 'react'

function Transaction({ transaction }) {
  return (
    <>
      <tbody>
        <tr key={transaction.id}>
          <td>{transaction.categoryId}</td>
          <td>{transaction.concept}</td>
          <td>{transaction.amount}</td>
          <td>{transaction.date}</td>
          <td>{transaction.userId}</td>
          <td>{transaction.transactionTypeId}</td>
        </tr>
      </tbody>
    </>
  )
}

export default Transaction
