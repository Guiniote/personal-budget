import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'

function TransactionForm({
  categories,
  transactionTypes,
  initialValues,
  onSubmitFormType,
}) {
  return (
    <div>
      <h1>Nuevo movimiento</h1>
      <Formik
        initialValues={initialValues}
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
        onSubmit={(values) => onSubmitFormType(values)}
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

export default TransactionForm
