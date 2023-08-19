import { NavLink } from "react-router-dom"
import React from 'react';

export default function Header() {
  const isActiveStyle = {
    color: "red",
    fontWeight: "bold",
    textDecorationLine: "underline",
  };

  return (

    <>
      <header>
        <NavLink className="site-logo" to="/"> #MWAMUZISCODEV </NavLink>
        <nav>
          <NavLink style={({ isActive }) => isActive ? isActiveStyle : null} to="/about"> About </NavLink>
          <NavLink style={({ isActive }) => isActive ? isActiveStyle : null} to="/cover">Cover</NavLink>
          <NavLink style={({ isActive }) => isActive ? isActiveStyle : null} to="/contact">Contact</NavLink>
          <NavLink style={({ isActive }) => isActive ? isActiveStyle : null} to="/persons">Person</NavLink>
          <NavLink style={({ isActive }) => isActive ? isActiveStyle : null} to="/host/income">Income </NavLink>
          <NavLink style={({ isActive }) => isActive ? isActiveStyle : null} to="/host"> More </NavLink>
          <NavLink style={({ isActive }) => isActive ? isActiveStyle : null} to="/host"> HostDashboard </NavLink>
        </nav>
      </header>
    </>
  )
}