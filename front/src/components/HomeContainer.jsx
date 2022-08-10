import React, { useEffect, useState } from 'react'
import axios from 'axios'
// import Balance from './Balance'
import TransactionList from './TransactionList'
import Loader from './Loader'

function HomeContainer() {
  // const [actualBalance, setActualBalance] = useState(null)
  // const [lastTenTransactions, setLastTenTransactions] = useState(null)
  const [answer, setAnswer] = useState(null)

  useEffect(() => {
    try {
      axios
        .get(process.env.REACT_APP_API_DOMAIN)
        .then((response) => setAnswer(response.data))
    } catch (err) {
      console.error(`Error: ${err}`)
    }
  }, [])

  console.log(answer)

  return (
    <>
      {/* <Balance balance={actualBalance} /> */}
      {/* {lastTenTransactions ? (
        lastTenTransactions.length > 0 ? (
          <TransactionList transacionList={lastTenTransactions} />
        ) : (
          <h4>Lo siento, no hay transacciones aún</h4>
        )
      ) : (
        <Loader loading={true} />
      )} */}
      <p>asdasd</p>
    </>
  )
}

export default HomeContainer
