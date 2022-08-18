import React from 'react'
import TransactionRow from './TransactionRow'
import Loader from './Loader'

function TransactionList({ transactionList, onDelete }) {
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
            <th></th>
          </tr>
        </thead>
        {transactionList.map((transaction) => (
          <TransactionRow
            key={transaction.id}
            transaction={transaction}
            onDelete={onDelete}
          />
        ))}
      </table>
    </div>
  )
}

export default TransactionList
