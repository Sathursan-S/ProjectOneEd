import React from 'react'
import './Hero.css'
import bg1 from '../../Images/Picture1.png'

const Hero = () => {
  return (
          <div className='landing-com01'>
          <div className="com01-details">
              <div className="com01-title">
                  <span>Elevate Your Learning with Our</span>
                  <span>All-in-One</span>
                  <span>Real-Time Virtual Class Platform!</span>
                  <div className="hr">
                      <hr style={{ width: '70px' }} />
                      <hr style={{ width: '10px' }} />
                   </div>
              </div>
             
              <div className="com01-buttons">
                  <button>Learn on SpaceED</button>
                  <button>Tech on SpaceED</button>
              </div>
          </div>
          <div className="com01-img" >
              <img src={bg1} alt="" style={{ width:'100%', height:'100%'}} />
          </div>
    </div>
  )
}

export default Hero