import React from "react";
import PagePadding from "../containers/PagePadding";
import WidthContainer from "../containers/WidthContainer";
import BoxShadow from "../containers/BoxShadow";
import Navbar from "../common/Navbar";

function Home(props) {
  return (
    <React.Fragment>
      {/* <BoxShadow>
        <Navbar />
      </BoxShadow> */}

      <div className="home">
        <h1>Hi</h1>
      </div>
    </React.Fragment>
  );
}

export default Home;
