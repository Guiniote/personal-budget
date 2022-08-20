import React from 'react'
import { NavLink } from 'react-router-dom'
import Logout from './Logout'

function NavBar() {
  return (
    <div>
      <div>
        <NavLink to={'/transaction'}>Movimientos</NavLink>
      </div>
      <div>
        <Logout />
      </div>
    </div>
  )
}

export default NavBar
