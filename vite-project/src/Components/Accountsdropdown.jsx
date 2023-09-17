import React from 'react'
import { Link } from 'react-router-dom'

function Accountsdropdown() {
   
  return (
    <div>
    <ul className='cardaccount'>
      <li>
        <Link to='/register' className='link'>Register</Link>
      </li>
      <li>
        <Link to='/login' className='link'>Login</Link>
      </li>
      <li>
        <Link to='/myaccount' className='link'>My account</Link>
      </li>
      <li>
        <Link to='/orders' className='link'>Orders</Link>
      </li>
      <li>
        Logout
        {/* <Link to='/logout'>Logout</Link> */}
      </li>
    </ul>
  </div>
  )
}

export default Accountsdropdown