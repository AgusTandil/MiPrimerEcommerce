import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import { cartReducer } from "./cartReducer";
import { productReducer } from "./productReducer";
import { productsReducer } from "./productsReducer";
import { userLoggedReducer } from "./userLogged";
import { orderReducer } from "./orderReducer";
import { categoryReducer } from "./categoryReducer";
import { sexReducer } from "./sexReducer";
import { searchReducer } from "./searchReducer";

const store = configureStore({
  //middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    user: userLoggedReducer,
    cart: cartReducer,
    order: orderReducer,
    products: productsReducer,
    product: productReducer,
    category: categoryReducer,
    sex: sexReducer,
    search: searchReducer,
  },
});

export default store;
