import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCastDetail } from "../../store/slices/people";
import MovieRecomCard from "../common/MovieRecomCard";
import formatDate from "../../utils/formatDate";
import "../../assets/css/pages/cast_details.css";
import WidthContainer from "../containers/WidthContainer";
import Divider from "../containers/Divider";
import Loader from "../common/Loader";

const POSTER_BASE_IMG = "https://image.tmdb.org/t/p/original/";

function CastDetail() {
  const { castId } = useParams();
  const dispatch = useDispatch();
  const castDetails = useSelector(
    (state) => state.entities.people.personDetail
  );

  const loading = useSelector((state) => state.entities.people.loading);

  const {
    birthday,
    name,
    biography,
    profile_path,
    known_for_department,
    place_of_birth,
    credits,
  } = castDetails;

  const formattedBiography =
    biography || "Biography for this person is not found on our database.";

  const filterKnownFor = credits?.cast?.filter((movie) => movie.backdrop_path);

  const renderKnownFor = filterKnownFor?.map((credit) => (
    <React.Fragment key={credit.id}>
      <MovieRecomCard
        data={{
          id: credit.id,
          poster_path: credit.poster_path,
          original_name: credit.original_name,
          title: credit.title,
        }}
      />
    </React.Fragment>
  ));

  useEffect(() => {
    dispatch(getCastDetail(parseInt(castId)));
  }, [castId]);

  if (loading) return <Loader />;

  return (
    <div className="person_details">
      <WidthContainer>
        <div className="person_detail_container">
          <div className="detail_left">
            <div className="person_img">
              <img src={`${POSTER_BASE_IMG + profile_path}`} alt="" />
            </div>
            <div className="person_title">
              <h1>Personal Info</h1>
              <Divider />
            </div>
            <div className="person_info">
              <div className="person_info_container">
                <h3>Known For</h3>
                <p>{known_for_department}</p>
              </div>
              <div className="person_info_container">
                <h3>Birthday</h3>
                <p>{formatDate(birthday)}</p>
              </div>
              <div className="person_info_container">
                <h3>Place of Birth</h3>
                <p>{place_of_birth || "No Birthplace provided."}</p>
              </div>
            </div>
          </div>
          <div className="detail_right">
            <div className="person_name">
              <h1>{name}</h1>
            </div>
            <div className="person_biography">
              <h4>Biography</h4>
              <p dangerouslySetInnerHTML={{ __html: formattedBiography }}></p>
            </div>
            <div className="person_knownFor">
              <h2>Other Movies</h2>
              <div className="person_knownFor_container">{renderKnownFor}</div>
            </div>
          </div>
        </div>
      </WidthContainer>
    </div>
  );
}

export default CastDetail;
