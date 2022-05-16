import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { makeServer } from "./server";
import { UserDetailContextProvider } from "./context/index";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <UserDetailContextProvider>
    <App />
    </UserDetailContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
