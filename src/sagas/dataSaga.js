// src/sagas/dataSaga.js
import { call, put, takeLatest } from "redux-saga/effects";
import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
} from "../actions/dataActions";

function* fetchDataSaga() {
  try {
    const response = yield call(fetch, "https://fakestoreapi.com/products");
    const data = yield response.json();
    yield put({ type: FETCH_DATA_SUCCESS, payload: data });
  } catch (error) {
    yield put({ type: FETCH_DATA_FAILURE, error });
  }
}

export default function* watchDataSaga() {
  yield takeLatest(FETCH_DATA_REQUEST, fetchDataSaga);
}
