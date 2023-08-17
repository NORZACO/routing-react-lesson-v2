import React from "react";
import { Link } from "react-router-dom";
import '../static/css/home.css';
import Heroes from './Heroes';

export default function Home() {
  return (

    // Heroes
    <>
      <Heroes />
      <div className="container container-home">
        <h1>You got the travel plans, we got the travel vans.</h1>
        <p>
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>
        <Link to="/persons" className="persons-button">Find your van</Link>
      </div></>
  );
}
