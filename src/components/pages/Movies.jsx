import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMoviesNextPage, getPopularMovies } from "../../store/slices/movie";
import PagePadding from "../containers/PagePadding";
import WidthContainer from "../containers/WidthContainer";
import MovieCard from "../common/MovieCard";

import "../../assets/css/pages/all_movies.css";
import "../../assets/css/components/pagination.css";

import ReactPaginate from "react-paginate";
import calculateItems from "../../utils/calculateItems";

const PAGE_SIZE = 20;
function Movies() {
  const dispatch = useDispatch();
  const movieReducer = useSelector(
    (state) => state?.entities?.movies?.movieList
  );

  const {
    results: movies,
    page: currPage,
    total_results: itemCount,
  } = movieReducer;

  const pageCount = itemCount / PAGE_SIZE;

  const renderMovieCards = movies?.map((movie) => {
    return (
      <div className="column" key={movie.id}>
        <MovieCard data={movie} />
      </div>
    );
  });

  const handlePageChange = (dataPage) => {
    const { selected } = dataPage;
    const page = selected + 1;

    dispatch(getMoviesNextPage({ page }));
  };

  useEffect(() => {
    dispatch(getPopularMovies());
  }, []);

  return (
    <PagePadding className="all_movies">
      <WidthContainer>
        <div className="title">
          <h1>Discover Latest Movies</h1>
        </div>
        <div className="all_movies_container">
          <div className="filter">
            <h3>Filter HEre</h3>
          </div>
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
