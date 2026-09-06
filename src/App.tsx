import './App.scss';
import profilePhoto from './assets/thumbnail_Headshot Linh Nguyen6.jpg';
import resumeFile from './assets/LinhNguyen_resume.pdf';
import Header from './components/Header';
import ProjectList, { Project } from './components/ProjectList';

const strengths = [
  'Quick learner who adapts fast and picks up new tools quickly',
  'Interested in software engineering, product thinking, and meaningful user experiences',
  'Comfortable with research, iteration, and turning ideas into action quickly',
  'Built for fast-moving environments where momentum and creativity matter',
];

const projects: Project[] = [
  {
    title: 'Software Engineer Intern',
    time: 'May 2026 - Aug 2026',
    organization: 'Google',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
    logoAlt: 'Google logo',
    tag: 'Engineering mindset',
    bullets: [
      'Built a self-healing agent across 800+ YouTube API endpoints.',
      'Improved LLM context efficiency by 94% through custom I/O filtering.',
      'Reduced batch video generation latency by 86% with parallel processing.',
    ],
  },
  {
    title: 'Software Engineer Intern',
    time: 'Jun 2025 - Aug 2025',
    organization: 'AIZ',
    logo: 'AIZ',
    logoAlt: 'AIZ',
    tag: 'Startup energy',
    bullets: [
      'Built a RAG assistant with LangChain and OpenAI for 150+ documents.',
      'Reached 91% answer accuracy for internal document questions.',
      'Created a PDF and OCR pipeline with PyMuPDF, Tesseract, and AWS.',
    ],
  },
  {
    title: 'Artificial Intelligence Research Assistant',
    time: 'Sep 2024 - May 2026',
    organization: 'Florida State University',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSmTk08_G2tA94qIUGH7fbEup9vFb8gcDpkF-nwS8Zmg&s',
    logoAlt: 'Florida State University logo',
    tag: 'Curiosity',
    bullets: [
      'Productionized a co-authored multi-LLM behavioral health app.',
      'Built an ML pipeline that predicted GPU inference cost with 97%+ accuracy.',
      'Reviewed 100+ papers on explainable AI for cybersecurity research.',
    ],
  },
];

const interests = [
  {
    icon: '🏸',
    title: 'Badminton',
    description: 'Fast, focused, and energetic. It keeps me active, resilient, and always learning how to adapt under pressure.',
  },
  {
    icon: '🧩',
    title: 'Puzzles',
    description: 'I enjoy solving layered problems and finding the satisfying pattern behind the chaos.',
  },
  {
    icon: '🌿',
    title: 'Nature',
    description: 'A good walk outside helps me reset, reflect, and come back with clearer ideas and more balance.',
  },
  {
    icon: '🌸',
    title: 'Perfume',
    description: 'Perfume is a creative, personal expression of mood, identity, and memory, a little bit of art in everyday life.',
  },
];

const tags = ['Senior CS student', 'Research-driven', 'Adaptable', 'Collaborative'];

function App() {
  return (
    <div className="page-shell">
      <Header />

      <main className="portfolio">
        <section className="hero card">
          <div className="hero-copy">
            <p className="eyebrow">Computer Science student • Senior year</p>
            <h1>
              Hello, I’m <span>Linh Nguyen</span>
            </h1>
            <h2>TECHNICAL MINDSET · CURIOSITY · ADAPTABILITY · TEAMWORK · REAL IMPACT</h2>
            <p className="intro">
              I’m a senior computer science student with a strong interest in software, research,
              and building experiences that make people’s lives a little better. I love learning fast,
              exploring new ideas, and creating things that feel both practical and meaningful.
              I enjoy events like HackMIT, Break Through Tech, and other spaces where I can build,
              learn, and connect with people who care about making real impact.
            </p>

            <div className="cta-row">
              <a className="primary-btn" href="#experience">
                My experience
              </a>
              <a className="secondary-btn" href={resumeFile} target="_blank" rel="noreferrer">
                Resume
              </a>
              <a
                className="secondary-btn"
                href="https://www.linkedin.com/in/linh-nguyen-b21bab291/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>

            <div className="tag-row">
              {tags.map((tag) => (
                <span key={tag} className="tag-pill">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="hero-visual" aria-label="Profile visualization">
            <div className="orb orb-one" />
            <div className="orb orb-two" />
            <div className="photo-card">
              <img src={profilePhoto} alt="Linh Nguyen portrait" className="profile-photo" />
            </div>
          </div>
        </section>

        <section id="about" className="story-grid">
          <article className="card story-box">
            <p className="section-tag">About me</p>
            <h3>I’m someone who enjoys learning, creating, and figuring things out.</h3>
            <p>
              I’m the kind of person who likes understanding how things work, whether it’s a piece
              of software, a problem in research, or a creative project that needs experiment and
              iteration. I enjoy being curious and turning that curiosity into something real.
            </p>
            <p>
              My interests sit between technology and creativity. I love thoughtful design, clear
              problem solving, and the kind of work where human experience matters just as much as
              technical execution. I’m still learning, but I’m excited about where that journey is going.
            </p>
          </article>

          <aside className="card details-box">
            <p className="section-tag">What I bring</p>
            <ul>
              {strengths.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </aside>
        </section>

        <ProjectList projects={projects} />

        <section id="interests" className="showcase">
          <div className="section-heading">
            <p className="section-tag">Interests</p>
          </div>

          <div className="interest-grid">
            {interests.map(({ icon, title, description }) => (
              <article className="card interest-card" key={title}>
                <div className="interest-icon" aria-hidden="true">
                  {icon}
                </div>
                <h4>{title}</h4>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="connect" className="card contact-box">
          <p className="section-tag">Let’s connect</p>
          <h3>I’m always happy to meet people, learn more, and talk about opportunities.</h3>
          <div className="cta-row">
            <a
              className="primary-btn"
              href="https://www.linkedin.com/in/linh-nguyen-b21bab291/"
              target="_blank"
              rel="noreferrer"
            >
              Connect on LinkedIn
            </a>
            <a className="secondary-btn" href={resumeFile} target="_blank" rel="noreferrer">
              View resume
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
