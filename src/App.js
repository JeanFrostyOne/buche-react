import { Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import FullProduct from "./pages/FullProduct";
import Cart from "./pages/Cart";
import { useState } from "react";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/:id"
          element={<FullProduct  />}
        />
        <Route
          path="/cart"
          element={<Cart />}
        />
      </Routes>
    </div>
  );
}

export default App;
