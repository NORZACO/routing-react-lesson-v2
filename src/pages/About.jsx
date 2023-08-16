import React from "react";
import bgImg from "../static/images/home-hero.png";
import { Link } from "react-router-dom";
// import AppCaller from "../setupTests";
import '../static/css/about.css';
import Footer from "./Footer";

export default function About() {
  return (

    <><div className="container">
      <img src={bgImg} alt="backPicture" className="about-hero-image" style={{
        width: "100%",
        // height: "100%",
        // objectFit: "cover",
        // objectPosition: "center",
        // position: "absolute",
        // top: "0",
        // left: "0",
        // zIndex: "-1",
      }} 
      />
      <br /> <br />
      <div className="about-page-content">
        <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
        <p>
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉)
        </p>
        <p>
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>
      </div>
      <div className="about-page-cta">
        <h2>
          Your destination is waiting.
          <br />
          Your van is ready.
        </h2>
        <Link className="link-button" to="/vans">
          Explore our vans
        </Link>
      </div>
    </div>
    <Footer />
    </>
  );
}
