import React from 'react'
import { Link } from 'react-router-dom'

const navbar = () => {
  return (
    <div className='navbar'>
        <h1>Negan Lucile</h1>
        <div className='navbar_route'>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
        </div>
    </div>
  )
}

export default navbar