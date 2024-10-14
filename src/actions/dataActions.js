// src/actions/dataActions.js
export const FETCH_DATA_REQUEST = "FETCH_DATA_REQUEST";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

// Thunk action creator for fetching data (Fake Store API)
export const fetchDataThunk = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_DATA_REQUEST });
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      dispatch({ type: FETCH_DATA_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: FETCH_DATA_FAILURE, error });
    }
  };
};

// Action for saga to catch
export const fetchDataSagaAction = () => ({
  type: FETCH_DATA_REQUEST,
});
