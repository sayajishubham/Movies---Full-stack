import React from "react";
import { NavLink } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function Navbar() {
  return (
    <div className="w-screen fixed top-10 left-0 z-50">
      <div className="navbar-container grid grid-cols-3 items-center h-[7.2rem] px-[3.2rem] bg-[#6741d9] rounded-[0.9rem]">
        <div className="navbar-logo w-[40%] h-full flex items-center justify-center rounded-lg">
          <h1 className="text-white text-4xl font-bold">
            <span className="text-white-500">🍿</span>Popcorn
          </h1>
        </div>
        <div className="navbar-menu w-[100%]  h-full rounded-lg flex items-center justify-center">
          <ul className="flex gap-20  text-white font-semibold">
            <NavLink to={"/"}>
              <li className="hover:text-black cursor-pointer transition-colors duration-300">
                Home
              </li>
            </NavLink>
            <NavLink to={"/"}>
              <li className="hover:text-black cursor-pointer transition-colors duration-300">
                About
              </li>
            </NavLink>
            <NavLink to={"/"}>
              <li className="hover:text-black cursor-pointer transition-colors duration-300">
                Add Movie
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
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
          </ul>
        </div>
        <h1 className="w-[80%] text-end text-white text-[20px]">ja na</h1>
      </div>
    </div>
  );
}

export default Navbar;
