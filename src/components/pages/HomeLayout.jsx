import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../common/Navbar";

import { useDispatch } from "react-redux";
import { addUrlHistory } from "../../store/slices/urlHistory";

function HomeLayout() {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addUrlHistory(location.pathname));
  }, [location.pathname]);

  return (
    <React.Fragment>
      <Navbar />

      <Outlet />
    </React.Fragment>
  );
}

export default HomeLayout;
