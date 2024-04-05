import React, { useRef, useState } from 'react'
import Card from './Card'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import './CardSlider.css'
import { useSelector } from 'react-redux';

function CardSlider({data,title}) {
  const [showControls,setShowControls] = useState(false);
  const [sliderPosition,setSliderPosition] = useState(0);
  const listRef = useRef(null);
  console.log(data)
  const mylist = useSelector((state) => state.netflix.liked);
  const handleDirection = (direction) =>{
    // let distance =listRef.current.getBoundingClientRect().x - 70;
    // if(direction === "left" && sliderposition > 0){
    //   listRef.current.style.transform = `translateX(${230 +distance}px)`;
    //   setSliderPosition(sliderposition -1);
    // }
    // if(direction === "right" && sliderposition < 4){
    //   listRef.current.style.transform = `translateX(${-230 +distance}px)`;
    //   setSliderPosition(sliderposition +1);
    // }
    const listElement = listRef.current;
    if (!listElement) return; // Check if listElement is null
  
    const slideWidth = listElement.clientWidth; // Calculate slide width based on container's client width
    const maxSlides = Math.ceil(data.length / 5) - 1; // Assuming each slide shows 4 cards
    
    let newPosition; // Variable to store the new slider position
    if (direction === "left" && sliderPosition > 0) {
      newPosition = sliderPosition - 1; // Move left if not at the beginning
    } else if (direction === "right" && sliderPosition < maxSlides) {
      newPosition = sliderPosition + 1; // Move right if not at the end
    } else {
      return; // Don't move if already at the edge
    }
  
    const distance = -newPosition * slideWidth; // Calculate the distance to move the slider
    listElement.style.transform = `translateX(${distance}px)`; // Apply the transform to move the slider
    setSliderPosition(newPosition); // Update the slider position in state
  };
//   const handleDirection = (direction) =>{
//     const slideWidth = ref.current.offsetWidth;
//     const maxSliderPosition = data.length-1;

//     let newPosition;
//     if(direction === 'left' && sliderPosition > 0){
//         newPosition = sliderPosition-0.2;
//         // ref.current.style.tr

//     }else if(direction === 'right' && sliderPosition < maxSliderPosition){
//         newPosition = sliderPosition+0.3;
//     }else{
//         return;
//     }

//     setSliderPosition(newPosition);
//     ref.current.style.transform = `translate(-${newPosition * slideWidth}px)`;
//   }
//   const sliderWrapperStyle = {
//     // transform:`translateX(-${sliderPosition*100}%)`,
//     // transition:`transform 0.5s ease-in-out`

//     transform: `translateX(-${sliderPosition * 100}%)`, // Using percentage to adjust for dynamic content width
//     transition: 'transform 0.5s ease'
// }
  return (
    <div  className={`SliderContainer ${showControls ? 'showControls' : ''}`}
    onMouseEnter={()=>setShowControls(true)}
    onMouseLeave={()=>setShowControls(false)}
    >
        <h3>{title}</h3>
        <div className='Wrapper'>
          <div className={`slider-action left ${ !showControls ? "none" : ''}flex j-center a-center`}>
            <AiOutlineLeft onClick={()=> handleDirection("left")}/>
          </div> 
       
        <div className="flex" ref={listRef}>
        {
        data.map((movie,index)=>{
          const isLiked = mylist.some(likedMovie => likedMovie.id === movie.id);
            return(
                <Card movieimages = {movie} index={index} key={movie.id}  isLiked={isLiked}/>
            )
        })
        }
      </div>
    <div className={`slider-action right ${ !showControls ? "none" : ''}flex j-center a-center`}>
      <AiOutlineRight onClick={()=> handleDirection("right")}/>
    </div> 
    </div>
   
</div>
  )
}

export default React.memo(CardSlider)
