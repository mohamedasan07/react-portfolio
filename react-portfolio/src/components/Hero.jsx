import { ArrowRight, Mail, Sparkles } from "lucide-react";

import "./Hero.css";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__glow hero__glow--one" aria-hidden="true" />
      <div className="hero__glow hero__glow--two" aria-hidden="true" />

      <div className="container hero__inner">
        <span className="hero__badge animate-up">
          <Sparkles size={15} aria-hidden="true" />
          Frontend Developer Portfolio
        </span>

        <h1 className="hero__title animate-up" style={{ animationDelay: "0.08s" }}>
          Hello, I&apos;m <span>Mohamed Asan</span>
        </h1>

        <p className="hero__subtitle animate-up" style={{ animationDelay: "0.16s" }}>
          Frontend Developer
        </p>

        <p
          className="hero__description animate-up"
          style={{ animationDelay: "0.24s" }}
        >
          I build modern, responsive and user-friendly web applications using
          React and JavaScript.
        </p>

        <div className="hero__actions animate-up" style={{ animationDelay: "0.32s" }}>
          <a className="btn btn--primary" href="#projects">
            View Projects <ArrowRight size={18} aria-hidden="true" />
          </a>
          <a className="btn btn--outline" href="#contact">
            Contact Me <Mail size={18} aria-hidden="true" />
          </a>
        </div>
      </div>

      <a className="hero__scroll" href="#about" aria-label="Scroll to about section">
        <span className="hero__scroll-line" aria-hidden="true" />
      </a>
    </section>
  );
}

export default Hero;
