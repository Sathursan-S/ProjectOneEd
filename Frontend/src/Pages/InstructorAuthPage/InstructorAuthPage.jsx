import React, { useState } from "react";
import './InstructorAuthPage.css'
import img from '../../Images/Auth-page-img.png'
import { FaArrowLeft } from 'react-icons/fa'




const InstructorAuthPage = () => {
    const initialState = {
        username:"",
        email: "",
        firstName: "",
        lastName: "",
        phone: "" ,
        password: "",
        role: "INSTRUCTOR"
    };
    const [isStudentSignUp, setIsStudentSignUp] = useState(true);
    const [isStudentSignUpPage_02, setIsStudentSignUpPage_02] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
    const [users, setUsers] = useState([]);

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        phone: '',
        institutionName: '',
        capacity: '',
        instructorPosition: '',
        location: '',
        optionalPhone: ''
    });
    
    const resetForm = () => {
        setFormData({
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            phone: '',
            institutionName: '',
            capacity: '',
            instructorPosition: '',
            location: '',
            optionalPhone: ''
        })
        
    };


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmitNext = async (e) => {
        e.preventDefault();
        
        setIsStudentSignUpPage_02(true);
    };

    const handleSignUp = async (e) => {
        e.preventDefault();
        const newUser = { ...formData };
        setUsers([...users, newUser]);
        console.log("New user signed up:", newUser);
        // Additional logic (e.g., redirect)
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        const foundUser = users.find(user => user.email === formData.email && user.password === formData.password);
        if (foundUser) {
            console.log("User logged in:", foundUser);
            // Additional logic (e.g., redirect)
        } else {
            console.log("Invalid credentials");
            // Show error message or handle invalid login
        }
    };
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
                  {isStudentSignUp  && (
                      <span onClick={() => {
                      setIsStudentSignUp((prev) => !prev);
                          setIsLogin((prev) => !prev);
                          setIsStudentSignUpPage_02(false);
                      
                      }}>
                          Already have an account ? Sign in</span>
                  )}
                  {isLogin && (
                      <span onClick={() => {
                      
                          setIsLogin((prev) => !prev);
                          setIsStudentSignUpPage_02(false);
                          setIsStudentSignUp(true);
                      
                      }}>
                          Don’t have an account ? Sign up</span>
                  )}
                  
            </div>
            <div className="login-card-h1">
                  <span className="login-card-h1-span-1">{isStudentSignUp ? "Create your free instructor account today." : (isStudentSignUpPage_02 ? "You're almost done!" : "Log in to SpaceEd.") }</span>
                  {isStudentSignUpPage_02 && (
                      <span className="login-card-h1-span-2">Tell us bit more about you and your institution</span>
                  )}
            </div>
              <div className="login-card-input">
                    {isLogin && (
                        <form onSubmit={handleLogin}>
                            {/* Login form */}
                            <div className="login-card-email">
                                <span>Email address</span>
                                <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
                            </div>
                            <div className="login-card-password">
                                <span>Password</span>
                                <input type="password" name="password" value={formData.password} onChange={handleInputChange} />
                                <span>{isStudentSignUp ? "" : "Forget your password?"}</span>
                            </div>
                            <div className="login-card-button">
                                <button className='Button' type="submit">Continue</button>
                            </div>
                        </form>
                    )}
                    {isStudentSignUp && (
                        <form onSubmit={handleSubmitNext}>
                            {/* Student sign up form */}
                            <div className="login-card-email">
                                <span>Email address</span>
                                <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
                            </div>
                            <div className="login-card-password">
                                <span>Password</span>
                                <input type="password" name="password" value={formData.password} onChange={handleInputChange} />
                                <span>Forget your password?</span>
                            </div>
                            <div className="login-card-name">
                                <div className="login-card-firstname">
                                    <span>First name</span>
                                    <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} />
                                </div>
                                <div className="login-card-lastname">
                                    <span>Last name</span>
                                    <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} />
                                </div>
                            </div>
                            <div className="login-card-phone">
                                <span>Phone</span>
                                <input type="text" name="phone" value={formData.phone} onChange={handleInputChange} />
                            </div>
                            <div className="login-card-button">
                                <button className={isStudentSignUpPage_02 ? "buttonHidden" :"Button"} type="submit">Next</button>
                            </div>
                        </form>
                    )}
                    {isStudentSignUpPage_02 && (
                        <form onSubmit={handleSignUp}>
                            {/* Student sign up page 2 form */}
                            <div className="signup-institution-name-capacity">
                                <div className="signup-institution-name">
                                    <span>Institution name</span>
                                    <input type="text" name="institutionName" value={formData.institutionName} onChange={handleInputChange} />
                                </div>
                                <div className="signup-capacity">
                                    <span>Capacity</span>
                                    <select style={{ color: "gray" }} value={formData.capacity} onChange={handleInputChange} name="capacity">
                                        <option value="" disabled hidden>Capacity</option>
                                        <option value="25">25</option>
                                        <option value="50">50</option>
                                        <option value="100">100</option>
                                        <option value="500">500</option>
                                        <option value="more">more</option>
                                    </select>
                                </div>
                            </div>
                            <div className="signup-instructor-position">
                                <span>What best describes you?</span>
                                <select style={{ color: "gray" }} value={formData.instructorPosition} onChange={handleInputChange} name="instructorPosition">
                                    <option value="" disabled hidden>Lecturer/Teacher/Undergraduate/Other</option>
                                    <option value="lecture">Lecturer</option>
                                    <option value="teacher">Teacher</option>
                                    <option value="undergraduate">Undergraduate</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <div>
                                <div className="signup-location">
                                    <span>Location</span>
                                    <select style={{ color: "gray" }} value={formData.location} onChange={handleInputChange} name="location">
                                        <option value="" disabled hidden>District</option>
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
                                    <input type="text" name="optionalPhone" value={formData.optionalPhone} onChange={handleInputChange} placeholder="+94 XXXXXXXX.." />
                                </div>
                            </div>
                            <div className="login-card-button">
                                <button className='Button' type="submit">Get started</button>
                            </div>
                        </form>
                    )}
                </div>
            
              
          
          </div>
                <div className="auth-page-home-button">
                  <button><FaArrowLeft/> Go home</button>
              </div>

    </div>
  )
}


export default InstructorAuthPage