import React from 'react'
import CardSlider from './CardSlider'

function Slider({movie}) {
    const selectedMovies = (start,end) =>{
      return movie.slice(start,end)
  }
  return (
    <div  className='slider-for-card' style={{position:'relative',bottom:'180px',overflow:"hidden"}}>
        <CardSlider title="Movies" data={selectedMovies(0,15)}/>
        <CardSlider title="TV Shows" data={selectedMovies(15,30)}/>
        <CardSlider title="TrendingNow" data={selectedMovies(30,45)}/>
        <CardSlider title="Popular" data={selectedMovies(45,60)}/>
        <CardSlider title="Action Movies" data={selectedMovies(60,74)}/>
        <CardSlider title="Discover" data={selectedMovies(74,80)}/>
    </div>
  )
}


export default React.memo(Slider);
