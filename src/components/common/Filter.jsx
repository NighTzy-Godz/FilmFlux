import React from "react";
import filterOption from "../../data/filterOption";
import DropDown from "./DropDown";
import Button from "./Button";
import "../../assets/css/components/filter.css";

function Filter({ onDropDownChange, onFilterClick }) {
  return (
    <div className="filter">
      <h2>Filter</h2>
      <DropDown
        label="Sort By"
        onDropdownSelect={onDropDownChange}
        data={filterOption}
      />

      <Button eventHandler={onFilterClick}>Search</Button>
    </div>
  );
}

export default Filter;
