import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStyle = { color: "#F15B2A" };
  return (
    <nav>
      <NavLink
        to="/"
        style={({ isActive }) => ({ color: isActive ? "green" : "blue" })}
      >
        Home
      </NavLink>
      {" | "}
      <NavLink
        to="/courses"
        style={({ isActive }) => ({ color: isActive ? "green" : "blue" })}
      >
        Courses
      </NavLink>
      {" | "}
      <NavLink
        to="/about"
        style={({ isActive }) => ({ color: isActive ? "green" : "blue" })}
      >
        About
      </NavLink>
    </nav>
  );
};

export default Header;
