import { createContext } from 'react'
import { useFormik } from 'formik'

const FormikContext = createContext({})

export const Formik = ({ children, ...props }) => {
  const formikStateAndHelpers = useFormik(props)
  return (
    <FormikContext.Provider value={formikStateAndHelpers}>
      {typeof children === 'function'
        ? children(formikStateAndHelpers)
        : children}
    </FormikContext.Provider>
  )
}
