import React, { useEffect, useState } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function NewTransaction() {
  const [categories, setCategories] = useState(null)
  const [transactionTypes, setTransactionTypes] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    try {
      axios
        .get(`${process.env.REACT_APP_API_DOMAIN}/transaction/new`)
        .then((response) => {
          setCategories(response.data.body.categories)
          setTransactionTypes(response.data.body.transactionTypes)
        })
    } catch (err) {
      console.error(`Error: ${err}`)
    }
  }, [])

  return (
    <div>
      <h1>Nuevo movimiento</h1>
      <Formik
        initialValues={{
          categoryId: '',
          concept: '',
          amount: '',
          date: '',
          userId: '',
          transactionTypeId: '',
        }}
        validationSchema={Yup.object({
          categoryId: Yup.mixed().required('Obligatorio'),
          concept: Yup.string()
            .min(3, 'Debe tener al menos 3 caracteres')
            .max(40, 'Debe tener como mucho ${max} caracteres')
            .required('Obligatorio'),
          amount: Yup.number()
            .positive('El valor debe ser positivo')
            .required('Obligatorio'),
          date: Yup.date()
            .max(new Date(), 'No se pueden cargar gastos futuros')
            .required('Obligatorio'),
          userId: Yup.number(),
          transactionTypeId: Yup.mixed().required('Obligatorio'),
        })}
        onSubmit={(values) => {
          try {
            axios
              .post(`${process.env.REACT_APP_API_DOMAIN}/transaction/new`, {
                userId: values.userId,
                categoryId: values.categoryId,
                concept: values.concept,
                amount: values.amount,
                date: values.date,
                transactionTypeId: values.transactionTypeId,
              })
              .then(() => navigate('/transaction'))
          } catch (err) {
            console.error(`Error: ${err}`)
          }
        }}
      >
        <Form>
          <label htmlFor="categoryId">Categoría</label>
          <Field as="select" name="categoryId">
            <option value="" disabled defaultValue hidden>
              Seleccione una categoría
            </option>
            {categories
              ? categories.map((category) => (
                  <option value={category.id} key={category.id}>
                    {category.name}
                  </option>
                ))
              : ''}
          </Field>
          <ErrorMessage name="categoryId" />

          <label htmlFor="concept">Concepto</label>
          <Field name="concept" type="text" />
          <ErrorMessage name="concept" />

          <label htmlFor="amount">Importe</label>
          <Field name="amount" type="number" />
          <ErrorMessage name="amount" />

          <label htmlFor="date">Fecha</label>
          <Field name="date" type="date" />
          <ErrorMessage name="date" />

          <label htmlFor="userId">Usuario</label>
          <Field name="userId" type="number" />
          <ErrorMessage name="userId" />

          <label htmlFor="transactionTypeId">Tipo</label>
          <Field as="select" name="transactionTypeId">
            <option value="" disabled defaultValue hidden>
              Seleccione un tipo
            </option>
            {transactionTypes
              ? transactionTypes.map((transactionType) => (
                  <option value={transactionType.id} key={transactionType.id}>
                    {transactionType.name}
                  </option>
                ))
              : ''}
          </Field>
          <ErrorMessage name="transactionTypeId" />

          <button type="submit">Crear</button>
        </Form>
      </Formik>
    </div>
  )
}

export default NewTransaction
