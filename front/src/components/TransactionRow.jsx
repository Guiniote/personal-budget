import React from 'react'
import { Link } from 'react-router-dom'
import { FaTrash, FaPencilAlt } from 'react-icons/fa'

function Transaction({ transaction, onDelete }) {
  const rawDate = new Date(transaction.date)
  const realDate =
    rawDate.getUTCDate() +
    '-' +
    (rawDate.getUTCMonth() + 1) +
    '-' +
    rawDate.getUTCFullYear()

  return (
    // Table rows to show transactions
    <>
      <tbody>
        <tr key={transaction.id}>
          <td className="border-solid border-y-[1px] border-gray-300 p-2">
            {transaction.category}
          </td>
          <td className="border-solid border-y-[1px] border-gray-300 p-2">
            {transaction.concept}
          </td>
          <td className="border-solid border-y-[1px] border-gray-300 p-2">
            {transaction.amount}
          </td>
          <td className="border-solid border-y-[1px] border-gray-300 p-2">
            {realDate}
          </td>
          <td className="border-solid border-y-[1px] border-gray-300 p-2">
            {transaction.user}
          </td>
          <td className="border-solid border-y-[1px] border-gray-300 p-2">
            {transaction.transactionType}
          </td>
          {/* Show delete and edit transaction button */}
          {onDelete && (
            <td>
              <button onClick={() => onDelete(transaction.id)} className="mx-1">
                <FaTrash className="text-indigo-500" title={'Borrar'} />
              </button>
              <Link to={`/transaction/${transaction.id}`}>
                <button className="mx-1">
                  <FaPencilAlt className="text-indigo-500" title={'Editar'} />
                </button>
              </Link>
            </td>
          )}
        </tr>
      </tbody>
    </>
  )
}

export default Transaction
