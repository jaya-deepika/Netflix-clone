import React, { useEffect, useRef, useState } from 'react'
import TvSlider from '../TVSlider/TvSlider'
import Recording from '../utils/Recording1.mp4'
import { IoMdPlay } from "react-icons/io";
import { TfiInfoAlt } from "react-icons/tfi";
import './TvRandompage.css'

function TvRandompage({datatvshow}) {
  const Tvshowiamges = datatvshow;
  const [tvbackground, settvBackground] = useState("");
  const [TvTitle, setTvTitle] = useState("");
  const [Tvdescription,setTvdescription]=useState("");


  //    background image from random generation
  useEffect(() => {
    if (Tvshowiamges && Tvshowiamges.length > 0) {
        const randomId = Math.floor(Math.random() * Tvshowiamges.length);
        const randomMovie = Tvshowiamges[randomId];
        settvBackground(`url(https://image.tmdb.org/t/p/original${randomMovie.image})`);
        setTvTitle(randomMovie.title||randomMovie.name);
        setTvdescription(randomMovie.overview) 
    }
     
  }, [Tvshowiamges]);
  // remove description
  function removedesc(str,n){
    return str.length>0 ? str.substr(0,n-1):str 
  }
  //  when the user clik play button it wii be open a full screen of vide
  const videoplayer=useRef();
//    setTimeout(() => {
//     videplayer.current.style.display="block" 
//  }, 5000);
  // Set the display style after 5000 milliseconds (5 seconds)
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (videoplayer.current) {
        videoplayer.current.style.display = "block";
      }
    }, 9000);

    // Clean up the timeout to avoid memory leaks
    return () => clearTimeout(timeoutId);
  }, []);

  const openFullScreen = () => {
  const elem = videoplayer.current;
  if (elem.requestFullscreen) {
      elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) { /* Firefox */
      elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
      elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE/Edge */
      elem.msRequestFullscreen();
  }
  };


  return (
    <div>
      {/* moviepage random */}
      <div className='bg_img' style={{ backgroundImage: tvbackground}}>
      {
               
      <div  className='main_banner'>
        <video src={Recording}  autoPlay muted className='youtube_container' ref={videoplayer}  ></video>

          <div className="banner_content">

            <h1 className="banner_title">{TvTitle}</h1>
            <div className="banner_description">{removedesc(Tvdescription,150)}</div>
            <div className="banner_buttons">
                          
            <button className="banner_button"  onClick={openFullScreen}><IoMdPlay className='iomd' />Play</button>
            <button className="banner_buttont"><TfiInfoAlt /> More info</button>
                           
            </div>
          </div>
    </div>
           
         
   }

      </div>
      <div style={{background:'black'}}><TvSlider datatvshow={datatvshow}/></div>
    </div>
  )
}

export default React.memo(TvRandompage)
