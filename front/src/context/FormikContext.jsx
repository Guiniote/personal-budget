/* eslint-disable react/function-component-definition */
import React, { createContext } from 'react'
import { useFormik } from 'formik'

const FormikContext = createContext({})

const Formik = ({ children, ...props }) => {
  const formikStateAndHelpers = useFormik(props)
  return (
    <FormikContext.Provider value={formikStateAndHelpers}>
      {typeof children === 'function' ? children(formikStateAndHelpers) : children}
    </FormikContext.Provider>
  )
}

export default Formik
