import React from "react";
import { NavLink } from "react-router-dom";

const Navlinks = () => {
  return (
    <div>
      <nav className="bg-blue-600 p-4 text-white flex gap-4">
        <NavLink to="/" style={({isActive})=>({color:isActive?"red":"black"})}>Home</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "font-bold" : ""}>About</NavLink>
        <NavLink to="/contact" style={({isActive})=> (isActive ? { fontWeight: "bold" } : {})}>Contact</NavLink>
      </nav>
    </div>
  );
};

export default Navlinks;
