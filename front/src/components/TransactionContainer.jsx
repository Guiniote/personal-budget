import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import Cookies from 'universal-cookie'
import TransactionList from './TransactionList'
import Filter from './Filter'

function TransactionContainer() {
  const [transactions, setTransactions] = useState(null)
  const [transactionsStored, setTransactionsStored] = useState(null)
  const [categories, setCategories] = useState(null)
  const [transactionTypes, setTransactionTypes] = useState(null)
  const cookies = new Cookies()
  const { token } = cookies.get('TokenCookie')
  const navigate = useNavigate()

  useEffect(() => {
    try {
      axios
        .get(`${process.env.REACT_APP_API_DOMAIN}/transaction`)
        .then((response) => {
          setTransactionsStored(response.data.body.allTransactions)
          setCategories(response.data.body.categories)
          setTransactionTypes(response.data.body.transactionTypes)
        })
    } catch (err) {
      console.error(`Error: ${err}`)
    }
  }, [])

  const filter = (filterName, filterOption) => {
    let transactionsFiltered = []
    if (filterOption !== '') {
      transactionsFiltered = transactionsStored.filter(
        (transaction) => transaction[filterName] === filterOption,
      )
      setTransactions(transactionsFiltered)
    } else {
      setTransactions(transactionsStored)
    }
  }

  const deleteTransaction = (transactionId) => {
    try {
      confirm('Está seguro de que quiere borrar la transaccion?') &&
        axios
          .delete(
            `${process.env.REACT_APP_API_DOMAIN}/transaction/${transactionId}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            },
          )
          .then(() => navigate('/'))
    } catch (err) {
      console.error(`Error: ${err}`)
    }
  }

  return (
    <div className="bg-purple-50">
      <div>
        <ul className="flex flex-row h-20" type="none">
          <div className="flex-auto my-auto font-semibold lg:shrink">
            <p className="text-right md:mr-4 text-sm">Ver:</p>
          </div>
          <li
            onClick={() => filter('transactionType', '')}
            className="flex-none my-auto mx-4 underline text-sm md:mx-7 cursor-pointer"
          >
            Todos
          </li>
          {transactionTypes &&
            transactionTypes.map((transactionType, index) => (
              <li
                key={index}
                onClick={() => filter('transactionType', transactionType.name)}
                className="flex-none my-auto mx-4 underline text-sm md:mx-7 cursor-pointer"
              >
                {transactionType.name}
              </li>
            ))}
          <div className="flex-auto lg:w-1/5"></div>
        </ul>
      </div>
      <div className="Filters">
        <Filter
          name="category"
          title="Categoría"
          options={categories}
          onFilter={filter}
        />
      </div>
      <div className="flex flex-row w-full">
        <div className="pb-12 pt-2 flex-1 md:pt-5">
          <div className="flex bg-gray-100 rounded-lg shadow-2xl overflow-hidden mx-2 max-w-xs md:max-w-2xl md:mx-auto lg:max-w-4xl">
            <div className="w-full p-4 overflow-auto">
              {transactions ? (
                <TransactionList
                  transactionList={transactions}
                  onDelete={deleteTransaction}
                />
              ) : transactionsStored ? (
                <TransactionList
                  transactionList={transactionsStored}
                  onDelete={deleteTransaction}
                />
              ) : (
                ''
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-center">
        <Link
          className="bg-indigo-500 text-white text-center font-bold py-2 px-4 w-2/3 mb-10 rounded-lg hover:bg-indigo-400 md:w-1/2 md:my-10 lg:w-1/4 lg:mb-10"
          to={`/transaction/new`}
        >
          <button>Crear nuevo movimiento</button>
        </Link>
      </div>
    </div>
  )
}

export default TransactionContainer
