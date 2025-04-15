import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
function Navbar() {
  const SessionUserdata = JSON.parse(sessionStorage.getItem("Userlogin"));
  try {
    const { user } = jwtDecode(SessionUserdata);
    sessionStorage.setItem("role", user.role);
  } catch (error) {
    console.log(error);
  }
  const role = sessionStorage.getItem("role");
  let navigate = useNavigate();

  function logout() {
    sessionStorage.removeItem("Userlogin");
    navigate("/Signin");
  }

  return (
    <div className="w-screen fixed top-10 left-0 z-50">
      <div
        className="navbar-container w-[90%] h-[60px] 
                bg-white/25 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] 
                backdrop-blur-sm m-auto py-[5px] px-[10px] 
                flex justify-between items-center rounded-xl"
      >
        <div className="navbar-logo w-[15%] h-full flex items-center justify-center rounded-lg">
          <h1 className="text-white text-4xl font-bold">
            <span className="text-red-500">🍿</span> Popcorn
          </h1>
        </div>
        <div className="navbar-menu w-[50%] h-full rounded-lg flex items-center justify-center">
          <ul className="flex gap-20 text-white font-semibold">
            <NavLink to={"/"}>
              <li className="hover:text-purple-500 cursor-pointer transition-colors duration-300">
                Home
              </li>
            </NavLink>
            <NavLink to={"/Allmovies"}>
              <li className="hover:text-purple-500 cursor-pointer transition-colors duration-300">
                All Movies
              </li>
            </NavLink>
            {SessionUserdata && role === "admin" && (
              <NavLink to={"/Addmovies"}>
                <li className="hover:text-purple-500 cursor-pointer transition-colors duration-300">
                  Add Movies
                </li>
              </NavLink>
            )}

            <NavLink to={"/About"}>
              <li className="hover:text-purple-500 cursor-pointer transition-colors duration-300">
                About
              </li>
            </NavLink>

            <li className="hover:text-purple-500 cursor-pointer transition-colors duration-300">
              <DropdownMenu>
                <DropdownMenuTrigger className="outline-none cursor-pointer">
                  Login
                </DropdownMenuTrigger>
                <DropdownMenuContent className="z-50">
                  <DropdownMenuItem className="hover:text-purple-500 cursor-pointer transition-colors duration-300">
                    <NavLink to={"/Signin"}>Signin</NavLink>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="hover:text-purple-500 cursor-pointer transition-colors duration-300">
                    <NavLink to={"/Signup"}>Signup</NavLink>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={logout}
                    className="hover:text-purple-500 cursor-pointer transition-colors duration-300"
                  >
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
          </ul>
        </div>
        {/* <h1 className="w-[10%] text-[20px] text-white">
          Hey, {SessionUserdata ? `${SessionUserdata.Username}` : "Guest"}
        </h1> */}
      </div>
    </div>
  );
}

export default Navbar;
