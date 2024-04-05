import React from 'react'
import { HiTranslate } from "react-icons/hi";
import './SignInFooter.css'

function SignInFooter() {
  return (
    <div className="footerContainer">
    <div className="footerContact">
        <p>Questions? Call <span className="phonecall">000-800-919-1694</span></p>
    </div>
    
    <div className="footerLinks">
      <ul>
        <li>FAQ</li>
        <li>Cookie Preferences</li>
      </ul>
      <ul>
        <li>Help Center</li>
        <li>Corporate Information</li>
      </ul>
      <ul className="footer__link3">
        <li>Terms of use</li>
      </ul>
      <ul className="footer__link4">
        <li>Privacy</li>
        
      </ul>
    </div>
     <div className="nav">
        <div className="dropdown__container">
        
          <HiTranslate />
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

export default SignInFooter;
