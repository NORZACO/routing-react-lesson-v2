// // ProductsLayerout

// import React from 'react';

// export default function ProductsLayerout(){


//     return (
//         <>
//             <div style={{
//                 height:"500px",
//                 width : "auto",
//                 backgroundColor : "grey",
//                 textAlign : "center"
//                 }}>
//                 <h1> ProductsLayerout page </h1>
//             </div>
//         </>
//     )
// };



import React from 'react';
import { NavLink, Outlet } from "react-router-dom"

export default function ProductsLayerout() {
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
                <NavLink style={({ isActive }) => isActive ? isActiveStyle : null} to="/anchor"> Dashboard </NavLink>
                <NavLink style={({ isActive }) => isActive ? isActiveStyle : null} to="/anchor/income"> Income </NavLink>
                <NavLink style={({ isActive }) => isActive ? isActiveStyle : null} to="/anchor/products"> Product </NavLink>
                <NavLink style={({ isActive }) => isActive ? isActiveStyle : null} to="/anchor/reviews"> Reviews </NavLink>
            </nav>
            <Outlet />
        </>
    )
};
