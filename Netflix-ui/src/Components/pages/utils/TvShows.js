import React, { useEffect } from 'react'
import NetfixNav from '../../netflixPage/NetfixNav'
import { useDispatch, useSelector } from 'react-redux';
import {  gettvDAta, gettvGenres} from '../../StoreApp/ReduxIndex';
import TVNav from '../TvShows/TVNav';
import Filtermovies from './Filtermovies';
import Netflixfooter from '../../netflixPage/Netflixfooter';





function TvShows() {
  const dispatch=useDispatch();
  const tvgenres = useSelector((state) => state.netflix.genrestv);
  const searchQuery = useSelector((state) => state.netflix.searchQuery);
  console.log(tvgenres)
  const datatv=useSelector((state)=> state.netflix.tv)
  console.log(datatv)
  
  

  useEffect(() => {
    dispatch(gettvGenres())
    dispatch(gettvDAta())
  }, [dispatch]);
  return (
    <div className='MoviesContainer'>
    <div className='Navfirst'><NetfixNav enableScrolling={false}/></div>
    <div className='MovieNavsecond' >
      {/* <TVNav  datatv={datatv}/> */}
      {searchQuery ? (
          <Filtermovies movies={datatv} searchQuery={searchQuery} />
        ) : (
          <TVNav datatv={datatv}/>
        )}
    </div>
    <div className='footersectionmovie'>
          <Netflixfooter/>
    </div>
    </div>
  )
}

export default React.memo(TvShows);
