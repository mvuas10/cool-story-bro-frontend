//3. Add homepage actions:
//Pull information from API

import { apiUrl } from "../../config/constants";
import axios from "axios";

export const getHomePagesThunk = () => {
  return async (dispatch, getState) => {
    const response = await axios.get(`${apiUrl}/homepages`);
    // console.log(response.data);
    dispatch({ type: "FETCH_HOMEPAGES_SUCCESS", payload: response.data });
  };
};
