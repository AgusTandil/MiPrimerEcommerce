import axios from "axios";
import {
  createAsyncThunk,
  createReducer,
  createAction,
} from "@reduxjs/toolkit";

export const searchProducts = createAsyncThunk("SEARCH_PRODUCTS", (title) => {
  const value = title.target.value;
  return axios
    .get(`api/search/${value}`)
    .then((res) => res.data)
    .catch((e) => console.log(e));
});

const initialValue = [];

export const searchReducer = createReducer(initialValue, {
  [searchProducts.fulfilled]: (state, action) => action.payload,
});
