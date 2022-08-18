import React, { useEffect, useState } from 'react'
import TransactionForm from './TransactionForm'

function TransactionFormStructure({
  categories,
  transactionTypes,
  transaction,
  onSubmitForm,
}) {
  const [isEdit, setIsEdit] = useState(null)
  const [initialValues, setInitialValues] = useState({
    categoryId: '',
    concept: '',
    amount: '',
    date: '',
    userId: '',
    transactionTypeId: '',
  })
  useEffect(() => {
    if (transaction) {
      setIsEdit(1)
      setInitialValues({
        categoryId: transaction.category,
        concept: transaction.concept,
        amount: transaction.amount,
        date: transaction.date,
        userId: transaction.user,
        transactionTypeId: transaction.transactionType,
      })
    }
  }, [transaction])

  const onSubmitFormType = (values) => {
    transaction ? onSubmitForm(values, transaction.id) : onSubmitForm(values)
  }

  return (
    <TransactionForm
      key={isEdit}
      categories={categories}
      transactionTypes={transactionTypes}
      initialValues={initialValues}
      onSubmitFormType={onSubmitFormType}
    />
  )
}

export default TransactionFormStructure
