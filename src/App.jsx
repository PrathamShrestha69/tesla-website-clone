import React from "react";
import Navbars from "./component/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./component/Hero";
import SignIn from "./component/SignIn";

const App = () => {
  return (
    <div>
      <Router>
        <Navbars />
        <Hero />
        <div className="absolute">
          <Routes>
            <Route path="/signin" element={<SignIn />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
