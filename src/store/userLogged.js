import { createReducer, createAction } from "@reduxjs/toolkit";

const initialState = {};

export const userLogged = createAction("SET_USERLOGGED");

export const userLoggedReducer = createReducer(initialState, (builder) => {
  builder.addCase(userLogged, (state, action) => {
    return (state = action.payload);
  });
});
