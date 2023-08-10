import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "urlHistory",
  initialState: [],
  reducers: {
    addUrlHistory: (url, action) => {
      url.push(action.payload);
    },
  },
});

export const { addUrlHistory } = slice.actions;

export default slice.reducer;
