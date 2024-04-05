import React, {  useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Recording from '../pages/utils/Recording1.mp4'
import '../Slider/Card.css'
import {IoPlayCircleSharp} from 'react-icons/io5'
import {RiThumbUpFill,RiThumbDownFill} from 'react-icons/ri'
import {BsCheck} from 'react-icons/bs'
import { AiOutlinePlus } from 'react-icons/ai';
import {BiChevronDown} from 'react-icons/bi'
import axios from 'axios';
import { onAuthStateChanged } from 'firebase/auth';
import { firebaseAuth } from '../pages/firebase/config';
import { useDispatch } from 'react-redux';
import { removeFromLikedMovies } from '../StoreApp/ReduxIndex';

function Card({movieimages,isLiked=false}) {
  const[isHover,setIsHover]= useState(false);
  const [email,setEmail] = useState(undefined)
  const navigate=useNavigate();
  const dispatch=useDispatch();

 

  onAuthStateChanged(firebaseAuth,(currentUser)=>{
    if(currentUser) setEmail(currentUser.email);
    else navigate("/");
  })
 const addToList = async()=>{
  try{
    await axios.post("http://localhost:5000/api/user/add",{email,data:movieimages})
  }catch (err){
    console.log(err)
  }
 }
  return (
    <div
    onMouseEnter={()=>setIsHover(true)}
    onMouseLeave={()=>setIsHover(false)}
    className='card'
    >
       <img src={ `https://image.tmdb.org/t/p/w500${movieimages.image}`} alt={movieimages.title} 
       onClick={()=>navigate("/Player")}
       className='moviescontainer'
       />
       {isHover && (
        <div className="hover">
          <div className="imagevideo-hover">
            <img src={`https://image.tmdb.org/t/p/w500${movieimages.image}`} alt=""
              onClick={()=>navigate("/Player")}/>
            <video src={Recording} autoPlay loop muted onClick={()=> navigate("/Player")}/>
          </div>
          <div className="info-container">
            <h3 className='name' onClick={()=> navigate("/Player")}>{movieimages.name}</h3>
            <div className="icons">
              <div className="controls">
              <IoPlayCircleSharp title='play' onClick={()=>navigate("/Player")}/>
              <RiThumbUpFill title='Like'/>
              <RiThumbDownFill title='Dislike'/>
              {
                isLiked ?(<BsCheck title='Remove From List' onClick={()=>{dispatch(removeFromLikedMovies({email,movieId:movieimages.id}))}}/>):
                (<AiOutlinePlus title='Add to my List' onClick={() => { addToList() }} />)
              }
              </div>
              <div className="info">
                <BiChevronDown title='More Info'/>
              </div>
            </div>
            <div className='geners '>
                <ul className='generdata'>
                  {
                    movieimages.genres.map((genre)=>(
                      <li key={genre}>{genre}</li>
                    ))
                  }
                </ul>
            </div>

          </div>
        </div>
       )

       }
       
       



</div>

   
      
    
  )
}

export default React.memo(Card);
