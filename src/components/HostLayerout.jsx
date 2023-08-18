


import React from 'react';
import { Link } from "react-router-dom"

export default function HostLayerout() {

    return (
        <>
            <nav className='host-nav'>
                <Link to="/host"> Dashboard </Link>
                <Link to="/host/income"> Income </Link>
                <Link to="/host/reviews"> Reviews </Link>
            </nav>
        </>
    )
};



        // eslint-disable-next-line no-lone-blocks
        {/* <Route path="/host" element={<HostLayerout />}>
          <Route path="/host/income" element={<Income />} />
          <Route path="/host/reviews" element={<Reviews />} />
        </Route> */}