import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"
function Signup() {

   let [Username,setusername]=useState("");
   let [Email,setEmail]=useState("");
   let [Password,setPasword]=useState("");


  let navigate=useNavigate();

   function handlesignupsubmit(e){
    e.preventDefault();
  
   axios.post(`${import.meta.env.VITE_Base_URL}/api/user/signup`,{
    Username,Email,Password
   }).then((res)=>{
    console.log(res.data.message);
   navigate("/Signin");
   }).catch((err)=>{
    console.log(err.response.data.message)
   })

   }




  return (
    <div>
      <div className='signup-user w-[500px] h-[500px]  rounded-md border-[1px] absolute translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%]'>
        <div className='signup-container p-[10px]  w-[100%] h-[100%]'>
          <div className='signup-header w-full h-[80px]  flex justify-center items-center '>
            <h1 className="text-white text-4xl font-bold">
              <span className="text-red-500">.</span> Movie
            </h1>
          </div>
          <div className=''>
            <h2 className='logo-title text-[23px] text-[White] text-center pb-[2px]'>Sign Up</h2>
            <h4 className='logo-title text-[16px] text-center pb-[10px] text-[#768492]'>Create your account.</h4>
          </div>
          <div className='w-[100%] h-[62%] '>
            <form onSubmit={handlesignupsubmit}>
              <label htmlFor="Username" className='text-[16px] text-[White] logo-title'>Username <span className='text-red-500'>*</span></label>
              <br />
              <input type="text" placeholder='Username...' name='Username' value={Username} onChange={(e)=>{setusername(e.target.value)}} className='w-full mt-1 bg-[#f3f6fd] h-[46px] leading-[30px] border border-[#DCDDDF] text-[#768492] rounded-sm outline-none p-3 mb-[8px]' required />
              <label htmlFor="Email" className='text-[16px] text-[White] logo-title'>Email <span className='text-red-500'>*</span></label>
              <br />
              <input type="email" placeholder='name@gmail.com' name='Email' value={Email} onChange={(e)=>{setEmail(e.target.value)}} className='w-full mt-1 bg-[#f3f6fd] h-[46px] leading-[30px] border border-[#DCDDDF] text-[#768492] rounded-sm outline-none p-3 mb-[8px]' required />
              <label htmlFor="Password" className='text-[16px] text-[White] logo-title'>New Password <span className='text-red-500'>*</span></label>
              <br />
              <input type="password" placeholder='************' name='Password' value={Password} onChange={(e)=>{setPasword(e.target.value)}} className='w-full mt-1 bg-[#f3f6fd] h-[46px] leading-[30px] border border-[#DCDDDF] text-[#768492] rounded-sm outline-none p-3 mb-[15px]' required />
              <button type='submit' className='block mx-auto px-[6px] py-[12px] bg-[#1F1C2F] text-[#FFFFFF] rounded-sm text-[16px] logo-title cursor-pointer'>Sign Up</button>
            </form>
          </div>
          <p className='mt-[10px] text-center text-[#768492] text-[16px]'>Already have an Account ? <Link to={"/Signin"} className='logo-title text-[#1F1C2F] font-bold'>Sign In</Link></p>
        </div>
      </div>
    </div>
  )
}

export default Signup
