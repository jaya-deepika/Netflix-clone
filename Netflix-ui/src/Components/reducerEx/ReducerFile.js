// import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import {mov} from './Reducer'

// function ReducerFile() {
//     const dispatch=useDispatch()
//     const select=useSelector((state)=>state.list.movies)
//     console.log(select)
   
  
//     useEffect(()=>{
//       dispatch(mov())
//     },[])

//   return (
//     <div>
//      {
//     select.results && select.results.map((e)=>{
//         return(
//         <ul key={e.id}>
//         <li><img src={'https://image.tmdb.org/t/p/w500' +e.backdrop_path} alt="" /></li>
//         </ul>
//       )})
//      }
//     </div>
//   )
// }
 
// export default ReducerFile 
