import React from 'react'
import { Formik, Form } from 'formik'
import FormInputField from './FormInputField'

function UserFormLogin({
  initialValues,
  validationSchema,
  onSubmitForm,
  error,
}) {
  return (
    <div>
      <h1>Register</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => onSubmitForm(values, 1)}
      >
        <Form>
          <FormInputField label="name" name="name" type="text" />

          <FormInputField label="surname" name="surname" type="text" />

          <FormInputField label="e-Mail" name="email" type="email" />

          <FormInputField label="Contraseña" name="password" type="password" />

          <FormInputField
            label="Confirmar contraseña"
            name="passwordConfirm"
            type="password"
          />

          <button type="submit">Registrarse</button>
          {error ? <span>Ya existe un usuario con ese email</span> : null}
        </Form>
      </Formik>
    </div>
  )
}

export default UserFormLogin
