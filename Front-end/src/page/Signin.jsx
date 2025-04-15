import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

function Signin() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let navigate = useNavigate();

  async function handlesigninsubmit(e) {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://127.0.0.1:8080/auth/signin",
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );

      sessionStorage.setItem("userToken", res.data.userToken);
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div>
      <div className="signup-user w-[500px] h-[450px] rounded-md border-[1px] absolute translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%]">
        <div className="signup-container p-[10px] w-[100%] h-[100%]">
          <div className="signup-header w-full h-[80px] flex justify-center items-center">
            <h1 className="text-white text-4xl font-bold">
              <span className="text-red-500">🍿</span> Popcorn
            </h1>
          </div>

          <div>
            <h2 className="logo-title text-[23px] text-[White] text-center pb-[2px]">
              Sign In
            </h2>
            <h4 className="logo-title text-[16px] text-center pb-[10px] text-[#768492]">
              Login to stay connected.
            </h4>
          </div>

          <div className="w-[100%] h-[55%]">
            <form onSubmit={handlesigninsubmit}>
              <label
                htmlFor="Email"
                className="text-[16px] text-[White] logo-title"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="name@gmail.com"
                name="Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="w-full mt-1 bg-[#f3f6fd] h-[46px] border border-[#DCDDDF] text-[#768492] rounded-sm outline-none p-3 mb-[8px]"
                required
              />
              <label
                htmlFor="Password"
                className="text-[16px] text-[White] logo-title"
              >
                Password <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                placeholder="************"
                name="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className="w-full mt-1 bg-[#f3f6fd] h-[46px] border border-[#DCDDDF] text-[#768492] rounded-sm outline-none p-3 mb-[15px]"
                required
              />
              <button
                type="submit"
                className="block mx-auto px-[6px] py-[12px] bg-[#1F1C2F] text-[#FFFFFF] rounded-sm text-[16px] logo-title cursor-pointer"
              >
                Sign In
              </button>
            </form>
          </div>

          <p className="text-center text-[#768492] text-[16px] mt-[10px]">
            Don't have an Account?{" "}
            <Link to="/Signup" className="logo-title text-[#1F1C2F] font-bold">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signin;
