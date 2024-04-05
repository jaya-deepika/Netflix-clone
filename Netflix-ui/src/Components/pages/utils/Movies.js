import React, { useEffect } from 'react'
import NetfixNav from '../../netflixPage/NetfixNav'
import { useDispatch, useSelector } from 'react-redux';
import {  getGenres, getMoviesDAta} from '../../StoreApp/ReduxIndex';
import './MainMovie.css'
import MovieNav from '../Movies/MovieNav';
import Filtermovies from './Filtermovies';
import Netflixfooter from '../../netflixPage/Netflixfooter';



function Movies() {
  const dispatch=useDispatch();
  const genres = useSelector((state) => state.netflix.genres);
  console.log(genres)
  
  const searchQuery = useSelector((state) => state.netflix.searchQuery);
  const moviedata=useSelector((state)=> state.netflix.moviesdata);
  useEffect(() => {
    dispatch(getGenres())
    dispatch(getMoviesDAta())
  }, [dispatch]);
  return (
    <div className='MoviesContainer'>
    <div className='Navfirst'><NetfixNav enableScrolling={false}/></div>
    <div className='MovieNavsecond' >
      {/* <MovieNav moviedata={moviedata}/> */}
      {searchQuery ? (
          <Filtermovies movies={moviedata} searchQuery={searchQuery} />
        ) : (
          <MovieNav moviedata={moviedata}/>
        )}
    </div>
    <div className='footersectionmovie'>
          <Netflixfooter/>
    </div>
    </div>
  )
}

export default React.memo(Movies);
