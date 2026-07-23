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
  },
  {
    date: "Jan — May 2023",
    title: "International Exchange",
    place: "École KLF · Montpellier, France",
    detail: "An immersive academic and cultural experience.",
  },
  {
    date: "2021 — 2024",
    title: "High School",
    place: "Tecnológico de Monterrey",
    detail: "Multicultural academic program.",
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
          <h1>Science, technology<br />and a curious mind.</h1>
          <p className="hero-intro">
            I&apos;m <strong>Cristian Rivera Ávila</strong>, a Biotechnology Engineering
            student exploring how science, data and digital products can create
            meaningful change.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#work">Explore my work <span>↓</span></a>
            <a className="text-link" href="mailto:cristiandanel08@gmail.com">Let&apos;s connect ↗</a>
          </div>
        </div>
        <div className="hero-photo">
          <img src="/images/cristian-patagonia.jpg" alt="Cristian Rivera in Patagonia" />
          <div className="photo-tag">
            <span>Currently</span>
            <strong>Learning without borders</strong>
          </div>
        </div>
        <p className="side-note">BIOTECHNOLOGY · DATA · SUSTAINABILITY</p>
      </section>

      <section className="about section" id="about">
        <div className="section-label"><span>01</span> About me</div>
        <div className="about-grid">
          <h2>I&apos;m interested in the places where different worlds meet.</h2>
          <div className="about-copy">
            <p>
              Biology meets computation. Research meets communication. Curiosity
              becomes something useful. I am building an interdisciplinary path
              through biotechnology while developing skills in programming,
              project management and scientific storytelling.
            </p>
            <p>
              I am open to opportunities across biotechnology, sustainability,
              research and technology—especially those that invite me to learn,
              collaborate and turn complex ideas into real-world impact.
            </p>
            <div className="languages">
              <span>Spanish <b>Native</b></span>
              <span>English <b>C1</b></span>
              <span>French <b>B2–C1</b></span>
            </div>
          </div>
        </div>
        <figure className="landscape">
          <img src="/images/cristian-forest.jpg" alt="Cristian sitting in a green landscape" />
          <figcaption>Curiosity is my starting point.</figcaption>
        </figure>
      </section>

      <section className="journey section" id="experience">
        <div className="section-label light"><span>02</span> Education & experience</div>
        <div className="journey-heading">
          <h2>Still learning.<br />Already building.</h2>
          <p>
            My academic path is complemented by hands-on work in project
            coordination, data, communication and sustainable innovation.
          </p>
        </div>
        <div className="experience-card">
          <div>
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
            <p className="large-statement">
              I bring a scientific mindset to creative and technical challenges.
            </p>
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
          <h2>A growing archive<br />of things I&apos;ve made.</h2>
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
        <p className="footer-kicker">Have an idea, opportunity or question?</p>
        <h2>Let&apos;s make<br />something meaningful.</h2>
        <a className="email" href="mailto:cristiandanel08@gmail.com">
          cristiandanel08@gmail.com <span>↗</span>
        </a>
        <div className="footer-bottom">
          <p>© 2026 Cristian Rivera Ávila</p>
          <p>Mexico City, Mexico</p>
          <a href="https://github.com/crisriveraa" target="_blank" rel="noreferrer">GitHub ↗</a>
        </div>
      </footer>
    </main>
  );
}
