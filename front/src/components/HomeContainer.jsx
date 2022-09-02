import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Balance from './Balance'
import TransactionList from './TransactionList'

function HomeContainer() {
  const [actualBalance, setActualBalance] = useState(null)
  const [lastTenTransactions, setLastTenTransactions] = useState(null)
  const [errorStatus, setErrorStatus] = useState(null)

  useEffect(() => {
    try {
      axios.get(process.env.REACT_APP_API_DOMAIN).then((response) => {
        setActualBalance(response.data.body.actualBalance)
        setLastTenTransactions(response.data.body.lastTenTransactions)
      })
    } catch (error) {
      setErrorStatus(error.response)
    }
  }, [])

  return (
    // Show actual balance and last 10 transactions in home
    <div className="bg-purple-50">
      <div className="flex flex-row w-full">
        <div className="pb-12 pt-2 flex-1 md:pt-5">
          <div className="flex bg-gray-100 rounded-lg shadow-2xl overflow-hidden mx-2 max-w-xs md:max-w-2xl md:mx-auto lg:max-w-4xl">
            <div className="w-full p-4 overflow-auto">
              <div className="flex h-48 justify-center items-center text-xl font-bold">
                {actualBalance && <Balance balance={actualBalance} />}
              </div>
              {lastTenTransactions && <TransactionList transactionList={lastTenTransactions} />}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center">
        {/* Show button to see all transactions and operate */}
        <Link
          className="bg-indigo-500 text-white text-center font-bold py-2 px-4 w-2/3 mb-10 rounded-lg hover:bg-indigo-400 md:w-1/2 md:my-10 lg:w-1/4 lg:mb-10"
          to="/transaction"
        >
          <button type="button">Ver todos los movimientos</button>
        </Link>
      </div>
      {/* Show possible errors */}
      {errorStatus && <span className="text-red-500 text-sm">Error: {errorStatus}</span>}
    </div>
  )
}

export default HomeContainer
