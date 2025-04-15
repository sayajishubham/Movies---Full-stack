import React from "react"
import Navbar from "./Component/Navbar"
import Home from "./page/home"
import Mainroutes from "./AllRoutes/Mainroutes"
import { useLocation } from "react-router-dom"

function App() {
 const location=useLocation();
 
 const hideHeader=["/Signup","/Signin",].some(path=> location.pathname.startsWith(path));
  return (

    <>
    {!hideHeader&& <Navbar/>}
  
    <Mainroutes/>

    </>
  )
}

export default App
