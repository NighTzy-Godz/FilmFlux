import React from "react";
import PagePadding from "../containers/PagePadding";
import WidthContainer from "../containers/WidthContainer";

function Home(props) {
  return (
    <PagePadding className="home">
      <WidthContainer>
        <h1>I am the Home</h1>
      </WidthContainer>
    </PagePadding>
  );
}

export default Home;
