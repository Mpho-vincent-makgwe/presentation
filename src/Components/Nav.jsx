import { Outlet } from "react-router-dom";
import Home from "../pages/Home";

const NavBar =()=>{
    return(
        <>
        <Home/>
        <Outlet/>
        </>
        
    )
}
export default NavBar