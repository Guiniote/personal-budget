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
      // if it's a registration, I post to register endpoint with all the info
      if (isRegister === 1) {
        axios
          .post(`${process.env.REACT_APP_API_DOMAIN}/user/register`, {
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
        // If it's a login, I post to login endpoint with mail and password, and then I save user info and token in a cookie
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
    } catch (error) {
      setErrorStatus(error.response)
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
