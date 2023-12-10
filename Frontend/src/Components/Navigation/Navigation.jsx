import React from 'react'
import './Navigation.css'
import { FaUser } from 'react-icons/fa';

const Navigation = () => {
  return (
    <div className="navigation">
        <div className="company-name">
            <span>SpaceED</span>
        </div>
        <div className="nav-buttons">
            <button>Explore Classes</button>
            <button>Become an Instructor</button>
            <button>About Us</button>
        </div>
        <div className="login">
            <div className="login-button">
                <button>Log In</button>
            </div>
              <div className="account-icon">
                <FaUser/>
        </div>
        
        </div>
    </div>
  )
}

export default Navigation