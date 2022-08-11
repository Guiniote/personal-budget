import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import TransactionList from './TransactionList'

function TransactionContainer() {
  const [transactions, setTransactions] = useState(null)

  useEffect(() => {
    try {
      axios
        .get(`${process.env.REACT_APP_API_DOMAIN}/transaction`)
        .then((response) => setTransactions(response.data.body))
    } catch (err) {
      console.error(`Error: ${err}`)
    }
  }, [])

  console.log(transactions)

  return (
    <div>
      <div className="Filters">
        <select name="typeFilter">
          <option value=""></option>
          <option value="1">Ingresos</option>
          <option value="2">Egresos</option>
        </select>
        <select name="categoryFilter">
          <option value=""></option>
          <option value="1">Ingresos</option>
          <option value="2">Egresos</option>
        </select>
        <button onClick={'asd'}>Aplicar</button>
      </div>
      <div className="transactionsTable">
        {transactions ? (
          <TransactionList transactionList={transactions} />
        ) : (
          <h4>0</h4>
        )}
      </div>
      <div className="actions">
        <Link to={`/transaction/new`}>
          <button>Crear nuevo movimiento</button>
        </Link>
      </div>
    </div>
  )
}

export default TransactionContainer
