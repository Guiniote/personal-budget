import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Balance from './Balance'
import TransactionList from './TransactionList'
// import Loader from './Loader'

function HomeContainer() {
  const [actualBalance, setActualBalance] = useState(null)
  const [lastTenTransactions, setLastTenTransactions] = useState(null)

  useEffect(() => {
    try {
      axios.get(process.env.REACT_APP_API_DOMAIN).then((response) => {
        setActualBalance(response.data.body.actualBalance)
        setLastTenTransactions(response.data.body.lastTenTransactions)
      })
    } catch (err) {
      console.error(`Error: ${err}`)
    }
  }, [])

  return (
    <div>
      {actualBalance ? <Balance balance={actualBalance} /> : <h4>0</h4>}
      {lastTenTransactions ? (
        <TransactionList transactionList={lastTenTransactions} />
      ) : (
        <h4>0</h4>
      )}
      <Link to={`/transaction`}>
        <button>Ver todos los movimientos</button>
      </Link>
    </div>
  )
}

export default HomeContainer
