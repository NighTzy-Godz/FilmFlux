import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../actions/apiActions";

const slice = createSlice({
  name: "people",
  initialState: {
    peopleList: [],
    loading: false,
    personDetail: {},
    peopleParams: {
      page: 1,
    },
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
    personDetailsRecieved: (person, action) => {
      person.personDetail = action.payload[0];
      person.personDetail.credits = action.payload[1];
    },

    setPeopleNextPage: (person, action) => {
      person.peopleList = action.payload[0];
    },

    setPersonPage: (person, action) => {
      person.peopleParams.page = action.payload;
    },
  },
});

export const { setPersonPage } = slice.actions;

const {
  peopleRequested,
  peopleRequestFailed,
  peopleListRecieved,
  personDetailsRecieved,
} = slice.actions;

const personUrl = "/person";
export const getCastDetail = (castId) =>
  apiCallBegan({
    urls: [`${personUrl}/${castId}`, `${personUrl}/${castId}/combined_credits`],
    onStart: peopleRequested.type,
    onSuccess: personDetailsRecieved.type,
    onError: peopleRequestFailed.type,
  });

export const getPopularPeople = (params) =>
  apiCallBegan({
    urls: [`${personUrl}/popular`],
    params,
    onStart: peopleRequested.type,
    onSuccess: peopleListRecieved.type,
    onError: peopleRequestFailed.type,
  });

export default slice.reducer;
