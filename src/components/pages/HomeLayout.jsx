import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../common/Navbar";

function HomeLayout(props) {
  return (
    <React.Fragment>
      <Navbar />
      <Outlet />
    </React.Fragment>
  );
}

export default HomeLayout;
