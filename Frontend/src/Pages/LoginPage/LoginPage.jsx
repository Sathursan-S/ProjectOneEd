import React from 'react'
// import img from "../../Images/login-img.png"
import "../LoginPage/LoginPage.css"
import Login from '../../Components/Login/Login'

const LoginPage = () => {
  return (
    <form className='login'> 
    <div className="login-all">
        <div className='login-left'>
                <div className="left-title">
                    <span>Get started with</span>
                    <span>SpaceEd for free</span>
                    <span>Create and deliver your online classes with SpaceEd to 
                        your students for free. No matter their device, location 
                        and no need any payment verifications.</span>

                    <div className="component ">
                        <div className="overlap-group">
                        <div className="rectangle" />
                        <div><img className="image" /></div>
                        </div>
                    </div> 
                    </div>
                
        </div>

        <Login />
        </div>
        <div className="left-home-btn">

    </div>
        
    </form>
  )
}

export default LoginPage