import "./assets/Style.css";
import React from "react";
import ReactDOM from "react-dom/client";
/* import { BrowserRouter, Routes, Route } from "react-router-dom"; */
import { Home } from "./Page/Home";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
