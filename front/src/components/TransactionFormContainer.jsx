import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
import Cookies from 'universal-cookie'
import TransactionFormStructure from './TransactionFormStructure'

function TransactionFormContainer() {
  const { transactionId } = useParams()
  const [transaction, setTransaction] = useState(null)
  const [categories, setCategories] = useState(null)
  const [transactionTypes, setTransactionTypes] = useState(null)
  const [errorStatus, setErrorStatus] = useState(null)
  const navigate = useNavigate()
  const cookies = new Cookies()
  const { token, userId } = cookies.get('TokenCookie')

  useEffect(() => {
    try {
      // Get all necesary info to create a new transaction or show options to edit one
      axios
        .get(`${process.env.REACT_APP_API_DOMAIN}/transaction/new`)
        .then((response) => {
          setCategories(response.data.body.categories)
          setTransactionTypes(response.data.body.transactionTypes)
        })
        .catch(function (error) {
          setErrorStatus(error.response.status)
        })
      // Logic to establish if it's a new transacion or an edition
      if (transactionId) {
        // If it's and edition, it gets the transaction info from the database
        axios
          .get(
            `${process.env.REACT_APP_API_DOMAIN}/transaction/${transactionId}`,
          )
          .then((response) => {
            setTransaction(response.data.body)
          })
          .catch(function (error) {
            setErrorStatus(error.response.status)
          })
      }
    } catch (error) {
      setErrorStatus(error.response.status)
    }
  }, [])

  // Submit function
  const onSubmitForm = (values, transactionIdToEdit) => {
    try {
      if (transactionIdToEdit) {
        // If it's an edition, use patch
        axios
          .patch(
            `${process.env.REACT_APP_API_DOMAIN}/transaction/${transactionIdToEdit}`,
            {
              categoryId: values.categoryId,
              concept: values.concept,
              amount: values.amount,
              date: values.date,
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            },
          )
          .then(() => navigate('/transaction'))
          .catch(function (error) {
            setErrorStatus(error.response)
          })
      } else {
        // If its a new transaction, then post the data
        axios
          .post(
            `${process.env.REACT_APP_API_DOMAIN}/transaction/new`,
            {
              userId: userId,
              categoryId: values.categoryId,
              concept: values.concept,
              amount: values.amount,
              date: values.date,
              transactionTypeId: values.transactionTypeId,
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            },
          )
          .then(() => navigate('/transaction'))
          .catch(function (error) {
            setErrorStatus(error.response.status)
          })
      }
    } catch (error) {
      setErrorStatus(error.response)
    }
  }

  return (
    <TransactionFormStructure
      categories={categories}
      transactionTypes={transactionTypes}
      transaction={transaction}
      onSubmitForm={onSubmitForm}
      error={errorStatus}
    />
  )
}

export default TransactionFormContainer
