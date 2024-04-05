import React from 'react'
import './LandingBanner.css'

function LandingBanner1() {
  return (
    <div className='features'>
    <div className="container1 ">
     <div className="des">
      <h2>Enjoy on your TV</h2>
      <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
     </div>
  <div className='tvclip'>
     <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt="" />
     <video autoPlay muted loop  className='poster'>
      <source
        src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
        type="video/mp4"
      />
    </video>
    </div>
    
   </div> 
  
</div>
  )
}

export default LandingBanner1
