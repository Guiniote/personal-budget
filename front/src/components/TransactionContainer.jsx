import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import TransactionList from './TransactionList'
import Filter from './Filter'

function TransactionContainer() {
  const [transactions, setTransactions] = useState(null)
  const [categories, setCategories] = useState(null)
  const [transactionTypes, setTransactionTypes] = useState(null)

  useEffect(() => {
    try {
      axios
        .get(`${process.env.REACT_APP_API_DOMAIN}/transaction`)
        .then((response) => {
          setTransactions(response.data.body.allTransactions)
          setCategories(response.data.body.categories)
          setTransactionTypes(response.data.body.transactionTypes)
        })
    } catch (err) {
      console.error(`Error: ${err}`)
    }
  }, [])

  return (
    <div>
      <div className="Filters">
        <Filter
          name="transactionType"
          title="Tipo de Transaccion"
          options={transactionTypes}
        />
        <Filter name="category" title="Categoría" options={categories} />
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
