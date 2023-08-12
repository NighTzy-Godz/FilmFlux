import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getMovieDetails } from "../../store/slices/movie";
import WidthContainer from "../containers/WidthContainer";
import ButtonLink from "../common/ButtonLink";
import "../../assets/css/pages/movie_details.css";
import formatTime from "../../utils/formatTime";
import useMovieCasts from "../../hooks/useMovieCasts";
import MovieCastCard from "../common/MovieCastCard";
import FlexCombo from "../containers/FlexCombo";
import MovieSocial from "../common/MovieSocial";
import Divider from "../containers/Divider";
import MovieSubInfo from "../common/MovieSubInfo";
import formatDate from "../../utils/formatDate";
import formatCurrency from "../../utils/formatCurrency";
import MovieRecomCard from "../common/MovieRecomCard";
import useMovieRecommendation from "../../hooks/useMovieRecommendation";
import Loader from "../common/Loader";

const BACK_DROP_BASE_IMG = "https://image.tmdb.org/t/p/original/";
const POSTER_BASE_IMG = "https://image.tmdb.org/t/p/original/";

function MovieDetails() {
  const { movieId } = useParams();
  const dispatch = useDispatch();
  const { singleMovie, loading } = useSelector(
    (state) => state.entities.movies
  );

  const {
    backdrop_path,
    budget,
    revenue,
    genres,
    poster_path,
    runtime,
    original_title,
    overview,
    vote_average,
    credits,
    socials,
    release_date,
    status,
    recommendations,
    casts = [],
  } = singleMovie;

  const { movieCasts } = useMovieCasts(casts);
  const { movieRecommendation } = useMovieRecommendation(
    recommendations?.results
  );

  const MOVIE_DETAIL_BACKDROP =
    backdrop_path || poster_path
      ? {
          background: `linear-gradient(rgba(0, 0, 0, .6), rgba(0, 0, 0, .6)), url(${
            BACK_DROP_BASE_IMG + backdrop_path
          })`,
        }
      : {};

  const MOVIE_DETAIL_POSTER = `${POSTER_BASE_IMG + poster_path}`;

  const renderGenres = genres?.map((genre) => (
    <li key={genre.id}>
      <p>{genre.name} | </p>
    </li>
  ));

  const renderCasts = movieCasts?.map((cast) => (
    <React.Fragment key={cast.id}>
      <MovieCastCard data={cast} />
    </React.Fragment>
  ));

  const renderMovieRecom = movieRecommendation?.map((recom) => (
    <React.Fragment key={recom.id}>
      <MovieRecomCard data={recom} />
    </React.Fragment>
  ));

  useEffect(() => {
    dispatch(getMovieDetails(movieId));
    window.scrollTo(0, 0);
  }, [movieId]);

  if (loading) return <Loader />;

  return (
    <React.Fragment>
      <div className="movie_details_nav">
        <WidthContainer>
          <ButtonLink path="/movies">
            <i className="fa-solid fa-angles-left" />
            Go back to movies
          </ButtonLink>
        </WidthContainer>
      </div>

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
                  <p>Runtime:</p>
                </span>
                <p> {formatTime(runtime)}</p>
              </div>
              <div className="movie_subdDetails_container">
                <span>
                  <p>Genres:</p>
                </span>
                <ul> {renderGenres}</ul>
              </div>
            </div>

            <div className="movie_overview">
              <h1>Overview</h1>
              <p>{overview}</p>
            </div>
          </div>
        </WidthContainer>
      </div>

      <div className="movie_subContent">
        <WidthContainer>
          <div className="movie_casts_title">
            <h1>Major Casts</h1>
          </div>
          <div className="movie_subContent_container">
            <div className="movie_casts_container">
              {renderCasts}
              <Link className="see_all_casts">See All Casts</Link>
            </div>
            <div className="movie_other_content">
              <FlexCombo className="movie_socials">
                <MovieSocial
                  icon="fa-brands fa-facebook"
                  path={socials?.facebook_id}
                />
                <MovieSocial
                  icon="fa-brands fa-instagram"
                  path={socials?.instagram_id}
                />
                <MovieSocial
                  icon="fa-brands fa-twitter"
                  path={socials?.twitter_id}
                />
              </FlexCombo>
              <Divider />
              <div className="movie_subInfo_container">
                <MovieSubInfo
                  title="Status"
                  data={`${status}  (${formatDate(release_date)})`}
                />
                <MovieSubInfo title="Budget" data={formatCurrency(budget)} />
                <MovieSubInfo title="Revenue" data={formatCurrency(revenue)} />
              </div>
            </div>
          </div>
        </WidthContainer>
      </div>

      <div className="movie_recom">
        <WidthContainer>
          <h1 style={{ marginBottom: "20px", color: "var(--main-color)" }}>
            {movieRecommendation.length !== 0
              ? "Recommended Movies"
              : "No Recommended Movies"}
          </h1>
          <div className="movie_recom_container">{renderMovieRecom}</div>
        </WidthContainer>
      </div>
    </React.Fragment>
  );
}

export default MovieDetails;
