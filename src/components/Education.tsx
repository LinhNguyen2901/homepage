import ScrollReveal from './ScrollReveal';

export interface EducationItem {
  school: string;
  degree: string;
  field: string;
  graduationDate: string;
  gpa: string;
  logo: string;
  logoAlt: string;
  tag: string;
  achievements: string[];
}

interface EducationProps {
  education: EducationItem[];
}

function Education({ education }: EducationProps) {
  return (
    <section id="education" className="experience-section">
      <ScrollReveal>
        <div className="section-heading">
          <p className="section-tag">Education</p>
        </div>
      </ScrollReveal>

      <div className="experience-timeline">
        {education.map(({ school, degree, field, graduationDate, gpa, logo, logoAlt, tag, achievements }, index) => (
          <ScrollReveal key={`${school}-${degree}`} delay={index * 100}>
            <article className="experience-item">
              <div className="timeline-marker" aria-hidden="true" />
              <div className="card experience-card">
                <time className="experience-time">{graduationDate}</time>
                <span className="exp-tag">{tag}</span>
                <div className="experience-heading">
                  <div className="organization-logo" aria-hidden="true">
                    {logo.startsWith('http') ? <img src={logo} alt={logoAlt} /> : logo}
                  </div>
                  <div>
                    <h4>{degree} in {field}</h4>
                    <p className="school-name">{school}</p>
                  </div>
                </div>
                <div className="education-meta">
                  <p><strong>GPA:</strong> {gpa}</p>
                </div>
                <ul className="experience-bullets">
                  {achievements.map((achievement) => (
                    <li key={achievement}>{achievement}</li>
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

export default Education;
