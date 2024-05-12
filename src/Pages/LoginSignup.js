import React from 'react';
import '../Pages/LoginSignup.css';


const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className='loginsignup-container'>
        <h1>Sign up</h1>
        <div className='loginsignup-filds'>
          <input type='text' placeholder='Your Name'/>
          <input type='Email' placeholder='Email address'/>
          <input type='password' placeholder='password'/>
        </div>
        <button>Continue</button>
        <p className='loginsignup-login'>Allready have an Account? <span>Login here</span></p>
        <div className='loginsignip-agree'>
          <input type='checkbox' name='' id=''/>
          <p>By Conrinuing, i agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  );
}

export default LoginSignup;
