import ScrollReveal from './ScrollReveal';

export interface Project {
  title: string;
  time: string;
  organization: string;
  logo: string;
  logoAlt: string;
  tag: string;
  bullets: string[];
}

interface ProjectListProps {
  projects: Project[];
}

function ProjectList({ projects }: ProjectListProps) {
  return (
    <section id="experience" className="experience-section">
      <ScrollReveal>
        <div className="section-heading">
          <p className="section-tag">Experience</p>
        </div>
      </ScrollReveal>

      <div className="experience-timeline">
        {projects.map(({ title, time, organization, logo, logoAlt, tag, bullets }, index) => (
          <ScrollReveal key={`${organization}-${title}`} delay={index * 100}>
            <article className="experience-item">
              <div className="timeline-marker" aria-hidden="true" />
              <div className="card experience-card">
                <time className="experience-time">{time}</time>
                <span className="exp-tag">{tag}</span>
                <div className="experience-heading">
                  <div className="organization-logo" aria-hidden="true">
                    {logo.startsWith('http') ? <img src={logo} alt={logoAlt} /> : logo}
                  </div>
                  <h4>{title}</h4>
                </div>
                <ul className="experience-bullets">
                  {bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}

export default ProjectList;