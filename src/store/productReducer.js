import axios from "axios";
import {
  createAsyncThunk,
  createReducer,
  createAction,
} from "@reduxjs/toolkit";

export const singleProduct = createAsyncThunk("SINGLEPRODUCT", (title) => {
  
  console.log("TITLE", title)
    return axios
    .get(`/api/products/${title}`)
    .then((res) => { console.log("RES DATA reducer", res.data)
        return res.data})
    .catch((e) => console.log(e));
});

export const setProduct = createAction("SET_PRODUCT");

const initialValue = {};

export const productReducer = createReducer(initialValue, {
  [singleProduct.fulfilled]: (state, action) => state = action.payload,
//   [setProduct]: (state, action) => action.payload,
});

