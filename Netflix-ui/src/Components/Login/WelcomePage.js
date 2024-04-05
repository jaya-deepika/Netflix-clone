import React from 'react'
import LoginHeader from './LoginHeader';
import LoginFooter from './LoginFooter';
import { Link } from 'react-router-dom';
import './WelcomePage.css'

function WelcomePage() {
  return (
    <div className='welcome-page-main'>
        <LoginHeader/>
        <div className="welcome-page-section-two">
        <div className="welcome-two-second-form">
          <span className='stepname'>STEP <b className='stepname'>1</b> OF <b className='stepname'>3</b></span>
          <h1>welcome Back!</h1>
          <h1>Joining Netflix is easy.</h1>
          <p>Enter your Password and you'll be watching in no time.</p>
        </div>
        <div className="welcome-form">
            <form action="">
                <div><p>Email</p></div>
                <div><p>Emaildata</p></div>
                <div><input type="password" placeholder='enter your Password' className='inputpasswordwelcome'/></div>
                <p  className='welcome-link-p'><Link to='' className='welcome-link'>Forgot your password?</Link></p>
                <button type='submit' className='nextwelcomebutton'>Next</button>
            </form>
        </div>
        </div>
        <LoginFooter/>
    </div>
     
  )
}

export default WelcomePage
