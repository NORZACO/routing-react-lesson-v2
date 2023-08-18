


import React from 'react';
import { Link, Outlet } from "react-router-dom"

export default function HostLayerout() {

    return (
        <>
            <nav className='host-navs' style={{
                backgroundColor : "blueviolet",
                // display: "flex",
                // justifyContent: "space-around",
                color : "red"
            }}>
                <Link to="/host"> Dashboard </Link>
                <Link to="/host/income"> Income </Link>
                <Link to="/host/reviews"> Reviews </Link>
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