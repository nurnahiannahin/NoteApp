import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div className='flex flex-row gap-4 place-content-evenly text-2xl mt-7'>
        <NavLink className='bg-rose-900 text-white rounded-2xl px-10 py-2' to="/">
            Home
        </NavLink>
        <NavLink className='bg-rose-900 text-white rounded-2xl px-10 py-2' to="/paste">
            Notes
        </NavLink>
      </div>
    </div>
  )
}

export default Navbar
