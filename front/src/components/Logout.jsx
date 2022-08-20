import React from 'react'
import Cookies from 'universal-cookie'
import { useNavigate } from 'react-router-dom'

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
      Logout
    </button>
  )
}

export default Logout
