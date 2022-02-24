import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Live from "./pages/LiveApp/Live";
import BurgerBuilder from "./pages/LiveApp/BurgerBuilder/BurgerBuilder";
import Orders from "./pages/LiveApp/Orders/Orders";
import Login from "./pages/Login/Login";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="app" element={<Live />}>
          <Route path="" element={<BurgerBuilder />} />
          <Route path="orders" element={<Orders />} />
          <Route path="login" element={<Login />} />
        </Route>
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
}

export default App;
