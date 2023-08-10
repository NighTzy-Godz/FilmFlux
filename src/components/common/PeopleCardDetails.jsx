import React from "react";

function PeopleCardDetails({ title, data }) {
  return (
    <div className="people_card_details">
      <span>
        <p>{title}:</p>
      </span>
      <p> {data}</p>
    </div>
  );
}

export default PeopleCardDetails;
