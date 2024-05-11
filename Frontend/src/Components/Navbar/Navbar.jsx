import React from 'react'
import './Navbar.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaUser } from 'react-icons/fa';


const Navbar = () => {
    const [menu, setMenu] = useState("home");
  return (
    <div className='navbar'>
          <div className='navbar-logo'>
             <Link to='/home' ><p>SpaceEd</p></Link>
            
        </div>     
        <ul className='navbar-menu'>
            <li onClick={()=>{setMenu("home")}}>Explore classes{menu==="home"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("class")}}>Become an instrctor{menu==="class"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("instruct")}}>About us{menu==="instruct"?<hr/>:<></>}</li>
            {/* <li onClick={()=>{setMenu("photo")}}><Link style={{ textDecoration: 'none', color: '#626262' }} to='/addevent'>Add Event</Link>{menu==="photo"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("venue")}}><Link style={{ textDecoration: 'none', color: '#626262' }} to='/viewevent'>View Event</Link>{menu==="venue"?<hr/>:<></>}</li> */}
        </ul>
        <div className='navbar-button'>
    
                    {/* <button className='navbar-login'>
                      Logout
                    </button> */}
                    <button className='navbar-login'>
                        <Link style={{ textDecoration: 'none', color: '#626262' }} to='/login'>Login</Link>
                    </button>

            {/* <button className='navbar-myevent'><Link style={{ textDecoration: 'none', color: 'white' }} to='/myevent'>My Event</Link></button> */}
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
