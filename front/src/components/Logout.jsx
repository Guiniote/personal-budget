/* eslint-disable no-alert */
/* eslint-disable no-restricted-globals */
import React from 'react'
import Cookies from 'universal-cookie'
import { useNavigate } from 'react-router-dom'
import { FaSignOutAlt } from 'react-icons/fa'

// Logout component. Ask confirmation to leave and destroy cookies
function Logout() {
  const cookies = new Cookies()
  const navigate = useNavigate()

  const logout = () => {
    if (confirm('Está seguro que desea salir?')) {
      cookies.remove('TokenCookie', { path: '/' })
      navigate('/login')
    }
  }

  return (
    <button type="submit" onClick={() => logout()}>
      <FaSignOutAlt className="text-indigo-500 text-xl" title="Salir" />
    </button>
  )
}

export default Logout
