
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'; 
import LoginHeader from './LoginHeader';
import './Logintwo.css';
import LoginFooter from './LoginFooter';
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {firebaseAuth} from '../pages/firebase/config'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function Logintwo() {
  const location = useLocation(); 
  const [emaillogin, setEmail] = useState(location.state?.email || '');
  const [password, setPassword] = useState(''); 
  const [error, setError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

 
  useEffect(()=>{
    document.title = 'Netflix';
  },[])


  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._]+@[a-z]+\.[a-z]{2,6}$/;
    return regex.test(email);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setError(''); 
  };

  const handlePasswordChange = (event) => { 
    setPassword(event.target.value);
    setPasswordError(''); 
  };

  const handleSubmit =(async(event)=>{
    event.preventDefault(); 
    setError('');
    setPasswordError('');
    
    try{
      await createUserWithEmailAndPassword(firebaseAuth, emaillogin, password).then(user => {localStorage.setItem('userEmail', emaillogin);navigate('/Netflix')})

      axios.post('https://65ddc452dccfcd562f55697a.mockapi.io/netflix', {emaillogin, password})
      
  }catch(err){
      if(err.code==='auth/email-already-in-use'){
        setError("Email is already exists")
          
      }else if(err.code=== 'auth/invalid-email'){
        setError('Email is not valid')
      }else if(err.code==='auth/missing-password'){
        setPasswordError("Please enter your password")
      }else if(err.code==='auth/weak-password'){
        setPasswordError("weak password")
      }else{
        setPasswordError("something wrong")
      }
      }

  })

  return (
    <div className='LoginTwo-main'>
      <LoginHeader/>
      <div className="Login-two-second-section">
        <div className="Login-two-second-form">
          <span className='stepname'>STEP <b className='stepname'>1</b> OF <b className='stepname'>3</b></span>
          <h1>Create a password to start your membership</h1>
          <p>Just a few more steps and you're done! We hate paperwork, too.</p>
        </div>
        <div className="Login-two-second-formdiv">
          <form onSubmit={handleSubmit}>
              <div className="inputemail">
                <input type="text" placeholder='Email' className={`inputEmaillogin ${error ? 'inputError' : validateEmail(emaillogin) && emaillogin !== '' ? 'inputValid' : ''}`} value={emaillogin} onChange={handleEmailChange}/>
                <div className='errordiv'>{error && <p className='error'>{error}</p>}</div>
              </div>
              <div className="inputemail">
                <input type="password" placeholder='Add a password' className={`inputpasswordlogin ${passwordError ? 'inputError' : ''}`} value={password} onChange={handlePasswordChange}/> 
                <div className='errordiv'>{passwordError && <p className='error'>{passwordError}</p>}</div>
              </div>
              <button type="submit" className='nextbutton'>Next</button> 
          </form>
        </div>
      </div>
      <LoginFooter/>
    </div>
  );
}

export default Logintwo;
