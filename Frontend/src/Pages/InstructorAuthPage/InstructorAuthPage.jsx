import React, { useState } from "react";
import './InstructorAuthPage.css'
import img from '../../Images/Auth-page-img.png'
import { FaArrowLeft } from 'react-icons/fa'




const InstructorAuthPage = () => {
    const [isStudentSignUp, setIsStudentSignUp] = useState(true);
    const [isStudentSignUpPage_02, setIsStudentSignUpPage_02] = useState(false);
    
    // const submitButton () => {
        
    // }

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
                          :(isStudentSignUpPage_02 ? "" : "Don’t have an account ? Sign up")}
                  </span>
            </div>
            <div className="login-card-h1">
                  <span className="login-card-h1-span-1">{isStudentSignUp ? "Create your free instructor account today." : (isStudentSignUpPage_02 ? "You're almost done!" : "Log in to SpaceEd.") }</span>
                  {isStudentSignUpPage_02 && (
                      <span className="login-card-h1-span-2">Tell us bit more about you and your institution</span>
                  )}
            </div>
              <div className="login-card-input">
                  {isStudentSignUpPage_02 ? (
                  <div className="signup-instroctor-01">
                      
                      <div className="signup-institution-name">
                          <span>Institution name</span>
                          <input type="text" placeholder="Random"/>
                        </div>
                        <div className="signup-capacity">
                            <span>Capacity</span>
                            <select style={{color: "gray"}} >
                            <option  value="" disabled selected hidden>Capacity</option>
                            <option value="25">25</option>
                            <option value="50">50</option>
                            <option value="100">100</option>
                            <option value="500">500</option>
                            <option value="more">more</option>
                        </select>
                        </div>

                      
                </div>
                  ) : (
                      <div className="login-card-email">
                    <span>Email address</span>
                    <input type="email" />
                      </div>
                  )}

                  {isStudentSignUpPage_02 ? (
                  <div className="signup-instructor-position">
                      <span>What best discribe you?</span>
                          <select style={{color: "gray"}} >
                              <option value="" disabled selected hidden>Lecturer/Teacher/Undergraduate/Other</option>
                              <option value="lecture">Lecturer</option>
                              <option value="teacher">Teacher</option>
                              <option value="undergraduate">Undergraduate</option>
                              <option value="other">Other</option>
                      </select>
                      </div>
                  ) : (
                          <div className="login-card-password">
                            <span>Password</span>
                        <input type="password" />
                        <span>{isStudentSignUp ? "" :"Forget your password?" }</span>
                  </div>
                )}
                
                
                
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
                  {isStudentSignUpPage_02 && (
                      <div>
                        <div className="signup-location">
                            <span>Locattion</span>
                            <select style={{color: "gray"}} >
                              <option value="" disabled selected hidden>District</option>
                              <option value="galle">Galle</option>
                              <option value="colombo">Colombo</option>
                              <option value="trincomalee">Trincomalee</option>
                              <option value="mullaitivu">Mullaitivu</option>
                              <option value="kilinochi">Kilinochi</option>
                              <option value="jaffna">Jaffna</option>
                      </select>
                        </div>
                        <div className="login-card-password">
                            <span>Phone(Optional)</span>
                            <input type="text" placeholder="+94 XXXXXXXX.." />
                        </div>
                      </div>
                )}
            </div>
            <div className="login-card-button">
                <button onClick={() => {
                      setIsStudentSignUp((prev) => !prev);
                      setIsStudentSignUpPage_02((prev) => !prev);
                  }} className='Button'>
                      {isStudentSignUp ? "Next"
                          : (isStudentSignUpPage_02 ? "Get started" : "Continue"
                          )}
                  </button>
              </div>
              
          
          </div>
                <div className="auth-page-home-button">
                  <button><FaArrowLeft/> Go home</button>
              </div>

    </div>
  )
}


export default InstructorAuthPage