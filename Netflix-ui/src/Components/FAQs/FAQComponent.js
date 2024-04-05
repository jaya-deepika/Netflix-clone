import React, { useState } from 'react';
import { TfiPlus } from "react-icons/tfi";
import { RxCross1 } from "react-icons/rx";
import './FAQ.css';
import faqData from './FAQ.json';

function FAQComponent() {
    const [expanded, setExpanded] = useState(null);
  const [expandedIcon, setExpandedIcon] = useState(null);

  const handleChange = (index) => {
    if (expanded === index) {
      setExpanded(null);
      setExpandedIcon(null);
    } else {
      setExpanded(index);
      setExpandedIcon(index);
    }
  };
  return (
    <div className='faqSection'>
      <h2>Frequently Asked Questions</h2>
      {faqData.items.map((item, index) => (
        <div
          key={index}
          className={`accordion ${expanded === index ? 'active' : ''}`}
          onClick={() => handleChange(index)}
        >
          <div className='accordion-header'>
            <div className='accordion-summary'>
              <span className='question'>{item.question}</span>
              <span className='expand-icon'>{expandedIcon === index ? <RxCross1 /> : <TfiPlus />}</span>
            </div>
          </div>
          <div className={expandedIcon === index ? "accordion-content-show" : "accordion-content"}>
            <p className='answer'>{item.answer}</p>
            {item.answer2 && <p className='answer'>{item.answer2}</p>}
          </div>
        </div>
      ))}
      <p className='faqP'>Ready to watch? Enter your email to create or restart your membership.</p>
      <div className='emailEnterDiv'>
        <input type="text" placeholder='Email Address' className='homePageEmailInput'/>
        <button type="button" className='homePageEmailSubmit'>Get Started</button>
      </div>
    </div>
  )
}

export default FAQComponent
