import React from 'react'
import './Features.css'
import feature1 from '../../Images/Untitled-1.png'
import feature2 from '../../Images/Untitled-2.png'
import feature3 from '../../Images/Untitled-3.png'
import feature4 from '../../Images/Untitled-4.png'

const Features = () => {
  return (
        <div className='features'>
          <div className="feature-title">
              <span>What's new!</span>
              <hr  />
          </div>
          <div className="feature-items">
              
                  <div className="rectangle">
                    <div className="fectImg">
                        <img src={feature1}  />
                    </div>
    
                    <div className='txt'>
                        <span>Explore classes</span>
                        <span>Explore classes that suits you perfects</span>
                    </div>
    
                  </div>
                  
              <div className="rectangle">
                    <div className="fectImg">
                        <img src={feature2}  />
                    </div>
    
                    <div className='txt'>
                        <span>Get enrolled</span>
                        <span>Get your class admission in few taps and join into your desire classes</span>
                    </div>
    
              </div>
              
              
              <div className="rectangle">
                    <div className="fectImg">
                        <img src={feature3}  />
                    </div>
    
                    <div className='txt'>
                        <span>Pay seamlessly</span>
                        <span>Pay your class fee through spaceed and keep your class live</span>
                    </div>
    
              </div>
              <div className="rectangle">
                    <div className="fectImg">
                        <img src={feature4}  />
                    </div>
    
                    <div className='txt'>
                        <span>Learn beyond</span>
                        <span>Learn from real time classes with user friendly experience with us</span>
                    </div>
    
                </div>
          </div>
          <div className="feature-button">
              <button className='Button feature-but'>EXPLORE CLASSES</button>
          </div>
        </div>
  )
}

export default Features