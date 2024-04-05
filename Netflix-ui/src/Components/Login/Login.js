import React from 'react'
import LoginHeader from './LoginHeader'
import './LoginPage.css'
import LoginFooter from './LoginFooter'
import { useLocation, useNavigate } from 'react-router-dom'

function Login() {
  const navigate =useNavigate()
  const location = useLocation(); 
  const email = location.state?.email || '';
  const Next_handle =()=>{
    navigate('/signup/regform',{state:{email}})
  }
  return (
    <div className='Login-Page-main'>
      <LoginHeader/>
      <div className="Login-center-section">
        <div className="container-Main">
          <div className="sub-one">
            <div className="image-login">
              <span>
                <img src="https://assets.nflxext.com/ffe/siteui/acquisition/simplicity/Devices.png" alt="not inserted" />
              </span>
            </div>
            <div className="sub-one-text1">
              <span>STEP <b>1</b> OF <b>3</b></span>
            </div>
            <div className="sub-one-text2">
                <h1>Finish setting up your account</h1>
            </div>
            <div className="sub-one-text3">
            <p>Netflix is personalised for you. Create a password to watch on any device at any time.</p>
            </div>
          </div>
          
          <div className="sub-two">
              <button className='sub-two-button' onClick={Next_handle}>Next</button>
          </div>

        </div>
      </div>
      <LoginFooter/>
    </div>
    
  )
}

export default Login
