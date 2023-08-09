import React from "react";
import PropTypes from "prop-types";

function DropDown({ label, data, onDropdownSelect }) {
  return (
    <div className="drop_down">
      <label>{label}</label>
      <select onChange={onDropdownSelect}>
        {data.map((item) => {
          return (
            <option key={item.id} value={item.value}>
              {item.name}
            </option>
          );
        })}
      </select>
    </div>
  );
}

DropDown.propTypes = {
  label: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  onDropdownSelect: PropTypes.func.isRequired,
};

export default DropDown;
