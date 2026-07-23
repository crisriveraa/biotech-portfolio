const skills = [
  "Biotechnology",
  "Python",
  "Data analysis",
  "Scientific research",
  "Project management",
  "Microsoft Excel",
  "Technical reporting",
  "Laboratory techniques",
];

const education = [
  {
    date: "2025 — Present",
    title: "B.Eng. in Biotechnology",
    place: "Tecnológico de Monterrey",
    detail: "Current GPA: 95/100",
    visual: "tec",
  },
  {
    date: "Jan — May 2023",
    title: "International Exchange",
    place: "École KLF · Montpellier, France",
    detail: "An immersive academic and cultural experience.",
    visual: "klf",
  },
  {
    date: "2021 — 2024",
    title: "High School",
    place: "Tecnológico de Monterrey",
    detail: "Multicultural academic program.",
    visual: "tec",
  },
];

const projects = [
  {
    number: "01",
    kind: "Interactive article · Biotechnology",
    title: "CRISPR-Cas9 Explorer",
    description:
      "An accessible, visual introduction to gene editing—how the system works, where it is being applied and the questions it raises.",
    href: "https://crisriveraa.github.io/BIOTEC-1-/",
    action: "Read the article",
    accent: "blue",
  },
  {
    number: "02",
    kind: "Digital product · Sustainability",
    title: "Bono₂ Carbon Calculator",
    description:
      "A digital calculator that helps companies estimate their CO₂e footprint in clear language and begin making data-informed decisions.",
    href: "https://hackathon-bono2.vercel.app/",
    action: "Explore the project",
    accent: "violet",
  },
];

export default function Home() {
  return (
    <main>
      <nav className="nav" aria-label="Main navigation">
        <a className="monogram" href="#home" aria-label="Cristian Rivera, home">
          CR<span>·</span>
        </a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="nav-cta" href="/documents/cristian-rivera-cv.pdf" target="_blank">
          View CV ↗
        </a>
      </nav>

      <section className="hero" id="home">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Mexico City · Open to opportunities</p>
          <h1>Cristian<br />Rivera Ávila</h1>
          <p className="hero-role">Biotechnology Engineering Student</p>
          <p className="hero-intro">
            Tecnológico de Monterrey student interested in biotechnology,
            programming, sustainability and the development of practical
            technology-driven solutions.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#work">Explore my work <span>↓</span></a>
            <a className="text-link" href="mailto:cristiandanel08@gmail.com">Let&apos;s connect ↗</a>
          </div>
        </div>
        <div className="hero-photo">
          <img src="/images/cristian-patagonia.jpg" alt="Cristian Rivera in Patagonia" />
        </div>
      </section>

      <section className="about section" id="about">
        <div className="section-label"><span>01</span> About me</div>
        <div className="about-grid">
          <h2>About me</h2>
          <div className="about-copy">
            <p>
              I am a Biotechnology Engineering student at Tecnológico de
              Monterrey with experience in project management, programming and
              digital product development.
            </p>
            <p>
              My interests include scientific research, data analysis,
              sustainability and technology. I am open to different
              opportunities where I can keep learning and contribute to
              multidisciplinary teams.
            </p>
            <div className="language-panel">
              <div className="languages">
                <span>Spanish <b>Native</b></span>
                <span>English <b>C1</b></span>
                <span>French <b>B2–C1</b></span>
              </div>
              <img
                src="/images/paris-exchange.jpg"
                alt="Eiffel Tower in Paris, representing Cristian's international experience"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="journey section" id="experience">
        <div className="section-label light"><span>02</span> Education & experience</div>
        <div className="journey-heading">
          <h2>Education &<br />experience</h2>
          <p>
            My academic path is complemented by hands-on work in project
            coordination, data, communication and sustainable innovation.
          </p>
        </div>
        <div className="experience-card">
          <div className="organization-block">
            <img src="/images/sasson-logo.png" alt="Sasson" />
            <p className="date">Dec 2024 — Feb 2025</p>
            <h3>Project Management & Marketing Intern</h3>
            <p className="place">Sasson</p>
          </div>
          <p>
            Planned and tracked internal projects, supported marketing and
            communication initiatives, created Excel reports and collaborated
            with multidisciplinary teams.
          </p>
        </div>
        <div className="education-list">
          {education.map((item) => (
            <article key={item.title + item.date}>
              <div className={`education-mark ${item.visual}`}>
                {item.visual === "klf" ? (
                  <img src="/images/klf-logo.png" alt="KLF" />
                ) : (
                  <span>TEC</span>
                )}
              </div>
              <p className="date">{item.date}</p>
              <div>
                <h3>{item.title}</h3>
                <p className="place">{item.place}</p>
              </div>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="skills section">
        <div className="section-label"><span>03</span> Skills & approach</div>
        <div className="skills-grid">
          <div>
            <p className="large-statement">Technical and professional skills</p>
            <a className="button outline" href="/documents/cristian-rivera-cv.pdf" target="_blank">
              Download full CV <span>↓</span>
            </a>
          </div>
          <div className="skill-list">
            {skills.map((skill, index) => (
              <div key={skill}><span>{String(index + 1).padStart(2, "0")}</span>{skill}</div>
            ))}
          </div>
        </div>
        <div className="certification">
          <span>Selected certification</span>
          <strong>CS50: Introduction to Computer Science</strong>
          <p>Harvard University</p>
        </div>
      </section>

      <section className="work section" id="work">
        <div className="section-label"><span>04</span> Articles & projects</div>
        <div className="work-heading">
          <h2>Articles &<br />projects</h2>
          <p>
            Research, code and communication brought together in projects that
            explain ideas or solve practical problems.
          </p>
        </div>
        <div className="projects">
          {projects.map((project) => (
            <a
              className={`project-card ${project.accent}`}
              href={project.href}
              target="_blank"
              rel="noreferrer"
              key={project.title}
            >
              {project.accent === "violet" && (
                <img className="project-logo" src="/images/bono2-logo.png" alt="Bono2" />
              )}
              <div className="project-top">
                <span>{project.number}</span>
                <span>↗</span>
              </div>
              <p className="project-kind">{project.kind}</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <strong>{project.action} →</strong>
            </a>
          ))}
        </div>
        <div className="award">
          <img src="/images/ecohack-award.png" alt="Ecohack Bono2 second place certificate" />
          <div>
            <p className="eyebrow"><span /> Recognition</p>
            <h3>Second place at Ecohack Bono₂</h3>
            <p>
              Awarded during the third annual Ecotopia congress for contributing
              to a digital sustainability solution.
            </p>
          </div>
        </div>
      </section>

      <footer id="contact">
        <p className="footer-kicker">Cristian Rivera Ávila</p>
        <h2>Contact</h2>
        <a className="email" href="mailto:cristiandanel08@gmail.com">
          cristiandanel08@gmail.com <span>↗</span>
        </a>
        <div className="contact-links">
          <a href="tel:+525568943127">+52 55 6894 3127</a>
          <a href="https://github.com/crisriveraa" target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href="https://www.linkedin.com/in/cristian-rivera-avila-6b712a327" target="_blank" rel="noreferrer">LinkedIn ↗</a>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Cristian Rivera Ávila</p>
          <p>Mexico City, Mexico</p>
          <a href="https://github.com/crisriveraa" target="_blank" rel="noreferrer">GitHub ↗</a>
        </div>
      </footer>
    </main>
  );
}
