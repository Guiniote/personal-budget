import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Cookies from 'universal-cookie'

function UnprotectedRoute({ children, redirectPath = '/' }) {
  const cookies = new Cookies()
  const token = cookies.get('TokenCookie')
  if (token) {
    return <Navigate to={redirectPath} replace />
  }
  return children ? children : <Outlet />
}

export default UnprotectedRoute
