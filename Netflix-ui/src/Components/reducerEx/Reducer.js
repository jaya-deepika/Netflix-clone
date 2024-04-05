// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// // import {API_KEY} from './Apikeys'



// export const mov = createAsyncThunk("netflix", async () => {
// const res = await fetch(
//   `https://api.themoviedb.org/3/discover/movie?api_key=51717ff1faf826e345df41ac80413def&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`
// );
// console.log(res)
// return res.json();

// });
// // export const mov = createAsyncThunk("netflix", async (_,thunkApi) => {
// //   const {data:{res}}=await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=51717ff1faf826e345df41ac80413def&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`);
// //   console.log(res)
// //   });

// const list = createSlice({
//         name: "list",
//         initialState: {
//             isLoading: false,
//             movies: [],
//         },
//        extraReducers:(builder)=>{
//         builder.addCase(mov.fulfilled,(state,action)=>{
//             state.movies=action.payload
//            state.isLoading=true
//             console.log(state.movies)
//         })
        
//        },
//         reducers: {},
//         });

// export default list.reducer;