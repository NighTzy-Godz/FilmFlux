import React, { useEffect } from "react";

import WidthContainer from "../containers/WidthContainer";

import { useDispatch, useSelector } from "react-redux";
import { getHomeMovies } from "../../store/slices/movie";
import formatTime from "../../utils/formatTime";
import formatDate from "../../utils/formatDate";
import "../../assets/css/pages/home.css";
import useHomeMovies from "../../hooks/useHomeMovies";
import MovieRecomCard from "../common/MovieRecomCard";
import MovieCastCard from "../common/MovieCastCard";

const BACK_DROP_BASE_IMG = "https://image.tmdb.org/t/p/original/";
const POSTER_BASE_IMG = "https://image.tmdb.org/t/p/original/";

function Home() {
  let MOVIE_DETAIL_BACKDROP;
  let MOVIE_DETAIL_POSTER;

  const dispatch = useDispatch();
  const popular_movie = useSelector(
    (state) => state?.entities?.movies?.homeMovies?.popular?.results[1]
  );
  const now_playing_movies = useSelector(
    (state) => state?.entities?.movies?.homeMovies?.now_playing
  );

  const upcoming_movies = useSelector(
    (state) => state?.entities?.movies?.homeMovies?.upcoming
  );

  const { homeMovies: nowPlayingMovies } = useHomeMovies(
    now_playing_movies?.results
  );
  const { homeMovies: upComingMovies } = useHomeMovies(
    upcoming_movies?.results
  );

  const renderNowPlayingMovies = nowPlayingMovies?.map((recom) => {
    const { id, poster_path, title } = recom;
    const data = {
      id,
      profile_path: poster_path,
      original_name: title,
    };

    return (
      <React.Fragment key={recom.id}>
        <MovieCastCard data={data} />
      </React.Fragment>
    );
  });

  const renderUpComingMovies = upComingMovies?.map((recom) => {
    const { id, poster_path, title } = recom;
    const data = {
      id,
      profile_path: poster_path,
      original_name: title,
    };

    return (
      <React.Fragment key={recom.id}>
        <MovieCastCard data={data} />
      </React.Fragment>
    );
  });

  const {
    backdrop_path,
    poster_path,
    release_date,
    original_title,
    overview,

    vote_average,
  } = popular_movie || {};

  if (backdrop_path || poster_path) {
    MOVIE_DETAIL_BACKDROP = {
      background: `linear-gradient(rgba(0, 0, 0, .6), rgba(0, 0, 0, .6)), url(${
        BACK_DROP_BASE_IMG + backdrop_path
      })`,
    };

    MOVIE_DETAIL_POSTER = `${POSTER_BASE_IMG + poster_path}`;
  }

  useEffect(() => {
    dispatch(getHomeMovies());
  }, [dispatch]);
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
          <div className="home_movie_container">{renderNowPlayingMovies}</div>
        </WidthContainer>
      </div>

      <div className="home_movie_row">
        <WidthContainer>
          <h1>Upcoming Movies</h1>
          <div className="home_movie_container">{renderUpComingMovies}</div>
        </WidthContainer>
      </div>
    </React.Fragment>
  );
}

export default Home;
