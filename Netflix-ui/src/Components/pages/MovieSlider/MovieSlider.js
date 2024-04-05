import React from 'react'
import CardSlider from '../../Slider/CardSlider'

function MovieSlider({movie}) {
    const selectedMoviesdata = (start,end) =>{
        return movie.slice(start,end)
    }
  return (
    <div style={{position:'relative',bottom:'80px',overflow:"hidden"}}>
        <CardSlider title="Movies" data={selectedMoviesdata(0,66)}/>
        <CardSlider title="TV Shows" data={selectedMoviesdata(67,132)}/>
        <CardSlider title="TrendingNow" data={selectedMoviesdata(133,198)}/>
        <CardSlider title="Popular" data={selectedMoviesdata(199,264)}/>
        <CardSlider title="Action Movies" data={selectedMoviesdata(265,330)}/>
        <CardSlider title="Discover" data={selectedMoviesdata(331,400)}/>
    </div>
  )
}

export default React.memo(MovieSlider);
