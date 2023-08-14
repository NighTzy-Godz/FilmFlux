import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "nav",
  initialState: {
    navToggle: false,
  },
  reducers: {
    setNavToggle: (nav, action) => {
      nav.navToggle = action.payload;
    },
  },
});

export const { setNavToggle } = slice.actions;

export default slice.reducer;
