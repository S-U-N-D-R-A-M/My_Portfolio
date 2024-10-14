import React from "react";
import "./About.css";
import theme from "../../assets/theme_pattern.svg";
import profile from "../../assets/profile.jpg";
const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme} />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={profile} />
        </div>
        <div className="about-right ">
          <div className="about-para">
            <p>
              I am Rangam Kumar Sundram, a pre-final year B.Tech student
              specializing in Electronics and Communication Engineering at NIT
              Manipur, currently in my 7th semester. With hands-on experience in
              designing and testing Switch Mode Power Supply (SMPS) systems
              during my internship at Emitter Electronics, I have developed
              strong problem-solving and technical skills. I collaborated
              closely with hardware engineers to optimize PCB layouts, perform
              thermal testing, and enhance system performance.
            </p>
            <p>
              In addition to my technical expertise, I am passionate about
              front-end development and have a solid foundation in data
              structures, algorithms, and programming languages like C++,
              Embedded C, Verilog HDL, and JavaScript. My practical experience
              is supported by proficiency with tools such as Visual Studio Code,
              MATLAB, and HFSS software.
            </p>
            <p>
              I am keen on staying updated with the latest industry trends and
              continuously expanding my skill set. My interests include
              Semiconductor Manufacturing, Embedded Systems, and IoT. Having
              qualified GATE 2023 and participated in IEEE events, I am eager to
              contribute to innovative projects while learning from experienced
              professionals in the field.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
