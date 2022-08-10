import React from 'react'
import Transaction from './Transaction'
import Loader from './Loader'

function TransactionList({ transactionList }) {
  return (
    <div>
      {transactionList ? (
        transactionList.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))
      ) : (
        <Loader loading />
      )}
    </div>
  )
}

export default TransactionList
