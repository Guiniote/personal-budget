import React from 'react'
import TransactionRow from './TransactionRow'

function TransactionList({ transactionList, onDelete }) {
  return (
    // Table headers to show transactions
    <div>
      <table className="w-full border-collapse table-auto">
        <thead>
          <tr>
            <th className="border-solid border-y-[1px] border-gray-300 px-2 py-3 text-left bg-indigo-300 text-white">
              Categoría
            </th>
            <th className="border-solid border-y-[1px] border-gray-300 px-2 py-3 text-left bg-indigo-300 text-white">
              Concepto
            </th>
            <th className="border-solid border-y-[1px] border-gray-300 px-2 py-3 text-left bg-indigo-300 text-white">
              Importe
            </th>
            <th className="border-solid border-y-[1px] border-gray-300 px-2 py-3 text-left bg-indigo-300 text-white">
              Fecha
            </th>
            <th className="border-solid border-y-[1px] border-gray-300 px-2 py-3 text-left bg-indigo-300 text-white">
              Usuario
            </th>
            <th className="border-solid border-y-[1px] border-gray-300 px-2 py-3 text-left bg-indigo-300 text-white">
              Tipo
            </th>
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
