import axios from "axios";
import {
  createAsyncThunk,
  createReducer,    
} from "@reduxjs/toolkit";

export const getCategory = createAsyncThunk("GET_CATEGORY", (obj) => {
  return axios
    .get(`/api/categories/${obj.sex}/${obj.cat}`)
    .then((res) => res.data)
    .catch((e) => console.log(e));
});


const initialValue = [];

export const categoryReducer = createReducer(initialValue, {
  [getCategory.fulfilled]: (state, action) => state = action.payload,
});



