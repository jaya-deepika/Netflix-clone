import React from 'react'
import Card from '../../Slider/Card'
import './Filtermovies.css'

function Filtermovies({movies,searchQuery}) {

    const filteredMovies = movies.filter((movie) =>
    movie.name.toLowerCase().startsWith(searchQuery.toLowerCase())
  );


// const filteredMovies = movies.filter((movie) => {
//     const movieName = movie.name ? movie.name.toLowerCase() : '';
//     const search = searchQuery.toLowerCase();

//     // Check if movie name or any genre contains the search query
//     return (
//       movieName.startsWith(search) ||
//       movie.genres.some((genre) => genre.toLowerCase().includes(search))
//     );
//   });
  return (
    <div className='filterbgcolormain'>
    <div className="movies-container">
       {
        filteredMovies.map((movie,index)=>{

            return(
                <Card movieimages = {movie} index={index} key={movie.id} />
            )
        })
        }
    </div>
    </div>
  )
}

export default React.memo(Filtermovies);
