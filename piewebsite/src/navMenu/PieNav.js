import React from "react";
import { NavLink } from "react-router-dom";

function PieNav() {
    return(
        <div className="pieNav">
            <nav>
                <div className="navBox">
                    <NavLink to={"/"} style={{textDecoration: "none", color: "white"}} >Home</NavLink>
                    <NavLink to={"/about"} style={{textDecoration: "none", color: "white"}}>About</NavLink>
                </div>
            </nav>
        </div>
    )
}

export default PieNav;