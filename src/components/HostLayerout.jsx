


import React from 'react';
import { NavLink, Outlet } from "react-router-dom"

export default function HostLayerout() {
    const isActiveStyle = {
        color: "red",
        fontWeight: "bold",
        textDecorationLine: "underline",
    };

    return (
        <>
            <nav className='host-navs' style={{
                backgroundColor: "blueviolet",
                // display: "flex",
                // justifyContent: "space-around",
                color: "red"
            }}>
                <NavLink style={({ isActive }) => isActive ? isActiveStyle : null} to="/host"> Dashboard </NavLink>
                <NavLink style={({ isActive }) => isActive ? isActiveStyle : null} to="/host/income"> Income </NavLink>
                <NavLink style={({ isActive }) => isActive ? isActiveStyle : null} to="/host/persons"> Person </NavLink>
                <NavLink style={({ isActive }) => isActive ? isActiveStyle : null} to="/host/reviews"> Reviews </NavLink>
            </nav>
            <Outlet />
        </>
    )
};



// eslint-disable-next-line no-lone-blocks
{/* <Route path="/host" element={<HostLayerout />}>
          <Route path="/host/income" element={<Income />} />
          <Route path="/host/reviews" element={<Reviews />} />
        </Route> */}