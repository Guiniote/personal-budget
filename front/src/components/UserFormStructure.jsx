/* eslint-disable no-useless-escape */
import React, { useEffect, useState } from 'react'
import * as Yup from 'yup'
import UserFormLogin from './UserFormLogin'
import UserFormRegister from './UserFormRegister'

// Component to prepare info needed by Formik for use the form and leave cleaner the form component
function UserFormStructure({ onSubmitForm, toBeRegister, error }) {
  const [isRegister, setIsRegister] = useState(null)
  const [initialValues, setInitialValues] = useState({
    email: '',
    password: '',
  })
  const [validationSchema, setValidationSchema] = useState(
    Yup.object({
      email: Yup.string().email('Dirección de mail inválida').required('Obligatorio'),
      password: Yup.string().required('Obligatorio'),
    }),
  )

  useEffect(() => {
    /* If it's a login, I use the default initialValues.
    If it's an registration, I set the other values needed */
    if (toBeRegister === 1) {
      setIsRegister(1)
      setInitialValues({
        ...initialValues,
        name: '',
        surname: '',
        passwordConfirm: '',
      })

      /* If it's a login, I use the default Yup validation schema.
      If it's an registration, I set the other values needed */
      setValidationSchema(
        Yup.object({
          name: Yup.string()
            .min(3, 'Debe tener al menos 6 caracteres')
            .max(40, 'Debe tener como mucho 40 caracteres')
            .required('Obligatorio'),
          surname: Yup.string()
            .min(3, 'Debe tener al menos 6 caracteres')
            .max(40, 'Debe tener como mucho 40 caracteres')
            .required('Obligatorio'),
          email: Yup.string().email('Dirección de mail inválida').required('Obligatorio'),
          password: Yup.string()
            .matches(
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
              'La contraseña debe tener al menos 8 caracteres, una letra minúscula, una letra mayúscula, un número y un caracter especial',
            )
            .required('Obligatorio'),
          passwordConfirm: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Las contraseñas no coinciden')
            .required('Obligatorio'),
        }),
      )
    }
  }, [toBeRegister])

  // If it's a login, I show the login form. If it's an registration, I show the register form.
  return toBeRegister === 1 ? (
    <UserFormRegister
      key={isRegister}
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmitForm={onSubmitForm}
      error={error}
    />
  ) : (
    <UserFormLogin
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmitForm={onSubmitForm}
      error={error}
    />
  )
}

export default UserFormStructure
