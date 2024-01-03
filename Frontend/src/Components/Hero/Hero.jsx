import React from 'react'
import Typewriter from "typewriter-effect";
import './Hero.css'
import bg1 from '../../Images/Picture1.png'


const Hero = () => {
  return (
    <div className='container'>
          <div className="container-content">
              <div className="content-title">
                  {/* <h1>Elevate Your Learning with</h1> */}
                <Typewriter
                    options={{
                    loop: true,
                    cursor: "|",
                    deleteSpeed: 0.3,
                    }}
                    onInit={(typewriter) => {
                    typewriter
                        .typeString("Elevate Your Learning with")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Enhance Your Teaching with")
                        .deleteAll()
                        .typeString("Elevate Your Learning with")
                        .deleteAll()
                        .start();
                    }}
                />
                  <h2>All-in-One</h2>
                  <h3>Real-Time Virtual Classroom.</h3>  
                  {/* <div className="hr">
                    <hr class="first-hr"></hr>
                    <hr class="second-hr"></hr>
                  </div> */}
              </div>             
              <div className="com01-buttons">
                  <button>Learn on SpaceEd</button>
                  <button>Teach on SpaceEd</button>
              </div>
          </div>
          <div className="com01-img" >
              <img src={bg1} alt="" style={{ width:'100%', height:'100%'}} />
          </div>
    </div>
  )
}

export default Hero