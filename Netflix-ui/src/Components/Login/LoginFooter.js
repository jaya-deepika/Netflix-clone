import React from 'react'
import './LoginFooter.css'


function LoginFooter() {
  return (
    <div className='LoginFooter-main'>
       <div className="LoginContact">
        <p>Questions? Call <span className="phonecall">000-800-919-1694</span></p>
      </div>
    
    <div className="LoginLinks">
      <ul>
        <li>FAQ</li>
        <li>Privacy</li>
      </ul>
      <ul>
        <li>Help Center</li>
        <li>Corporate Information</li>
      </ul>
      <ul className="login__link3">
        <li>Terms of use</li>
      </ul>
      <ul className="login__link4">
        <li>Terms of use</li>
        
      </ul>
    </div>
     <div className="nav">
        <div className="dropdown__container">
        
        <i className="fa-solid fa-globe"></i>
          <select
            name="languages"
            id="languagesSelect"
            className="language_drop_down">
            <option value="english" >
              English
            </option>
            <option value="hindi">Hindi</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default LoginFooter
