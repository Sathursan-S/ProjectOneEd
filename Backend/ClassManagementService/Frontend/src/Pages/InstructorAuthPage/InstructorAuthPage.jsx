import React, { useState } from "react";
import './InstructorAuthPage.css'
import img from '../../Images/Auth-page-img.png'
import { FaArrowLeft } from 'react-icons/fa'




const InstructorAuthPage = () => {
      const [isStudentSignUp, setIsStudentSignUp] = useState(false);
  return (
      <div className='AuthPage'>
          <div className="auth-page-details">
              <div className="auth-page-details-title">
                <span>{isStudentSignUp ? "Get started with SpaceEd for free":"Welcome back!"}</span>
              </div>
              <div className="auth-page-details-discription">
                  <span>
                      {isStudentSignUp ?
                          "Create and deliver your online classes with SpaceEd to your students for free. No matter their device, location and no need any payment verifications."
                          : "Happy to see you again. please log in to your account to access your spaceEd classes."}
                  </span>
              </div>
              <div className="auth-page-details-img">
                  <img src={img} alt="" />
              </div>
              <div className="auth-page-details-home-button">
                  <button><FaArrowLeft/> Go home</button>
              </div>
          </div>
          <div className='login-card'>
            <div className="login-card-header">
                <span>SpaceEd</span>
                  <span onClick={() => {
                      setIsStudentSignUp((prev) => !prev);
                  }}>
                      {isStudentSignUp ?
                          "Already have an account ? Sign in"
                          : "Don’t have an account ? Sign up"}
                  </span>
            </div>
            <div className="login-card-h1">
                <h4>{isStudentSignUp ? "Create your free instructor account today." :"Log in to SpaceEd."}</h4>
            </div>
            <div className="login-card-input">
                <div className="login-card-email">
                    <span>Email address</span>
                    <input type="email" />
                </div>
                <div className="login-card-password">
                    <span>Password</span>
                      <input type="password" />
                      <span>{isStudentSignUp ? "" :"Forget your password?" }</span>
                  </div>
                  {isStudentSignUp && (
                      <div>
                            <div className="login-card-name">
                                <div className="login-card-firstname">
                                    <span>First name</span>
                                <input type="text" />
                                </div>
                                <div className="login-card-lastname">
                                    <span>Last name</span>
                                <input type="text" />
                                </div>
                            </div>
                            <div className="login-card-phone">
                                <span>Phone</span>
                                <input type="text" />
                            </div>
                      </div>
                      
                      
                  )}
                
            </div>
            <div className="login-card-button">
                <button className='Button'>{isStudentSignUp ? "Get Started" : "Continue"}</button>
              </div>
              
          
          </div>
                <div className="auth-page-home-button">
                  <button><FaArrowLeft/> Go home</button>
              </div>

    </div>
  )
}


export default InstructorAuthPage