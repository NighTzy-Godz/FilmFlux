import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getFilteredMovie,
  getMoviesNextPage,
  setMovieFilters,
  setMoviePage,
} from "../../store/slices/movie";
import ReactPaginate from "react-paginate";
import calculateItems from "../../utils/calculateItems";

import PagePadding from "../containers/PagePadding";
import WidthContainer from "../containers/WidthContainer";
import MovieCard from "../common/MovieCard";
import Filter from "../common/Filter";
import Column from "../containers/Column";

import "../../assets/css/pages/all_movies.css";
import "../../assets/css/components/pagination.css";
import Loader from "../common/Loader";

const PAGE_SIZE = 20;

function Movies() {
  const [movieFilter, setMovieFilter] = useState("popularity.desc");
  const dispatch = useDispatch();

  const movieReducer = useSelector((state) => state.entities.movies.movieList);
  const movieParams = useSelector((state) => state.entities.movies.movieParams);
  const loading = useSelector((state) => state.entities.movies.loading);

  const {
    results: movies,
    page: currPage,
    total_results: itemCount,
  } = movieReducer;

  const pageCount = Math.ceil(itemCount / PAGE_SIZE);

  const renderMovieCards = movies?.map((movie) => (
    <Column col={4} key={movie.id}>
      <MovieCard data={movie} />
    </Column>
  ));

  const handlePageChange = ({ selected }) => {
    const page = selected + 1;
    dispatch(setMoviePage(page));
    dispatch(getMoviesNextPage({ ...movieParams, page }));
  };

  const handleDropDownChange = (e) => {
    setMovieFilter(e.currentTarget.value);
  };

  const handleFilterClick = () => {
    dispatch(setMoviePage(1));
    dispatch(setMovieFilters(movieFilter));
    dispatch(
      getFilteredMovie({ ...movieParams, sort_by: movieFilter, page: 1 })
    );
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getFilteredMovie(movieParams));
  }, [dispatch, movieParams]);

  if (loading) return <Loader />;

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
                forcePage={currPage - 1}
                marginPagesDisplayed={2}
                pageRangeDisplayed={3}
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
