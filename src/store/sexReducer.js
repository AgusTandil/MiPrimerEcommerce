import axios from "axios";
import {
  createAsyncThunk,
  createReducer,    
} from "@reduxjs/toolkit";

export const getSex = createAsyncThunk("GET_CATEGORY", (sex) => {
  return axios
    .get(`/api/categories/${sex}`)
    .then((res) => { console.log("RES DATA CAT", res.data)
    return res.data})
    .catch((e) => console.log(e));
});


const initialValue = [];

export const sexReducer = createReducer(initialValue, {
  [getSex.fulfilled]: (state, action) => state = action.payload,
});
