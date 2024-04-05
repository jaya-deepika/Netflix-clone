import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMovies} from './ReduxIndex';
import Slider from '../Slider/Slider';
// import { HiPlay } from "react-icons/hi2";
import { IoMdInformationCircleOutline } from "react-icons/io";
import './StoreApp.css'

function StoreAppdisplay() {
    const dispatch=useDispatch();
    // const genres = useSelector((state) => state.netflix.genres);
    const movies = useSelector((state) => state.netflix.movies);
    const [randomImageUrl, setRandomImageUrl] = useState('');
    const [randomImagename, setRandomImagename] = useState('');
    const [randomImageid, setRandomImageid] = useState('');
    // const searchQuery = useSelector((state) => state.netflix.searchQuery);
   
   

    useEffect(() => {
      dispatch(getMovies({ type: "all" }));
      // dispatch(getGenres())
    }, [dispatch]);

    const url = "https://image.tmdb.org/t/p/w1280";
    //random images pages
    useEffect(() => {
      if (movies && movies.length > 0) {
        const randomIndex = Math.floor(Math.random() * movies.length);
        const randomMovie = movies[randomIndex];
        const randomImage = `${url}${randomMovie.image}`;
        const randomname = `${randomMovie.name}`
        const randomid = `${randomMovie.overview}`
        setRandomImageUrl(randomImage);
        setRandomImagename(randomname);
        setRandomImageid(randomid)
      }
    }, [movies]);


    function removedesc(str,n){
      return str.length>0 ? str.substr(0,n-1):str 
    }
    // const moviesearch = useSelector((state) => {
    //   const { movies, searchQuery } = state.netflix;
    //   if (!searchQuery) {
    //     return movies;
    //   }
    //   return movies.filter((movie) =>
    //     movie.name.toLowerCase().includes(searchQuery.toLowerCase())
    //   );
    // });

    // const filteredMovies = searchQuery
    // ? movies.filter(movie =>
    //     movie.name.toLowerCase().includes(searchQuery.toLowerCase())
    // )
    // : movies;
    
  return (
    <div className='StoreAppMAin'>
      <div>
      {randomImageUrl && (
        <img
          src={randomImageUrl}
          alt={`RandomMovieImage`}
          className="shuffle"
        />
      )}
      <div className='DataStoreapp'>
      {randomImagename && (<h1>{randomImagename}</h1>)}
      {randomImageid && (<h2>{removedesc(randomImageid,150)}</h2>)}
      <div className="buttons">
          <button className='hiplay'><i className="fa-solid fa-play" ></i>play</button>
          <button className='infoicons'><IoMdInformationCircleOutline/>more Info</button>
      </div>
      </div>
      </div>
    
      <div className='slider' >
        <Slider movie={movies}/>
        {/* <Slider movie={filteredMovies} /> */}
      </div>
    </div>
  )
}

export default StoreAppdisplay;

