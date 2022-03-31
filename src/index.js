import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { Coin } from "./routes/Coin";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<App />}></Route>
      <Route path="/coins" element={<Coin />}></Route>
      <Route path="/coins/:coinId" element={<Coin />}></Route>
    </Routes>
  </BrowserRouter>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
