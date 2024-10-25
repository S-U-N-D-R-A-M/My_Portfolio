import React from "react";
import "./Hero.css";
import profile from "../../assets/profile.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";
const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile} />
      <h1>
        <span>I'm Rangam Sundram</span>
      </h1>
      <p>
        I am Rangam Sundram, a B.Tech student in Electronics and Communication
        Engineering at NIT Manipur, with a strong foundation in PCB designing,
        Digital Design, Microcontrollers, web development, data structures,
        algorithms, and relevant frameworks.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        {/* <div className="hero-resume">
          <a href="https://drive.google.com/file/d/1Oi5E5hpT1fAUWgaU-KBwnfrgC711hMOr/view?usp=drivesdk">
            My Resume
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
