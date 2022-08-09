import React, { useEffect, useState } from 'react'
// import Balance from './Balance'
import TransactionList from './TransactionList'
import Loader from './Loader'

function HomeContainer() {
  const [actualBalance, setActualBalance] = useState(null)
  const [lastTenTransactions, setLastTenTransactions] = useState(null)

  useEffect(() => {
    fetch(process.env.REACT_APP_API_DOMAIN)
      .then((response) => response.json())
      .then(
        (data) => {
          setActualBalance(data.body.actualBalance)
          setLastTenTransactions(data.body.lastTenTransactions)
        },
        (err) => {
          alert(`Error: ${err}`)
        }
      )
      .catch((err) => {
        alert(`Error no esperado: ${err}`)
      })
  }, [])

  console.log(lastTenTransactions)
  console.log(actualBalance)

  return (
    <>
      {/* <Balance balance={actualBalance} /> */}
      {lastTenTransactions ? (
        lastTenTransactions.length > 0 ? (
          <TransactionList transacionList={lastTenTransactions} />
        ) : (
          <h4>Lo siento, no hay transacciones aún</h4>
        )
      ) : (
        <Loader loading={true} />
      )}
    </>
  )
}

export default HomeContainer
