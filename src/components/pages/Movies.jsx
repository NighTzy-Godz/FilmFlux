import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import movie, {
  getFilteredMovie,
  getMoviesNextPage,
  getPopularMovies,
  setMovieFilters,
  setMoviePage,
} from "../../store/slices/movie";
import PagePadding from "../containers/PagePadding";
import WidthContainer from "../containers/WidthContainer";
import MovieCard from "../common/MovieCard";

import "../../assets/css/pages/all_movies.css";
import "../../assets/css/components/pagination.css";

import ReactPaginate from "react-paginate";
import calculateItems from "../../utils/calculateItems";

import Filter from "../common/Filter";
import Column from "../containers/Column";

const PAGE_SIZE = 20;

function Movies() {
  const dispatch = useDispatch();
  const movieReducer = useSelector(
    (state) => state?.entities?.movies?.movieList
  );

  const movieParams = useSelector(
    (state) => state?.entities?.movies?.movieParams
  );

  const {
    results: movies,
    page: currPage,
    total_results: itemCount,
  } = movieReducer;

  const pageCount = itemCount / PAGE_SIZE;

  const renderMovieCards = movies?.map((movie) => {
    return (
      <React.Fragment key={movie.id}>
        <Column col={4}>
          <MovieCard data={movie} />
        </Column>
      </React.Fragment>
    );
  });

  const handlePageChange = (dataPage) => {
    const { selected } = dataPage;
    const page = selected + 1;
    dispatch(setMoviePage(page));
    dispatch(getMoviesNextPage({ ...movieParams, page }));
  };

  const handleDropDownChange = (e) => {
    dispatch(setMovieFilters(e.currentTarget.value));
  };

  const handleFilterClick = () => {
    dispatch(setMoviePage(1));
    dispatch(getFilteredMovie({ ...movieParams, page: 1 }));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getFilteredMovie(movieParams));
  }, [movieParams]);

  return (
    <PagePadding className="all_movies">
      <WidthContainer>
        <div className="title">
          <h1>Discover Latest Movies</h1>
        </div>
        <div className="all_movies_container">
          <Filter
            onDropDownChange={handleDropDownChange}
            onFilterClick={handleFilterClick}
          />
          <div className="movies_container">
            {renderMovieCards}
            <div className="pagination_container">
              <div className="result_container">
                <p>Showing {calculateItems(currPage, PAGE_SIZE, itemCount)}</p>
              </div>
              <ReactPaginate
                className="paginate"
                previousLabel="Previous"
                nextLabel="Next"
                breakLabel="..."
                pageCount={pageCount}
                initialPage={movieParams.page - 1}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                activeClassName="active"
                onPageChange={handlePageChange}
              />
            </div>
          </div>
        </div>
      </WidthContainer>
    </PagePadding>
  );
}

export default Movies;
