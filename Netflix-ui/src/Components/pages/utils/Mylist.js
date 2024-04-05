import React, { useEffect, useState } from 'react'
import NetfixNav from '../../netflixPage/NetfixNav'
import { useDispatch, useSelector } from 'react-redux';
import { getUserLikedMovies } from '../../StoreApp/ReduxIndex';
import { firebaseAuth } from '../firebase/config';
import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import Card from '../../Slider/Card';
import './Filtermovies.css'

function Mylist() {
  const dispatch=useDispatch();
  const mylist = useSelector((state) => state.netflix.liked);
  const [email,setEmail] = useState(undefined);
  const navigate=useNavigate();

  onAuthStateChanged(firebaseAuth,(currentUser)=>{
    if(currentUser) setEmail(currentUser.email);
    else navigate("/");
  })
  useEffect(() => {
   if(email){
    dispatch(getUserLikedMovies(email));
   }
  },[dispatch,email]);
  return (
    <div className='mylist-div'>
      <NetfixNav enableScrolling={false}/>
      <div  className='Mylist-head'>
        <h1 >MyList</h1>
        <div className='movies-container'>
            {mylist && mylist.map((movie, index) => (
            <Card movieimages={movie} index={index} key={movie.id} isLiked={true} />
            ))}
        </div>
        </div>
    </div>
  )
}

export default React.memo(Mylist);
