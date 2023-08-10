import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../actions/apiActions";

const slice = createSlice({
  name: "movie",
  initialState: {
    movieParams: {
      sort_by: "popularity.desc",
    },
    movieList: [],
    loading: false,
    singleMovie: {},
    searchResults: [],
    searchTerm: "",
    searchSnippetToggle: false,
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

    movieDetailsRecieved: (movie, action) => {
      movie.loading = false;
      movie.singleMovie = action.payload[0];
      movie.singleMovie.casts = action.payload[1];
      movie.singleMovie.recommendations = action.payload[2];
      movie.singleMovie.socials = action.payload[3];
    },

    movieSearchedRecieved: (movie, action) => {
      movie.loading = false;
      movie.searchResults = action.payload[0];
    },

    movieFilteredRecieved: (movie, action) => {
      movie.loading = false;
      movie.movieList = action.payload[0];
    },

    setSearchSnippet: (movie, action) => {
      movie.searchSnippetToggle = action.payload;
    },
    setMovieFilters: (movie, action) => {
      movie.movieParams.sort_by = action.payload;
    },
  },
});

export const { setMovieFilters, setSearchSnippet } = slice.actions;

const {
  moviesRequested,
  moviesRequestFailed,
  movieListRecieved,
  movieDetailsRecieved,
  movieSearchedRecieved,
  movieFilteredRecieved,
} = slice.actions;

export default slice.reducer;

const movieUrl = "/movie";

export const getPopularMovies = () =>
  apiCallBegan({
    urls: [`${movieUrl}/popular`],
    onStart: moviesRequested.type,
    onSuccess: movieListRecieved.type,
    onError: moviesRequestFailed.type,
  });

export const getMovieDetails = (movieId) =>
  apiCallBegan({
    urls: [
      `${movieUrl}/${movieId}`,
      `${movieUrl}/${movieId}/credits`,
      `${movieUrl}/${movieId}/recommendations`,
      `${movieUrl}/${movieId}/external_ids`,
    ],

    onStart: moviesRequested.type,
    onSuccess: movieDetailsRecieved.type,
    onError: moviesRequestFailed.type,
  });

export const getMoviesNextPage = (params) =>
  apiCallBegan({
    urls: [`discover/${movieUrl}`],
    params,
    onStart: moviesRequested.type,
    onSuccess: movieListRecieved.type,
    onError: moviesRequestFailed.type,
  });

export const getSearchedMovie = (searchTerm) =>
  apiCallBegan({
    urls: [`/search/movie`],
    params: { query: searchTerm },

    onSuccess: movieSearchedRecieved.type,
    onError: moviesRequestFailed.type,
  });

export const getFilteredMovie = (params) =>
  apiCallBegan({
    urls: [`/discover/${movieUrl}`],
    params,
    onStart: moviesRequested.type,
    onSuccess: movieFilteredRecieved.type,
    onError: moviesRequestFailed.type,
  });
