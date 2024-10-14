// src/index.js
import React from "react";
import ReactDOM from "react-dom/client"; // Import from 'react-dom/client' instead of 'react-dom'
import { Provider } from "react-redux";
import store from "./store/store";
import App from "./App";

// Create a root using createRoot instead of ReactDOM.render
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
