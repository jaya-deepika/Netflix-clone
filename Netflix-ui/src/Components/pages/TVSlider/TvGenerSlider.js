import React from 'react'
import CardSlider from '../../Slider/CardSlider';

function TvGenerSlider({genreId,moviedata}) {
    const filteredMovies = moviedata.filter(moviedata => moviedata.generids.includes(genreId));
    const selectedMoviesdata = (start,end) =>{
        return filteredMovies.slice(start,end)
    }
  return (
    <div style={{position:'relative',overflow:"hidden",backgroundColor:'black',paddingTop:'80px',height:'900px'}}>
    {filteredMovies.length > 0 && (
           <CardSlider title="Movies" data={selectedMoviesdata(0, 66)} />
       )}
       {filteredMovies.length > 66 && (
           <CardSlider title="TV Shows" data={selectedMoviesdata(67, 132)} />
       )}
       {filteredMovies.length > 132 && (
           <CardSlider title="Trending Now" data={selectedMoviesdata(133, 198)} />
       )}
       {filteredMovies.length > 198 && (
           <CardSlider title="Popular" data={selectedMoviesdata(199, 264)} />
       )}
       {filteredMovies.length > 264 && (
           <CardSlider title="Action Movies" data={selectedMoviesdata(265, 330)} />
       )}
       {filteredMovies.length > 330 && (
           <CardSlider title="Discover" data={selectedMoviesdata(331, 400)} />
       )}
</div>
  )
}

export default TvGenerSlider
