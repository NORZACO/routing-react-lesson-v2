import { Link } from "react-router-dom"
import React from 'react';

export default function Header() {
  return (

    <>
      <header>
        <Link className="site-logo" to="/"> #MWAMUZISCODEV </Link>
        <nav>
          <Link  to="/about"> About </Link>
          <Link  to="/cover">Cover</Link>
          <Link  to="/contact">Contact</Link>
          <Link  to="/persons">Person</Link>
          {/* <Link  to="/host/income">Income </Link> */}
          <Link  to="/host"> More </Link>
          {/* <Link  to="/host"> HostDashboard </Link> */}
        </nav>
      </header>
    </>
  )
}