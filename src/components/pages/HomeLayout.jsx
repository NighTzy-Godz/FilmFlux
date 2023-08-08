import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../common/Navbar";
import BoxShadow from "../containers/BoxShadow";

function HomeLayout() {
  return (
    <React.Fragment>
      <Navbar />

      <Outlet />
    </React.Fragment>
  );
}

export default HomeLayout;
