import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPopularMovies } from "../../store/slices/movie";
import PagePadding from "../containers/PagePadding";
import WidthContainer from "../containers/WidthContainer";

function Movies() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopularMovies());
  }, []);

  return (
    <PagePadding className="all_movies">
      <WidthContainer>
        <h1>I am the All Movies</h1>
      </WidthContainer>
    </PagePadding>
  );
}

export default Movies;
