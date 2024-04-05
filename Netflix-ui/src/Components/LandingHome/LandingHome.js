
import React, { useEffect, useState } from 'react';
import "./LandingHome.css"; 
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LandingHome = () => {
  const [email, setEmail] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._]+@[a-z]+\.[a-z]{2,6}$/;
    return regex.test(email);
  };

  const[userEmail, setUserEmail] = useState([]);
  useEffect(()=>{
    axios.get('https://65ddc452dccfcd562f55697a.mockapi.io/netflix')
    .then(res=> setUserEmail(res.data))
  },[])

  const handleStartedClick = () => {
    if (validateEmail(email)) {

      const results = userEmail.find((p)=> p.emaillogin === email);

      if(results){
        navigate('/signin', { state: { email } });
      }else{
        navigate('/signup', { state: { email } });
      }
      
    } else if(email === ''){
      setError('email required');
    }else if(!email.includes('@')){
      setError('please check "@" is missing');
    }
    else if(email){
      setError('Please enter a valid email address.');
    }
  };

  return (
    <div className='descriptionDiv'>
      <p className='homeHeading'>Unlimited movies, TV shows and more</p>
      <p className='firstPara'>Watch anywhere. Cancel anytime.</p>
      <p className='secondPara'>Ready to watch? Enter your email to create or restart your membership.</p>
      
      <div className='emailEnterDiv'>
        <label className={`floatingLabel ${email || isFocused ? 'float' : ''}`} htmlFor="email">Email address</label>
        <input
          id="email"
          type="text"
          className={`homePageEmailInput ${error ? 'inputError' : validateEmail(email) && email !== '' ? 'inputValid' : ''}`}
          value={email}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="button" className='homePageEmailSubmit' onClick={handleStartedClick}>Get Started</button>
      </div>
      <div className='errordiv'>{error && <p className='error'>{error}</p>}</div>
    </div>
  );
};

export default LandingHome;

