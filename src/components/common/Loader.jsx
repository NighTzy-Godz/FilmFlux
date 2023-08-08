import React from "react";
import "../../assets/css/components/loader.css";
import WidthContainer from "../containers/WidthContainer";

function Loader(props) {
  return (
    <div className="loading_container">
      <WidthContainer>
        <div className="loader"></div>
      </WidthContainer>
    </div>
  );
}

export default Loader;
