import React from 'react'
import './Footer.css'
import { HiTranslate } from "react-icons/hi";


const Footer = () => {
  return (
    <div className="footerContainer">
        <div className="footerContact">
            <p>Questions? Call <span className="phonecall">000-800-919-1694</span></p>
        </div>
        
        <div className="footerLinks">
          <ul>
            <li>FAQ</li>
            <li>Investor Relations</li>
            <li>Privacy</li>
            <li>Speed Test</li>
          </ul>
          <ul>
            <li>Help Centre</li>
            <li>Jobs</li>
            <li>Cookie Preferences</li>
            <li>Legal Notice</li>
          </ul>
          <ul className="footer__link3">
            <li>Account</li>
            <li>Ways to Watch</li>
            <li>Corporate Information</li>
            <li>Only on Netflix</li>
          </ul>
          <ul className="footer__link4">
            <li>Media Centre</li>
            <li>Term of Use</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* <div>
        <select name="" id="" className='languageButton'>
          <option value="English">English</option>
          <option value="Hindi">Hindi</option>
      </select>
        </div> */}
         <div className="nav">
            <div className="dropdown__container">
            
              <HiTranslate className='footericonhibutton'/>
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


        <div className="netflixFooterbrand">
        Netflix India
        </div>
      </div>
  );
}

export default Footer
