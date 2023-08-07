import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPopularMovies } from "../../store/slices/movie";
import PagePadding from "../containers/PagePadding";
import WidthContainer from "../containers/WidthContainer";
import MovieCard from "../common/MovieCard";

import "../../assets/css/pages/all_movies.css";

function Movies() {
  const dispatch = useDispatch();
  const movies = useSelector(
    (state) => state?.entities?.movies?.movieList?.results
  );

  const renderMovieCards = movies?.map((movie) => {
    return (
      <div className="column" key={movie.id}>
        <MovieCard data={movie} />
      </div>
    );
  });

  useEffect(() => {
    dispatch(getPopularMovies());
  }, []);

  return (
    <PagePadding className="all_movies">
      <WidthContainer>
        <div className="title">
          <h1>Discover All Movies</h1>
        </div>
        <div className="all_movies_container">
          <div className="filter">
            <h3>Filter HEre</h3>
          </div>
          <div className="movies_container">{renderMovieCards}</div>
        </div>
      </WidthContainer>
    </PagePadding>
  );
}

export default Movies;
