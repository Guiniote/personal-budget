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
    <div className="flex flex-row w-full mt-12">
      <div className="py-12 flex-1">
        <div className="flex bg-gray-100 rounded-lg shadow-2xl overflow-hidden mx-auto max-w-xs md:max-w-lg lg:max-w-xl">
          <div className="w-full p-8">
            <h1 className="mb-8 text-2xl font-semibold text-gray-600 text-center">
              {title}
            </h1>
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

                {button === 'Crear' && (
                  <FormSelectField label="Tipo" name="transactionTypeId">
                    <option value="" disabled defaultValue hidden>
                      Seleccione un tipo
                    </option>
                    {transactionTypes
                      ? transactionTypes.map((transactionType) => (
                          <option
                            value={transactionType.id}
                            key={transactionType.id}
                          >
                            {transactionType.name}
                          </option>
                        ))
                      : ''}
                  </FormSelectField>
                )}
                <div className="mt-8">
                  <button
                    className="bg-indigo-500 text-white font-bold py-2 px-4 w-full rounded-lg hover:bg-indigo-400"
                    type="submit"
                  >
                    {button}
                  </button>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TransactionForm
