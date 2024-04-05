import React from 'react'
import CardSlider from '../../Slider/CardSlider'

function TvSlider({datatvshow}) {
    const selectedtvdata = (start,end) =>{
        return datatvshow.slice(start,end)
    }
  return (
    <div style={{position:'relative',bottom:'120px',overflow:"hidden"}}>
    <CardSlider title="Movies" data={selectedtvdata(0,66)}/>
    <CardSlider title="TV Shows" data={selectedtvdata(67,132)}/>
    <CardSlider title="TrendingNow" data={selectedtvdata(133,198)}/>
    <CardSlider title="Popular" data={selectedtvdata(199,264)}/>
    <CardSlider title="Action Movies" data={selectedtvdata(265,330)}/>
    <CardSlider title="Discover" data={selectedtvdata(331,400)}/>
</div>
  )
}

export default TvSlider
