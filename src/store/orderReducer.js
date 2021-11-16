import axios from "axios";
import {
  createReducer,
  createAsyncThunk,
} from "@reduxjs/toolkit";

const initialState = {
  activeOrder: {},
  orders: []
}

//Agregar logica de add to cart sin usuario logueado. Tmb para dispatchear en el login 

// dispatchear esta accion cuando se hace el login
export const getCurrentOrder = createAsyncThunk("GET_CURRENT_ORDER", (userId) => {
    return axios.get(`/api/orders/:${userId}?status=pending`) 
  
    .then(response => {
      return "orderID"
    })
     
    })

//ORDER REDUCER
export const orderReducer = createReducer(initialState.activeOrder, {
  [getCurrentOrder.fulfilled]: (state, action) => {
    return { ...state, activeOrder: action.payload }
  },
  });