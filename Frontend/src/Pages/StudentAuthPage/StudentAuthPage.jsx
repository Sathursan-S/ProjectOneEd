import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './StudentAuthPage.css';
import img from '../../Images/Auth-page-img.png';
import { FaArrowLeft } from 'react-icons/fa';

import { logIn, signUp } from "../../Actions/AuthAction.js";
import { useDispatch, useSelector } from "react-redux";

const AuthPage = () => {
    const [isStudentSignUp, setIsStudentSignUp] = useState(false);
    const [data, setData] = useState(initialState);


  const resetForm = () => {
    setData(initialState);
    
  };
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isStudentSignUp) {
            dispatch(signUp(data, navigate))
            
        } else {
            // Simulated login logic
            dispatch(logIn(data, navigate));
        }
        
    }

    



    return (
        <div className='AuthPage'>
            <div className="auth-page-details">
                <div className="auth-page-details-title">
                    <span>{isStudentSignUp ? "Get started with SpaceEd for free" : "Welcome back!"}</span>
                </div>
                <div className="auth-page-details-discription">
                    <span>
                        {isStudentSignUp ?
                            "Create and deliver your online classes with SpaceEd to your students for free. No matter their device, location and no need any payment verifications."
                            : "Happy to see you again. Please log in to your account to access your SpaceEd classes."}
                    </span>
                </div>
                <div className="auth-page-details-img">
                    <img src={img} alt="" />
                </div>
                <div className="auth-page-details-home-button">
                    <Link to='/'>
                        <button className="auth-page-details-home-butt"><FaArrowLeft /> Go home</button>
                    </Link>
                </div>
            </div>
            <div className='login-card'>
                <div className="login-card-header">
                    <span>SpaceEd</span>
                    <span onClick={() => {
                        setIsStudentSignUp((prev) => !prev);
                        resetForm();
                    }}>
                        {isStudentSignUp ? "Already have an account ? Sign in" : "Don’t have an account ? Sign up"}
                    </span>
                </div>
                <div className="login-card-h1">
                    <h4>{isStudentSignUp ? "Create your free student account today." : "Log in to SpaceEd."}</h4>
                </div>
                <form className="login-card-input" >
                    <div className="login-card-email">
                        <span>Email address</span>
                        <input
                            required
                            type="email"
                            name="email"
                            value={data.email || data.username}
                            
                            onChange={handleChange}
                        />
                    </div>
                    <div className="login-card-password">
                        <span>Password</span>
                        <input
                            required
                            type="password"
                            name="password"
                            value={data.password}
                            onChange={handleChange}
                        />
                        <span>{isStudentSignUp ? "" : "Forget your password?"}</span>
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
                    <div className="login-card-button">
                        <button
                            className='Button'
                            onClick={handleSubmit}
                            disabled={loading}
                        >
                            {loading ? "Loading..." :isStudentSignUp ? "Get Started" : "Continue"}
                        </button>
                    </div>
                    
                </form>
            </div>
            <div className="auth-page-home-button">
                <Link to='/'>
                    <button className="auth-page-details-home-butt"><FaArrowLeft /> Go home</button>
                </Link>
            </div>
        </div>
    )
}

export default AuthPage