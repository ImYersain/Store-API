import React from 'react'
import { Link } from 'react-router-dom'

export function Navigation() {
  return (
    <nav className='h-[50px] flex justify-between items-center px-5 bg-gray-500 text-white'>
        <span className='font-bold'>
            <Link to='/'>LOGO</Link>
        </span>

        <span>
            <Link to='/' className='mr-2 hover:text-blue-500'>Products</Link>
            <Link to='/about' className='hover:text-blue-500'>About us</Link>
        </span>
    </nav>
  )
}
