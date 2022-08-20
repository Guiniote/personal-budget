import React from 'react'
import { Formik, Form } from 'formik'
import { Link } from 'react-router-dom'
import FormInputField from './FormInputField'

function UserFormLogin({
  initialValues,
  validationSchema,
  onSubmitForm,
  error,
}) {
  return (
    <div>
      <h1>Login</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => onSubmitForm(values)}
      >
        <Form>
          <FormInputField label="e-Mail" name="email" type="email" />

          <FormInputField label="Contraseña" name="password" type="password" />

          <button type="submit">Ingresar</button>
          {error ? <span>Mail o contraseña inválidos</span> : null}

          <p>No tiene usuario? Registrese </p>
          <Link to={`/register`}>
            <span>aquí</span>
          </Link>
        </Form>
      </Formik>
    </div>
  )
}

export default UserFormLogin
