import { combineReducers } from "@reduxjs/toolkit";
import movieReducers from "../slices/movie";
import peopleReducers from "../slices/people";
import urlHistoryReducers from "../slices/urlHistory";
import navReducers from "../slices/nav";
export default combineReducers({
  movies: movieReducers,
  people: peopleReducers,
  urlHistory: urlHistoryReducers,
  nav: navReducers,
});
