// import { configureStore,createAsyncThunk,createSlice } from "@reduxjs/toolkit";
// import { API_KEY, TMBD_BASE_URL } from "../reducerEx/Apikeys";
// import axios from "axios";


// const initialState ={
//     movies:[],
//     genresLoaded:false,
//     genres:[]
// };

// export const getGenres = createAsyncThunk("netflix/genres",async()=>{
//     const {data:{genres}}=await axios.get(`${TMBD_BASE_URL}/genre/movie/list?${API_KEY}`);
//     // console.log(genres)
//     return genres;
// });

// // const createMovieArrayFromMovieData = (results,moviesArr,genres)=>{
// //     results.forEach((movie)=>{
// //         const movieGenres = [];
// //         movie.genre_ids.forEach((genre)=>{
// //             const finding = genres.find(({ id }) =>id === genre);
// //             if(finding){
// //                 movieGenres.push(finding.name);
// //             }
// //         })
// //         if(movie.backdrop_path){
// //             moviesArr.push({
// //                 id:movie.id,
// //                 name:movie.original_name ? movie.original_name : movie.original_title,
// //                 image:movie.backdrop_path,
// //                 genres:movieGenres.slice(0,3),
// //                 Overview:movie.overview

// //             });
// //         }
// //         console.log(moviesArr)
// //         console.log(movie)
    
// //     });

// // }
// // Define the getData function
// const getData = async (api, genres, paging) => {
//     const moviesArr = [];
//     for (let i = 1; moviesArr.length < 60 && i < 10; i++) {
//         const { data: { results } } = await axios.get(`${api}${paging ? `&page=${i}` : ""}`);
//         createMovieArrayFromMovieData(results, moviesArr, genres);
//     }
//     return moviesArr;
// };


// const createMovieArrayFromMovieData = (results, moviesArr, genres) => {
//     console.log("Results:", results); // Check the value of 'results'

//     if (!results || !Array.isArray(results)) {
//         console.error("Invalid results data:", results);
//         return;
//     }

//     results.forEach((movie, index) => {
//         console.log(`Processing movie ${index + 1}:`, movie); // Check the value of each movie

//         if (index === 3) { // Check specifically for movie number 4
//             console.log("Data for movie 4:", movie); // Log the data for movie number 4
//             console.log("ID:", movie.id);
//             console.log("Backdrop Path:", movie.backdrop_path);
//             console.log("Genre IDs:", movie.genre_ids);
//             console.log("Overview:", movie.overview);
//         }
//         if (!movie || typeof movie !== 'object') {
//             console.error(`Invalid data for movie ${index + 1}:`, movie);
//             return; // Skip processing this movie if it's not an object
//         }

//         if (!movie.id || !movie.backdrop_path) {
//             console.error(`Invalid data for movie ${index + 1}:`, movie);
//             return; // Skip processing this movie if it's missing essential data
//         }

//         if (!Array.isArray(movie.genre_ids)) {
//             console.warn(`Invalid genre_ids data for movie ${index + 1}:`, movie.genre_ids);
//         }

//         const movieGenres = [];
//         movie.genre_ids.forEach((genre) => {
//             const finding = genres.find(({ id }) => id === genre);
//             if (finding) {
//                 movieGenres.push(finding.name);
//             }
//         });

//         moviesArr.push({
//             id: movie.id,
//             name: movie.original_name ? movie.original_name : movie.original_title,
//             image: movie.backdrop_path,
//             genres: movieGenres.slice(0, 3),
//             Overview: movie.overview || "No overview available" // Provide a default value for overview if missing
//         });
//     });

//     console.log("Movies Array:", moviesArr); // Check the final 'moviesArr'
// };


// //   export const getMovies = createAsyncThunk("netflix/trending", async({type},thunkApi)=>{
// //     const {
// //         netflix : {genresLoaded},
// //     } = thunkApi.getState();
    
// //     if(!genresLoaded){
// //         await thunkApi.dispatch(getGenres());

// //     }
    
// //     const updateState = thunkApi.getState();

// //     const data = await getData(
// //             `${TMBD_BASE_URL}/trending/${type}/day?${API_KEY}`,
// //             updateState.netflix.genres,
// //             true
// //         )
// //         return data;
    
// // })

// export const getMovies = createAsyncThunk("netflix/trending", async ({ type }, thunkApi) => {
//     const { netflix: { genresLoaded } } = thunkApi.getState();

//     if (!genresLoaded) {
//         await thunkApi.dispatch(getGenres());
//     }

//     const updateState = thunkApi.getState();
//     try {
//         const data = await getData(
//             `${TMBD_BASE_URL}/trending/${type}/day?${API_KEY}`,
//             updateState.netflix.genres,
//             true
//         );

//         // thunkApi.dispatch(updateMovies(data)); // Dispatch the action to update movies

//         return data;
//     } catch (error) {
//         console.error("Error fetching movies:", error);
        
//         throw error; // Rethrow the error to propagate it to the UI
        
//         // Alternatively, you can handle the error differently or return a default value
//         // For example:
//         // return []; // Return an empty array as a fallback
        
//         // Or handle the error and dispatch an action to update the state accordingly
//         // thunkApi.dispatch(handleMoviesError(error));
//     }
// });



// const NetflixSlice =createSlice({
//     name:'netflix',
//     initialState,
//     extraReducers:(builder) =>{
//         builder.addCase(getGenres.fulfilled,(state,action)=>{
//             state.genres = action.payload;
//             state.genresLoaded = true;
//         })
//         builder.addCase(getMovies.fulfilled,(state,action)=>{
//             state.movies = action.payload;
//             state.genresLoaded = true;
            
//         })
//     }
// });

// export const store= configureStore({
//     reducer:{
//         netflix:NetflixSlice.reducer,
//     },
// })




// import { configureStore, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { API_KEY, TMBD_BASE_URL } from "../reducerEx/Apikeys";
// import axios from "axios";

// const initialState = {
//     movies: [],
//     genresLoaded: false,
//     genres: []
// };

// export const getGenres = createAsyncThunk("netflix/genres", async () => {
//     const { data: { genres } } = await axios.get(`${TMBD_BASE_URL}/genre/movie/list?${API_KEY}`);
//     return genres;
// });

// const getData = async (api, genres, paging) => {
//     const moviesArr = [];
//     for (let i = 1; moviesArr.length < 60 && i < 10; i++) {
//         const { data: { results } } = await axios.get(`${api}${paging ? `&page=${i}` : ""}`);
//         createMovieArrayFromMovieData(results, moviesArr, genres);
//     }
//     return moviesArr;
// };

// const createMovieArrayFromMovieData = (results, moviesArr, genres) => {
//     if (!results || !Array.isArray(results)) {
//         console.error("Invalid results data:", results);
//         return;
//     }

//     results.forEach((movie, index) => {
//         if (!movie || typeof movie !== 'object') {
//             console.error(`Invalid data for movie ${index + 1}:`, movie);
//             return;
//         }

//         if (!movie.id || !movie.backdrop_path) {
//             console.error(`Invalid data for movie ${index + 1}:`, movie);
//             return;
//         }

//         const movieGenres = [];
//         movie.genre_ids.forEach((genre) => {
//             const finding = genres.find(({ id }) => id === genre);
//             if (finding) {
//                 movieGenres.push(finding.name);
//             }
//         });

//         moviesArr.push({
//             id: movie.id,
//             name: movie.original_name ? movie.original_name : movie.original_title,
//             image: movie.backdrop_path,
//             genres: movieGenres.slice(0, 3),
//             Overview: movie.overview || "No overview available"
//         });
//     });
// };

// export const getMovies = createAsyncThunk("netflix/trending", async ({ type }, thunkApi) => {
//     const { netflix: { genresLoaded } } = thunkApi.getState();

//     if (!genresLoaded) {
//         await thunkApi.dispatch(getGenres());
//     }

//     const updateState = thunkApi.getState();
//     try {
//         const data = await getData(
//             `${TMBD_BASE_URL}/trending/${type}/day?${API_KEY}`,
//             updateState.netflix.genres,
//             true
//         );

//         return data;
//     } catch (error) {
//         console.error("Error fetching movies:", error);
//         throw error;
//     }
// });

// const NetflixSlice = createSlice({
//     name: 'netflix',
//     initialState,
//     extraReducers: (builder) => {
//         builder.addCase(getGenres.fulfilled, (state, action) => {
//             state.genres = action.payload;
//             state.genresLoaded = true;
//         });
//         builder.addCase(getMovies.fulfilled, (state, action) => {
//             state.movies = action.payload;
//             state.genresLoaded = true;
//         });
//     }
// });

// export const store = configureStore({
//     reducer: {
//         netflix: NetflixSlice.reducer,
//     },
// });









import { configureStore, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_KEY, TMBD_BASE_URL } from "../reducerEx/Apikeys";
import axios from "axios";

const initialState = {
  movies: [],
  genresLoaded: false,
  genres: [],
  searchQuery: "",
  moviesdata:[],
  tv:[],
  genrestv:[],
  liked:[]
};

export const getGenres = createAsyncThunk("netflix/genres", async () => {
  const { data: { genres } } = await axios.get(`${TMBD_BASE_URL}/genre/movie/list?${API_KEY}`);
  return genres;
});
// export const gettvGenres = createAsyncThunk("netflix/tvgenres", async () => {
//   const { data: { genrestv } } = await axios.get(`${TMBD_BASE_URL}/genre/tv/list?${API_KEY}`);
//   return genrestv;
  
// });
export const gettvGenres = createAsyncThunk("netflix/tvgenres", async () => {
  try {
    const response = await axios.get(`${TMBD_BASE_URL}/genre/tv/list?${API_KEY}`);
    // console.log("TV Genres API Response:", response.data);
    return response.data.genres; 
  } catch (error) {
    console.error("Error fetching TV genres:", error);
    throw error;
  }
});


const getData = async (api, genres, paging) => {
  const moviesArr = [];
  for (let i = 1; moviesArr.length < 80 && i < 10; i++) {
    const { data: { results } } = await axios.get(`${api}${paging ? `&page=${i}` : ""}`);
    createMovieArrayFromMovieData(results, moviesArr, genres);
  }
  return moviesArr;

};


const createMovieArrayFromMovieData = (results, moviesArr, genres) => {
  if (!results || !Array.isArray(results)) {
    console.error("Invalid results data:", results);
    return;
  }
  const dupli=[];
  results.forEach((movie) => {
    if (!movie || typeof movie !== 'object') {
      console.error("Invalid movie data:", movie);
      return; // Skip processing this movie if it's not an object
    }

    if (!movie.id || !movie.backdrop_path) {
      console.error("Missing ID or backdrop path for movie:", movie);
      return; // Skip processing this movie if it's missing essential data
    }

    // Check if movie ID already exists in moviesArr
    const existingMovie = moviesArr.find((m) => m.id === movie.id);
   
    if (existingMovie) {
      // console.warn("Duplicate movie ID encountered:", movie.id);
      dupli.push(movie.id)
      return; // Skip adding this movie if its ID already exists
    }

    const movieGenres = [];
    movie.genre_ids.forEach((genre) => {
      const finding = genres.find(({ id }) => id === genre);
      if (finding) {
        movieGenres.push(finding.name);
      }
    });

    moviesArr.push({
      id: movie.id,
      name: movie.original_name || movie.original_title || "",
      image: movie.backdrop_path,
      genres: movieGenres.slice(0, 5),
      overview: movie.overview || "No overview available",
      media_type: movie.media_type ,
      generids:movie.genre_ids
    });
  });
 
};

export const getMovies = createAsyncThunk("netflix/Popular", async ({ type }, thunkApi) => {
  const { netflix: { genresLoaded } } = thunkApi.getState();

  if (!genresLoaded) {
    await thunkApi.dispatch(getGenres());
  }

  const updateState = thunkApi.getState();
  try {
    const data = await getData(
      `${TMBD_BASE_URL}/trending/${type}/day?${API_KEY}`,
      updateState.netflix.genres,
      true
    );

    return data;
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
});

const getMoviedata= async (api, genres, paging, desiredCount) => {
  const moviesArr = [];
  let totalPages = 0;
  let currentPage = 1;

  do {
    const { data: { results, total_pages } } = await axios.get(`${api}${paging ? `&page=${currentPage}` : ""}`);
    totalPages = total_pages;

    createMovieArrayFromMovieData(results, moviesArr, genres);
    currentPage++;

    if (moviesArr.length >= desiredCount) {
      break; // Exit loop if desired count is reached
    }
  } while (currentPage <= Math.min(totalPages, 20)); // Limit to 20 pages to avoid excessive API calls

  return moviesArr.slice(0, desiredCount); // Return up to desiredCount movies
};

export const getMoviesDAta = createAsyncThunk("netflix/trending", async (_, thunkApi) => {
  const { netflix: { genresLoaded } } = thunkApi.getState();

  if (!genresLoaded) {
    await thunkApi.dispatch(getGenres());
  }

  const updateState = thunkApi.getState();
  try {
    const data = await getMoviedata(
      `${TMBD_BASE_URL}/trending/movie/day?${API_KEY}`,
      updateState.netflix.genres,
      true,
      400 // Fetch 400 movies
    );

    return data;
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
  
});


export const gettvDAta = createAsyncThunk("netflix/trending/tv", async (_, thunkApi) => {
  const { netflix: { genresLoaded } } = thunkApi.getState();

  if (!genresLoaded) {
    await thunkApi.dispatch(getGenres());
  }

  const updateState = thunkApi.getState();
  try {
    const data = await getMoviedata(
      `${TMBD_BASE_URL}/trending/tv/day?${API_KEY}`,
      updateState.netflix.genres,
      true,
      400 // Fetch 400 movies
    );

    return data;
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
  
});



export const getUserLikedMovies = createAsyncThunk("netflix/getLiked",async(email)=>{
  const {data:{movies}}= await axios.get(`http://localhost:5000/api/user/liked/${email}`);
  return movies
})
export const removeFromLikedMovies = createAsyncThunk("netflix/deleteLiked",async({email,movieId})=>{
  const {data:{movies}}= await axios.put(`http://localhost:5000/api/user/delete`,
    {email,movieId}
  );
  return movies
})



const NetflixSlice = createSlice({
  name: 'netflix',
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getGenres.fulfilled, (state, action) => {
      state.genres = action.payload;
      state.genresLoaded = true;
    })
    builder.addCase(gettvGenres.fulfilled, (state, action) => {
      state.genrestv= action.payload;
      state.genresLoaded = true;
      
    })
    
    builder.addCase(getMovies.fulfilled, (state, action) => {
      state.movies = action.payload;
      state.genresLoaded = true;
    })
    builder.addCase(getMoviesDAta.fulfilled, (state, action) => {
      state.moviesdata = action.payload;
      state.genresLoaded = true;
      
    })
    builder.addCase(gettvDAta.fulfilled, (state, action) => {
      state.tv = action.payload;
      state.genresLoaded = true;
      
    })
    builder.addCase(getUserLikedMovies.fulfilled, (state, action) => {
      state.liked = action.payload;
      state.genresLoaded = true;
      
    })
    builder.addCase(removeFromLikedMovies.fulfilled, (state, action) => {
      state.liked = action.payload;
      state.genresLoaded = true;
      
    })
  
  }
});
export const { setSearchQuery } = NetflixSlice.actions;
export const store = configureStore({
  reducer: {
    netflix: NetflixSlice.reducer,
  },
});










