import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { StyledEngineProvider } from "@mui/material/styles";
import App from "./component/app";
import { Provider } from "react-redux";
import store from "./store.js";
import { BrowserRouter } from "react-router-dom";

let rerender = () => {
  ReactDOM.render(
    <StyledEngineProvider injectFirst>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </StyledEngineProvider>,
    document.getElementById("root")
  );
};

rerender();

store.subscribe(() => {
  rerender();
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
