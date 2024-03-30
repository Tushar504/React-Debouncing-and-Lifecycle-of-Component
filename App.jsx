import {useState, useEffect} from "react"

import { Navbar } from "./Navbar"
import { Outlet } from "react-router-dom"

export const App = () =>{
    
    return (
        <div>
           <Navbar />
           <Outlet/>
        </div>
    )
}