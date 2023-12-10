import React from 'react'
import { FaUser } from 'react-icons/fa';
import './Testimonial.css'

const Testimonial = () => {
  return (
      <div className='testimonial'>
        <div className="account-icon">
                <FaUser/>
        </div>
        
          <div className="invertedcommo">
              <span>"</span>
          </div>
          <div className="comments">
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis nostrud exercitation
              </span>
          </div>
          <div className="invertedcommo">
              <span>"</span>
              
          </div>

    </div>
  )
}

export default Testimonial