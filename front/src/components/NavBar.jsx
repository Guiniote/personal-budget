import React from 'react'
import Logout from './Logout'

function NavBar() {
  return (
    <div className="flex flex-row h-8 md:h-10 bg-purple-50 justify-end items-center mx-2">
      <Logout />
    </div>
  )
}

export default NavBar
