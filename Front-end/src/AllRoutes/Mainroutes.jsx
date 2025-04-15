import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../page/Home";
import Addmovies from "../page/Addmovies";
import Allmovies from "../page/Allmovies";
import About from "../page/About";
import Signup from "../page/Signup";
import Signin from "../page/Signin";

function Mainroutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Addmovies" element={<Addmovies />}></Route>
        <Route path="/Addmovies" element={<Addmovies />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Signup" element={<Signup />}></Route>
        <Route path="/Signin" element={<Signin />}></Route>
      </Routes>
    </div>
  );
}

export default Mainroutes;
