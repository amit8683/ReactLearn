import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <ul>
        <li><Link to="user/himanshu">Himanshu</Link></li>
        <li><Link to="user/Amit">Amit</Link></li>
      </ul>
    </div>
  )
}

export default Navbar
