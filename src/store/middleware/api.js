import * as actions from "../actions/apiActions";
import axios from "axios";

const API_KEY = "882d154fbf5b7da1c3c263a88a1d9547";
const BASE_URL = "https://api.themoviedb.org/3";
const queryParams = {
  api_key: API_KEY,
};

const api =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type !== actions.apiCallBegan.type) return next(action);

    const { urls, params, onSuccess, onError, onStart } = action.payload;

    if (onStart) dispatch({ type: onStart });

    const requests = urls.map((url) => {
      const config = {
        baseUrl: BASE_URL,
        url,
        params: queryParams,
      };

      if (params) {
        config.params = { ...queryParams, ...params };
      }

      return axios.request(config);
    });

    try {
      const responses = await Promise.all(requests);
      const responseData = responses.map((response) => response.data);
      dispatch(actions.apiCallSuccess(responseData));
      if (onSuccess) dispatch({ typeof: onSuccess, payload: responseData });
    } catch (error) {
      dispatch(actions.apiCallFailed(error.message));
      if (onError) dispatch({ type: onError, payload: error.message });
    }
  };

export default api;
