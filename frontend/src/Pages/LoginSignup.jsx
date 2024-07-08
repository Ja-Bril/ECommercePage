import React from 'react'
import './CSS/LoginSignup.css'

export const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up For An Account</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Name' />
          <input type="email" placeholder='Email address'/>
          <input type="password" placeholder='Password'/>
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">Have an account? <span><a href='#'>Login here</a></span></p>
      </div>
    </div>
  )
}

