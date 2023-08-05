import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "movie",
  initialState: {
    movieList: [],
    loading: false,
    singleMovie: {},
    filters: {
      genreId: "",
      sort,
    },
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
