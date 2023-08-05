import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "people",
  initialState: {
    peopleList: [],
    loading: false,
  },

  reducers: {
    peopleRequested: (people, action) => {
      people.loading = true;
    },

    peopleRequestFailed: (people, action) => {
      people.loading = false;
    },

    peopleListRecieved: (people, action) => {
      people.peopleList = action.payload[0];
    },
  },
});

const { peopleRequested, peopleRequestFailed, peopleListRecieved } =
  slice.actions;

export default slice.reducer;
