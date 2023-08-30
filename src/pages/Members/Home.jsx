import React from "react";
import { Link } from "react-router-dom";
import "../../static/css/home.css";
import Heroes from "../Main/Heroes";

export default function Home() {
  return (
    // Heroes
    <>
      <Heroes />
      <div className="container container-home">
        <h1>Trusted by over 500,000 developers, including...</h1>
        <p>
          News API is a simple, easy-to-use REST API that returns JSON search
          results for current and historic news articles published by over
          80,000 worldwide sources..
        </p>
        <Link to="/persons" className="persons-button">
          Find Best Candidate{" "}
        </Link>
      </div>
    </>
  );
}
