import React from "react";
import bgImg from "../static/images/home-hero.png";
import { Link } from "react-router-dom";
// import AppCaller from "../setupTests";
import "../static/css/about.css";
// import Footer from "./Footer";

export default function About() {
  return (
    <>
      <div className="container">
        <img
          src={bgImg}
          alt="backPicture"
          className="about-hero-image"
          style={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
            marginTop: "10px",
          }}
        />
        <br /> <br />
        <div className="about-page-content">
          <h1>
            Unlocking the Power of Code: The Journey of Learning Programming
          </h1>
          <p>
            In today's digital age, programming is more than just typing lines
            of code. It's about solving problems, bringing ideas to life, and
            shaping the future of technology. Learning to program not only
            offers a valuable skillset in the ever-evolving tech industry but
            also nurtures critical thinking, creativity, and logical reasoning.
          </p>
          <p>
            Whether you're crafting a website, developing a game, or automating
            mundane tasks, the joy of coding is in the creation and the endless
            possibilities it presents. Dive into this world, and you'll discover
            a passion that constantly challenges and rewards you.
          </p>

          <h1>Embrace the Open Road with Spacious Van Comfort!</h1>
          <p>
            Ready for the ultimate road trip experience? We're here to elevate
            your adventures with our top-tier travel vans. Before each journey,
            our vans undergo rigorous inspections to ensure you have a smooth
            ride. (And just in case you're thinking of towing, we offer hitches
            as an add-on! 😉)
          </p>
          <p>
            Dive deeper and meet our crew: we're more than just van providers;
            we're enthusiasts living the vanlife dream. We're passionate about
            the thrill of travel and can't wait for you to join the ride.
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
      {/* <Footer /> */}
    </>
  );
}
