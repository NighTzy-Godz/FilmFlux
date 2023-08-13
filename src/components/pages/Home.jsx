import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import WidthContainer from "../containers/WidthContainer";
import { getHomeMovies } from "../../store/slices/movie";
import formatTime from "../../utils/formatTime";
import formatDate from "../../utils/formatDate";
import "../../assets/css/pages/home.css";
import useHomeMovies from "../../hooks/useHomeMovies";
import MovieRecomCard from "../common/MovieRecomCard";
import MovieCastCard from "../common/MovieCastCard";
import Loader from "../common/Loader";

const BACK_DROP_BASE_IMG = "https://image.tmdb.org/t/p/original/";
const POSTER_BASE_IMG = "https://image.tmdb.org/t/p/original/";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHomeMovies());
  }, [dispatch]);

  const { popular, now_playing, upcoming } = useSelector(
    (state) => state.entities.movies.homeMovies
  );

  const loading = useSelector((state) => state.entities.movies.loading);

  const renderMovies = (movies) =>
    movies?.results.map((movie) => (
      <React.Fragment key={movie.id}>
        <MovieCastCard
          data={{
            id: movie.id,
            profile_path: movie.poster_path,
            original_name: movie.title,
          }}
        />
      </React.Fragment>
    ));

  const {
    backdrop_path,
    poster_path,
    release_date,
    original_title,
    overview,
    vote_average,
  } = popular?.results[1] || {};

  const MOVIE_DETAIL_BACKDROP =
    backdrop_path || poster_path
      ? {
          background: `linear-gradient(rgba(0, 0, 0, .6), rgba(0, 0, 0, .6)), url(${
            BACK_DROP_BASE_IMG + backdrop_path
          })`,
        }
      : {};

  const MOVIE_DETAIL_POSTER = `${POSTER_BASE_IMG + poster_path}`;

  if (loading) return <Loader />;
  return (
    <React.Fragment>
      <div className="movie_details" style={MOVIE_DETAIL_BACKDROP}>
        <WidthContainer className="movie_details_container">
          <div className="movie_details_poster">
            <img src={MOVIE_DETAIL_POSTER} alt="" />
          </div>
          <div className="movie_details_content">
            <div className="movie_title">
              <h1>{original_title}</h1>
            </div>
            <div className="movie_subDetails">
              <div className="movie_subdDetails_container">
                <span>
                  <p>Ratings:</p>
                </span>
                <p> {vote_average?.toFixed(1)} Stars</p>
              </div>
              <div className="movie_subdDetails_container">
                <span>
                  <p>Release Date:</p>
                </span>
                <p> {formatDate(release_date)}</p>
              </div>
            </div>
            <div className="movie_overview">
              <h1>Overview</h1>
              <p>{overview}</p>
            </div>
          </div>
        </WidthContainer>
      </div>
      <div className="home_movie_row">
        <WidthContainer>
          <h1>Now Playing Movies</h1>
          <div className="home_movie_container">
            {renderMovies(now_playing)}
          </div>
        </WidthContainer>
      </div>
      <div className="home_movie_row">
        <WidthContainer>
          <h1>Upcoming Movies</h1>
          <div className="home_movie_container">{renderMovies(upcoming)}</div>
        </WidthContainer>
      </div>
    </React.Fragment>
  );
}

export default Home;
