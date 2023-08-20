import { Link } from "react-router-dom";
import React from "react";
// import bootstrap icons
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../../static/css/newHeader.css";

export default function Header() {
  return (
    <>
      <div className="topnav">
        <Link className="active" to="/">
          {" "}
          #MWAMUZISCODEV{" "}
        </Link>
        <Link to="/about"> About </Link>
        <Link to="/cover">Cover</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/anchor/products"> Products </Link>
        <Link to="/persons">Person</Link>
        <Link to="/anchor"> ProductsDashboard </Link>

        {/* <Link to="/host"> More </Link> */}
        <Link to="/host"> HostDashboard </Link>
        <div className="search-container">
          <form action="/">
            <input type="text" placeholder="Search.." name="search" />
            <button type="submit">
              <i className="fa fa-search" />
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
