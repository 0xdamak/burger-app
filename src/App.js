import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import BurgerBuilder from "./pages/Home/BurgerBuilder";
import Orders from "./pages/Orders";
import Checkout from "./pages/Checkout";
import Auth from "./pages/Auth";
import Error from "./pages/Error";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="app" element={<Home />}>
          <Route path="" element={<BurgerBuilder />} />
          <Route path="orders" element={<Orders />} />
          <Route path="login" element={<Auth />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
