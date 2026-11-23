import { skills } from "../data/portfolio";
import SectionHeading from "./SectionHeading";
import "./Skills.css";

function Skills() {
  return (
    <section id="skills" className="section section--muted skills">
      <div className="container">
        <SectionHeading
          eyebrow="What I work with"
          title="My Skills"
          description="A toolkit focused on building fast, responsive and maintainable interfaces."
        />

        <div className="skills__grid">
          {skills.map(({ name, icon: Icon, tone }) => (
            <article className={`skill-card skill-card--${tone}`} key={name}>
              <span className="skill-card__icon">
                <Icon size={26} strokeWidth={1.8} aria-hidden="true" />
              </span>
              <h3 className="skill-card__name">{name}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
