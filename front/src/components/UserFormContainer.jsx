import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Cookies from 'universal-cookie'
import UserFormStructure from './UserFormStructure'

function UserFormContainer({ toBeRegister }) {
  const [errorStatus, setErrorStatus] = useState(null)
  const cookies = new Cookies()
  const navigate = useNavigate()

  const onSubmitForm = async (values, isRegister) => {
    try {
      if (isRegister === 1) {
        axios
          .post(`${process.env.REACT_APP_API_DOMAIN}/user/new`, {
            name: values.name,
            surname: values.surname,
            eMail: values.email,
            password: values.password,
          })
          .then(() => navigate('/'))
          .catch(function (error) {
            setErrorStatus(error.response.status)
          })
      } else {
        axios
          .post(`${process.env.REACT_APP_API_DOMAIN}/user/login`, {
            eMail: values.email,
            password: values.password,
          })
          .then((response) => {
            cookies.set('TokenCookie', response.data.body, {
              path: '/',
              maxAge: 3600,
            })
            navigate('/')
          })
          .catch(function (error) {
            setErrorStatus(error.response.status)
          })
      }
    } catch (err) {
      console.error(`Error: ${err}`)
    }
  }

  return (
    <UserFormStructure
      onSubmitForm={onSubmitForm}
      toBeRegister={toBeRegister}
      error={errorStatus}
    />
  )
}

export default UserFormContainer
