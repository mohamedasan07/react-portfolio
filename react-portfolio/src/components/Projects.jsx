import { ArrowUpRight, ExternalLink, GitBranch } from "lucide-react";

import { projects } from "../data/portfolio";
import SectionHeading from "./SectionHeading";
import "./Projects.css";

function Projects() {
  return (
    <section id="projects" className="section section--light projects">
      <div className="container">
        <SectionHeading
          eyebrow="Selected work"
          title="My Projects"
          description="A couple of things I've built while exploring the web and beyond."
        />

        <div className="projects__grid">
          {projects.map(
            (
              { id, title, description, tags, icon: Icon, theme, liveUrl, repoUrl },
              index,
            ) => (
              <article className={`project-card project-card--${theme}`} key={id}>
                <div className="project-card__top">
                  <span className="project-card__icon">
                    <Icon size={28} strokeWidth={1.7} aria-hidden="true" />
                  </span>
                  <span className="project-card__number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="project-card__title">{title}</h3>
                <p className="project-card__description">{description}</p>

                <ul className="project-card__tags">
                  {tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>

                <div className="project-card__actions">
                  {liveUrl ? (
                    <a
                      className="project-btn project-btn--primary"
                      href={liveUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View Project <ExternalLink size={16} aria-hidden="true" />
                    </a>
                  ) : (
                    <button
                      type="button"
                      className="project-btn project-btn--primary"
                      disabled
                      title="Live link not available yet"
                    >
                      View Project <ArrowUpRight size={16} aria-hidden="true" />
                    </button>
                  )}

                  {repoUrl && (
                    <a
                      className="project-btn project-btn--secondary"
                      href={repoUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub <GitBranch size={16} aria-hidden="true" />
                    </a>
                  )}
                </div>
              </article>
            ),
          )}
        </div>
      </div>
    </section>
  );
}

export default Projects;
