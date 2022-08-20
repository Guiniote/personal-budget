import React from 'react'
import { Formik, Form } from 'formik'
import FormInputField from './FormInputField'
import FormSelectField from './FormSelectField'

function TransactionForm({
  title,
  categories,
  transactionTypes,
  initialValues,
  validationSchema,
  onSubmitFormType,
  button,
}) {
  return (
    <div>
      <h1>{title}</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => onSubmitFormType(values)}
      >
        <Form>
          <FormSelectField label="Categoría" name="categoryId">
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
          </FormSelectField>

          <FormInputField label="Concepto" name="concept" type="text" />

          <FormInputField label="Importe" name="amount" type="number" />

          <FormInputField label="Fecha" name="date" type="date" />

          {/* <FormInputField label="Usuario" name="userId" type="number" /> */}
          {button === 'Crear' && (
            <FormSelectField label="Tipo" name="transactionTypeId">
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
            </FormSelectField>
          )}

          <button type="submit">{button}</button>
        </Form>
      </Formik>
    </div>
  )
}

export default TransactionForm
