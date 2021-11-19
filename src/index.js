import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieDetail from "./components/movieDetail";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}></Route>
      <Route path='/movie/:id' element={<MovieDetail />} exact></Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
