import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../actions/apiActions";

const slice = createSlice({
  name: "movie",
  initialState: {
    movieList: [],
    loading: false,
    singleMovie: {},
  },
  reducers: {
    moviesRequested: (movie, action) => {
      movie.loading = true;
    },

    moviesRequestFailed: (movie, action) => {
      movie.loading = false;
    },

    movieListRecieved: (movie, action) => {
      movie.loading = false;
      movie.movieList = action.payload[0];
    },
  },
});

const { moviesRequested, moviesRequestFailed, movieListRecieved } =
  slice.actions;

export default slice.reducer;

const movieUrl = "/movie";

export const getPopularMovies = () =>
  apiCallBegan({
    urls: [`${movieUrl}/popular`],
    onStart: moviesRequested.type,
    onSuccess: movieListRecieved.type,
    onError: moviesRequestFailed.type,
  });
