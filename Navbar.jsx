import { NavLink } from "react-router-dom"


export const Navbar  = () => {
     return (
        <div style={{"margin-bottom": "10px"}}>
            <NavLink style={{"margin": "10px"}} to={"/"}>LifeCycle</NavLink>
            <NavLink style={{"margin": "10px"}} to={"/debouncing"}>Debouncing</NavLink>
        </div>
     )
}