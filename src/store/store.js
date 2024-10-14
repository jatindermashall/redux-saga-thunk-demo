// src/store/store.js
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import dataReducer from "../reducers/dataReducer";
import rootSaga from "../sagas/dataSaga";

const sagaMiddleware = createSagaMiddleware();

// Create store using configureStore from Redux Toolkit
const store = configureStore({
  reducer: {
    data: dataReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: true }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
