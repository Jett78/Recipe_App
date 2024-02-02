import React from "react";
import Navbar from "./components/Navbar";
import { Home } from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Recipes from "./pages/Recipes";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="body">
        <Routes>
        <Route index element={<Home />} />
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/Recipes" element={<Recipes />}></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
