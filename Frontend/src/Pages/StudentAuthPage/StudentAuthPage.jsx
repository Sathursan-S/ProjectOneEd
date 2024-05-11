import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './StudentAuthPage.css';
import img from '../../Images/Login.svg';
import { FaArrowLeft } from 'react-icons/fa';
import { Navigate } from "react-router-dom";

const AuthPage = () => {
    const [isStudentSignUp, setIsStudentSignUp] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        phone: ''
    });

    const resetForm = () => {
        setFormData({
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        phone: ''
    }

        );
    }

    // Sample user data array acting as a database
    const [users, setUsers] = useState([
        { id: 1, email: 'user1@example.com', password: 'password1', firstName: 'John', lastName: 'Doe', phone: '1234567890' },
        { id: 2, email: 'user2@example.com', password: 'password2', firstName: 'Jane', lastName: 'Doe', phone: '9876543210' }
    ]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isStudentSignUp) {
            // Simulated sign up logic
            try {
                // Placeholder function for signing up user
                await signUpUser(formData);
                // Navigate to student home page upon successful sign up
                Navigate('/student-home');
                setFormData('');
            } catch (error) {
                console.error('Error signing up:', error);
                // Handle error (display error message, etc.)
            }
        } else {
            // Simulated login logic
            try {
                // Check if the user exists in the users array
                const user = users.find(user => user.email === formData.email && user.password === formData.password);
                if (user) {
                    // Navigate to student home page upon successful login
                    Navigate('/student-home');
                    setFormData('');
                } else {
                    // Display alert if user doesn't exist
                    alert('User does not exist. Please check your email and password.');
                }
            } catch (error) {
                console.error('Error logging in:', error);
                // Handle error (display error message, etc.)
            }
        }
        resetForm();
    }

    const signUpUser = async (userData) => {
        // Simulated API call for signing up user
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('User signed up successfully!');
                // Add new user to the users array
                setUsers(prevUsers => [...prevUsers, { ...userData, id: prevUsers.length + 1 }]);
                resolve();
            }, 1000);
        });
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

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
                <img src={img} alt="" />
                <div className="auth-page-details-home-button">
                    <Link to='/'>
                        <button className="auth-page-details-home-butt"><FaArrowLeft /> Home</button>
                    </Link>
                </div>
            </div>
            <div className='login-card'>
                <div className="login-card-content">
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
                <form className="login-card-input" onSubmit={handleSubmit}>
                    <div className="login-card-email">
                        <span>Email address</span>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} />
                    </div>
                    <div className="login-card-password">
                        <span>Password</span>
                        <input type="password" name="password" value={formData.password} onChange={handleChange} />
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
                        <button className='Button' type="submit">
                            {isStudentSignUp ? "Get Started" : "Continue"}
                        </button>
                    </div>                   
                </form>
                </div>
            </div>
            {/* <div className="auth-page-home-button">
                <Link to='/'>
                    <button className="auth-page-details-home-butt"><FaArrowLeft /> Go home</button>
                </Link>
            </div> */}
         
        </div>
    )
}

export default AuthPage