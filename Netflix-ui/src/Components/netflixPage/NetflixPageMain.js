import React from 'react'
import NetfixNav from './NetfixNav'
import StoreAppdisplay from '../StoreApp/StoreAppdisplay'
import { useSelector } from 'react-redux';
import Filtermovies from '../pages/utils/Filtermovies';

function NetflixPageMain() {
  const searchQuery = useSelector((state) => state.netflix.searchQuery);
  console.log(searchQuery)
  const movies = useSelector((state) => state.netflix.movies);

  

 

  return (
    <div className='m'>
     <NetfixNav enableScrolling={true} />
      <div>
        {/* <StoreAppdisplay/> */}

        {searchQuery ? (
          <Filtermovies movies={movies} searchQuery={searchQuery} />
        ) : (
          <StoreAppdisplay />
        )}
        
      </div>
     
    </div>
  )
}

export default NetflixPageMain
