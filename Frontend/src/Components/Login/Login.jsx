import React from 'react'
import "../Login/Login.css"
const Login = () => {
  return (
    <div className='login-right'>
            <div className="login-right-header">
                <span>SpaceEd</span>
                <span>Already have an account ? Sign in</span>
            </div>
            <div className="right-title">
                <span>Create your free student account today.</span>
            </div>
            <div className="login-inputs">
                <div className="inputs">
                    <span className='form-labels'>Email address</span>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div className="inputs">
                    <span className='form-labels'>Password</span>
                    <input type="password" class="form-control" id="exampleInputPassword1"></input>
                </div>
                <div className="name">
                    <div className="f-name">
                        <span className='form-labels'>First name</span>
                        <input type='text' class="form-control"></input>
                    </div>
                    <div className="l-name">
                        <span className='form-labels'>Last name</span>
                        <input type='text' class="form-control"></input>
                    </div>
                </div>
                <div className="inputs">
                    <span className='form-labels'>Phone</span>
                    <input type='text' class="form-control"></input>
                </div>
            </div>
            <div className="login-btn-div">
                <button className='login-btn'>Get Started</button>
            </div>
        </div>
  )
}

export default Login