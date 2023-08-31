import React from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import { Home } from "./Home";
import { Addition } from "./Addition";
import { Fullname } from "./Fullname";
import { Nav } from "./Nav";



export const Landing=()=>{
    return(
      <BrowserRouter>
      <Nav/>
       <Routes>
        <Route  path="/" element={<Home/>} />
        <Route  path="/Addition" element={<Addition/>} />
        <Route  path="Fullname" element={<Fullname/>} />
       </Routes>
      </BrowserRouter>
    )
}