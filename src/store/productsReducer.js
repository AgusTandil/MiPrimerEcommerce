import axios from "axios";
import {
  createAsyncThunk,
  createReducer,
  createAction,
} from "@reduxjs/toolkit";

export const getProducts = createAsyncThunk("PRODUCTS", () => {
  return axios
    .get("/api/products")
    .then((res) => res.data)
    .catch((e) => console.log(e));
});

export const setProducts = createAction("SET_PRODUCTS");

const initialValue = [];

export const productsReducer = createReducer(initialValue, {
  [getProducts.fulfilled]: (state, action) => action.payload,
  [setProducts]: (state, action) => action.payload,
});
