import { Code, Download, GraduationCap } from "lucide-react";

import profileImage from "../assets/hero.png";
import { cvUrl } from "../data/portfolio";
import SectionHeading from "./SectionHeading";
import "./About.css";

function About() {
  return (
    <section id="about" className="section section--light about">
      <div className="container about__grid">
        <div className="about__visual animate-up">
          <div className="about__frame">
            <img
              src={profileImage}
              alt="Profile illustration for Mohamed Asan"
              loading="lazy"
            />
          </div>
          <div className="about__badge">
            <GraduationCap size={22} aria-hidden="true" />
            <span>
              <strong>Computer Science</strong>
              <small>Student &amp; frontend enthusiast</small>
            </span>
          </div>
        </div>

        <div className="about__content animate-up" style={{ animationDelay: "0.1s" }}>
          <SectionHeading
            align="left"
            eyebrow="A little background"
            title="About Me"
          />

          <div className="about__copy">
            <p>
              I&apos;m Mohamed Asan, a Computer Science student passionate about
              frontend development. I enjoy building modern web applications.
            </p>
            <p>
              My focus is on clean, responsive interfaces built with React and
              JavaScript — turning ideas into accessible experiences that feel
              effortless to use.
            </p>
          </div>

          <ul className="about__facts">
            <li>
              <Code size={17} aria-hidden="true" /> Frontend Development
            </li>
            <li>
              <GraduationCap size={17} aria-hidden="true" /> Computer Science Background
            </li>
          </ul>

          {cvUrl && (
            <a className="btn btn--ghost" href={cvUrl} download>
              <Download size={18} aria-hidden="true" /> Download CV
            </a>
          )}
        </div>
      </div>
    </section>
  );
}

export default About;
