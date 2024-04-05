import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './Components/LandingPage/LandingPage'
import SignIn from './Components/SignIn/SignIn'
import Login from './Components/Login/Login'
import Logintwo from './Components/Login/Logintwo'
// import NetfixNav from './Components/netflixPage/NetfixNav'
import WelcomePage from './Components/Login/WelcomePage'
import NetflixPageMain from './Components/netflixPage/NetflixPageMain'
import Player from './Components/pages/utils/Player'
import Movies from './Components/pages/utils/Movies'
import TvShows from './Components/pages/utils/TvShows'
import Mylist from './Components/pages/utils/Mylist'


function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route exact path='/' element={<LandingPage/>}/>
      <Route exact path='/signin' element={<SignIn/>}/>
      <Route exact path='/signup' element={<Login/>}/>
      <Route exact path='/signup/regform' element={<Logintwo/>}/>
      {/* <Route exact path='/browse' element={<NetfixNav/>}/> */}
      <Route exact path='/signup/password' element={<WelcomePage/>}/>
      <Route exact path='/Netflix' element={<NetflixPageMain/>}/>
      <Route exact path='/Player' element={<Player/>}/>
      <Route exact path='/movies' element={<Movies/>}/>
      <Route exact path='/TvShows' element={<TvShows/>}/>
      <Route exact path='/MyList' element={<Mylist/>}/>
     </Routes>
    </BrowserRouter>
  )
}

export default App

