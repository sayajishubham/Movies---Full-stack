import React from "react";
import { Route, Routes } from "react-router-dom";
import Addmovies from "../page/Addmovies";
import Allmovies from "../page/Allmovies";
import About from "../page/About";
import Signup from "../page/Signup";
import Signin from "../page/Signin";
import Updatemovies from "../page/Updatemovies";
import Home from "../page/Home";
import Verify from "../page/Verify";

function Mainroutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Allmovies" element={<Allmovies />}></Route>
        <Route path="/Addmovies" element={<Addmovies />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Signup" element={<Signup />}></Route>
        <Route path="/Signin" element={<Signin />}></Route>
        <Route path="/Updatemovies/:id" element={<Updatemovies />}></Route>
        <Route path="/verify" element={<Verify />}></Route>
      </Routes>
    </div>
  );
}

export default Mainroutes;
