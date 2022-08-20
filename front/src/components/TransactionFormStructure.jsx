import React, { useEffect, useState } from 'react'
import * as Yup from 'yup'
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
  const [title, setTitle] = useState('Nuevo movimiento')
  const [button, setButton] = useState('Crear')

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
      setTitle('Editar movimiento')
      setButton('Editar')
    }
  }, [transaction])

  const validationSchema = Yup.object({
    categoryId: Yup.mixed().required('Obligatorio'),
    concept: Yup.string()
      .min(3, 'Debe tener al menos 3 caracteres')
      .max(40, 'Debe tener como mucho 40 caracteres')
      .required('Obligatorio'),
    amount: Yup.number()
      .positive('El valor debe ser positivo')
      .required('Obligatorio'),
    date: Yup.date()
      .max(new Date(), 'No se pueden cargar gastos futuros')
      .required('Obligatorio'),
    // userId: Yup.number(),
    transactionTypeId: Yup.mixed().required('Obligatorio'),
  })

  const onSubmitFormType = (values) => {
    transaction ? onSubmitForm(values, transaction.id) : onSubmitForm(values)
  }

  return (
    <TransactionForm
      key={isEdit}
      title={title}
      categories={categories}
      transactionTypes={transactionTypes}
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmitFormType={onSubmitFormType}
      button={button}
    />
  )
}

export default TransactionFormStructure
