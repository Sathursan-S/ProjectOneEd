import React from 'react'
import './Navbar.css'
import { Link,NavLink } from 'react-router-dom'
import { FaUser } from 'react-icons/fa';


const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navbar-logo'>
             <Link style={{ textDecoration: 'none' }} to='/home' ><p>SpaceEd</p></Link>           
        </div>     
        <ul className='navbar-menu'>
        <li>
          <NavLink  exact to="/" activeClassName="active">
            Explore Classes
          </NavLink>
        </li>
        <li>
          <NavLink  to="/about" activeClassName="active">
            Teach on SpaceEd
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName="active">
            About Us
          </NavLink>
        </li>
      </ul>
        <div className='navbar-button'>
            <button className='navbar-login'>
                <Link style={{ textDecoration: 'none', color: '#626262' }} to='/login'>Login</Link>
            </button>
            <button className='navbar-profile'>
                <span className="icon-container">
                    <FaUser />
                </span>
            </button>
        </div>
    </div>
  )
}
export default Navbar
