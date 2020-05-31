const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_HOMEPAGE_FETAILS_SUCCESS":
      return action.payload;

    default:
      return state;
  }
};
