import React, { useEffect, useState } from 'react'
import * as Yup from 'yup'
import UserFormLogin from './UserFormLogin'
import UserFormRegister from './UserFormRegister'

function UserFormStructure({ onSubmitForm, toBeRegister, error }) {
  const [isRegister, setIsRegister] = useState(null)
  const [initialValues, setInitialValues] = useState({
    email: '',
    password: '',
  })
  const [validationSchema, setValidationSchema] = useState(
    Yup.object({
      email: Yup.string()
        .email('Dirección de mail inválida')
        .required('Obligatorio'),
      password: Yup.string().required('Obligatorio'),
    }),
  )

  useEffect(() => {
    if (toBeRegister === 1) {
      setIsRegister(1)
      setInitialValues({
        ...initialValues,
        name: '',
        surname: '',
        passwordConfirm: '',
      })
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
          email: Yup.string()
            .email('Dirección de mail inválida')
            .required('Obligatorio'),
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
      //   key={isEdit}
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmitForm={onSubmitForm}
      error={error}
    />
  )
}

export default UserFormStructure
