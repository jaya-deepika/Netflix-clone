import React from 'react'
import "./Player.css"
import Recording from '../utils/Recording1.mp4'
import { useNavigate } from 'react-router-dom'

function Player() {
  const navigate = useNavigate();
  return (
   
      <div className="player">
        <div className="back">
        <i className="fa-solid fa-arrow-left" style={{color:"red"}} onClick={()=>navigate(-1)}></i>
        </div>
        <video src={Recording} autoPlay loop controls muted></video>
      </div>
  
  )
}

export default Player
