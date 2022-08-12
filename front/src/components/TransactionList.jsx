import React from 'react'
import TransactionRow from './TransactionRow'
import Loader from './Loader'

function TransactionList({ transactionList }) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Categoría</th>
            <th>Concepto</th>
            <th>Importe</th>
            <th>Fecha</th>
            <th>Usuario</th>
            <th>Tipo</th>
          </tr>
        </thead>
        {transactionList.map((transaction) => (
          <TransactionRow key={transaction.id} transaction={transaction} />
        ))}
      </table>
    </div>
  )
}

export default TransactionList
