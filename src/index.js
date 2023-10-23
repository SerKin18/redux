import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { configureStore} from "@reduxjs/toolkit";
import "./index.css";
import App from "./components/App";
import reducer from "./reduser";

const store = configureStore({ reducer });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
