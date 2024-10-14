// src/components/ProductList.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataThunk, fetchDataSagaAction } from "../actions/dataActions";

const ProductList = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.data);

  const fetchWithThunk = () => {
    dispatch(fetchDataThunk());
  };

  const fetchWithSaga = () => {
    dispatch(fetchDataSagaAction());
  };

  return (
    <div>
      <h1>Products List</h1>
      <button onClick={fetchWithThunk}>Fetch Products with Thunk</button>
      <button onClick={fetchWithSaga}>Fetch Products with Saga</button>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {data.map((product) => (
            <div key={product.id} style={{ margin: "10px", width: "150px" }}>
              <img
                src={product.image}
                alt={product.title}
                style={{ width: "100px", height: "100px" }}
              />
              <h4>{product.title}</h4>
              <p>${product.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
