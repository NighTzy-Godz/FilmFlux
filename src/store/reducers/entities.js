import { combineReducers } from "@reduxjs/toolkit";
import movieReducers from "../slices/movie";
import peopleReducers from "../slices/people";

export default combineReducers({
  movies: movieReducers,
  people: peopleReducers,
});
