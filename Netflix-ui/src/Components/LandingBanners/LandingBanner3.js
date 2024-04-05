import React from 'react'
import './LandingBanner.css'

function LandingBanner3() {
  return (
    
    <div className='features'>
    <div className="container1">
     <div className="des">
      <h2>Watch everywhere</h2>
      <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
     </div>
  <div className='tvclip'>
     <img src="	https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png" alt="" />
     <video autoPlay muted loop  className='devicesclip'>
      <source
        src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v"
        type="video/mp4"
      />
    </video>
    </div>
    
   </div> 
  
</div>
  )
}

export default LandingBanner3
