import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../../assets/css/components/people_card.css";
import PeopleCardDetails from "./PeopleCardDetails";

const BASE_IMG = "https://image.tmdb.org/t/p/w500";

function PeopleCard({ data }) {
  const revealGender = (gender) => {
    return gender === 1 ? "Female" : "Male";
  };

  const { id, gender, profile_path, name, known_for_department } = data;
  return (
    <div className="people_card">
      <Link className="people_card_img" to={`/people/${id}`}>
        <img src={BASE_IMG + profile_path} alt="" loading="lazy" />
      </Link>
      <div className="people_card_container">
        <h3 className="name">{name}</h3>
        <PeopleCardDetails title="Gender" data={revealGender(gender)} />
        <PeopleCardDetails title="Known For" data={known_for_department} />
      </div>
    </div>
  );
}

PeopleCard.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    gender: PropTypes.number,
    profile_path: PropTypes.string,
    name: PropTypes.string,
    known_for_department: PropTypes.string,
  }),
};

export default PeopleCard;
