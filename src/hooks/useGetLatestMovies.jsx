import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getLatestMovies } from "../store/slices/movie";

function useGetLatestMovies(props) {
  const [latestMovies, setLatestMovies] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLatestMovies());
  }, []);
}

export default useGetLatestMovies;
