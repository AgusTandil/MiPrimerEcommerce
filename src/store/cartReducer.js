import * as React from "react";
import axios from "axios";
import {Product} from "../hooks/useCart"

import {
  createReducer,
  createAsyncThunk,
} from "@reduxjs/toolkit";


const initialState = [];


//GET todos los productos del carrito
export const getCart = createAsyncThunk("GET_CART", (orderId) => {
 
    })


export const addQuantityToCartProduct = createAsyncThunk(
  "ADD_QUANTITY_TO_CART_PRODUCT",
  (orderId, productId) => {
    return axios
      .put(`/api/cart/:${orderId}/:${productId}/add`)
      .then((response) => {
        // return updatedProduct --> {cuantity: 2, description:, stock, image}
      });
  }
);

export const substractQuantityToCartProduct = createAsyncThunk(
  "SUBSTRACT_QUANTITY_TO_CART_PRODUCT",
  (orderId, productId) => {
    return axios
      .put(`/api/cart/:${orderId}/:${productId}/substract`)
      .then((response) => {
        // return updatedProduct --> {cuantity: 2, description:, stock, image}
      });
  }
);
export const deleteCartProduct = createAsyncThunk(
  "ADD_QUANTITY_TO_CART_PRODUCT",
  (orderId, productId) => {
    return axios
      .put(`/api/cart/:${orderId}/:${productId}/delete`)
      .then((response) => {
        // return --> delete completado
      });
  }
);
// POR EL MOMENTO NO SE USA
export const cartReducer = createReducer(initialState, {
  [getCart.fulfilled]: (state, action) => action.payload,

  [addQuantityToCartProduct.fulfilled]: (state, action) => {
    const idx = state.findIndex((e) => e.id === action.payload.id);
    const newState = [...state];
    newState[idx].cuantity++;
    return newState;
  },
  [substractQuantityToCartProduct.fulfilled]: (state, action) => {
    const idx = state.findIndex((e) => e.id === action.payload.id);
    const newState = [...state];
    newState[idx].cuantity--;
    return newState;
  },
  [deleteCartProduct.fulfilled]: (state, action) => {
    const idx = state.findIndex((e) => e.id === action.payload.id);
    const newState = [...state];
    newState.splice(idx, 1)
    return newState;
  },
});

