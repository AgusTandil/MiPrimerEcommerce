import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./index.css";
import App from "./containers/App";
import Admin from "./containers/Admin";
import { Provider } from "react-redux";
import store from "./store";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.render(
  <BrowserRouter>
    <ChakraProvider>
      <React.StrictMode>
        <Switch>
          <Provider store={store}>
            <App />
          </Provider>
        </Switch>
      </React.StrictMode>
    </ChakraProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
