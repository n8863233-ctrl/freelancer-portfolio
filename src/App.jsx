
import { useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  BriefcaseBusiness,
  Check,
  Code2,
  ExternalLink,
  Heart,
  Laptop,
  Mail,
  Menu,
  MessageCircle,
  Palette,
  Send,
  Sparkles,
  X,
  Zap,
} from "lucide-react";
import "./App.css";

const EMAIL = "n8863233@gmail.com";

const skills = [
  { name: "HTML & CSS", type: "Web fundamentals", symbol: "01" },
  { name: "JavaScript", type: "Interactive websites", symbol: "02" },
  { name: "React + Vite", type: "Frontend development", symbol: "03" },
  { name: "Python", type: "Programming & automation", symbol: "04" },
  { name: "AI / Machine Learning", type: "Intelligent solutions", symbol: "05" },
  { name: "Responsive Design", type: "Mobile-friendly layouts", symbol: "06" },
];

const projects = [
  {
    number: "01",
    name: "ContextMeet AI",
    category: "AI + WEB APPLICATION",
    description:
      "An AI-powered meeting assistant concept for organizing meeting notes, extracting tasks and managing follow-ups.",
    tags: ["React", "AI", "Python"],
    color: "lilac",
    icon: BrainCircuit,
    status: "Project concept",
  },
  {
    number: "02",
    name: "Smart Web Experience",
    category: "WEB DEVELOPMENT",
    description:
      "A responsive website concept focused on clean layouts, intuitive navigation and a friendly user experience.",
    tags: ["React", "CSS", "JavaScript"],
    color: "pink",
    icon: Laptop,
    status: "Portfolio concept",
  },
  {
    number: "03",
    name: "Python AI Solutions",
    category: "PYTHON + AI",
    description:
      "A space for Python automation, data analysis and machine-learning projects that solve practical problems.",
    tags: ["Python", "AI", "Data"],
    color: "peach",
    icon: Zap,
    status: "Project showcase",
  },
];

const services = [
  {
    number: "01",
    title: "Website Development",
    description:
      "Modern, responsive websites with attractive designs, smooth navigation and layouts that work across devices.",
    icon: Code2,
    color: "lilac",
    features: ["Responsive websites", "React interfaces", "Landing pages"],
  },
  {
    number: "02",
    title: "AI & Python Solutions",
    description:
      "Practical Python applications, automation ideas and AI-powered features designed around your project needs.",
    icon: BrainCircuit,
    color: "pink",
    features: ["Python applications", "AI prototypes", "Automation"],
  },
];

function App() {
  const [activeModal, setActiveModal] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!activeModal) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setActiveModal(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeModal]);

  const openModal = (modalName) => {
    setMenuOpen(false);
    setActiveModal(modalName);
  };

  const closeModal = () => setActiveModal(null);

  const handleNavClick = (event, sectionId) => {
    event.preventDefault();
    setMenuOpen(false);

    if (sectionId === "about" || sectionId === "skills") {
      openModal(sectionId);
      return;
    }

    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="portfolio">
      <div className="announcement">
        <span className="announcement-dot" />
        OPEN TO FREELANCE OPPORTUNITIES
        <Sparkles size={13} />
      </div>

      <header className="navbar">
        <a className="brand" href="#home" aria-label="Nithiya home">
          <span className="brand-mark">N.</span>
          <span>
            nithiya<span className="brand-period">.</span>
          </span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((previous) => !previous)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
          <a href="#home" onClick={(event) => handleNavClick(event, "home")}>
            Home
          </a>
          <a
            href="#about"
            onClick={(event) => handleNavClick(event, "about")}
          >
            About
          </a>
          <a
            href="#skills"
            onClick={(event) => handleNavClick(event, "skills")}
          >
            Skills
          </a>
          <a
            href="#projects"
            onClick={(event) => handleNavClick(event, "projects")}
          >
            Projects
          </a>
          <a
            href="#services"
            onClick={(event) => handleNavClick(event, "services")}
          >
            Services
          </a>
          <a
            className="nav-contact"
            href="#contact"
            onClick={(event) => handleNavClick(event, "contact")}
          >
            Let's talk <ArrowUpRight size={15} />
          </a>
        </nav>
      </header>

      <main>
        <section className="hero section-container" id="home">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="status-dot" />
              HELLO, I'M NITHIYA
            </div>

            <h1>
              Ideas into
              <br />
              <span className="gradient-text">digital magic.</span>
              <span className="heading-sparkle">✳</span>
            </h1>

            <p className="hero-description">
              I'm <strong>Nithiya</strong>, a{" "}
              <strong>Web Developer & AI Enthusiast</strong> who loves building
              beautiful digital experiences and exploring smarter solutions
              with technology.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore my work <ArrowUpRight size={16} />
              </a>
              <a className="button button-secondary" href={`mailto:${EMAIL}`}>
                <Mail size={16} /> Get in touch
              </a>
            </div>

            <button
              className="discover-button"
              type="button"
              onClick={() => openModal("about")}
            >
              <span className="discover-icon">
                <ArrowDownRight size={16} />
              </span>
              A LITTLE ABOUT ME
            </button>
          </div>

          <div className="hero-visual" aria-label="Nithiya portfolio artwork">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />

            <div className="visual-orb">
              <span className="orb-star star-one">✳</span>
              <span className="orb-star star-two">✦</span>
              <span className="orb-monogram">N.</span>
              <span className="orb-caption">CREATE · LEARN · BUILD</span>
            </div>

            <div className="floating-card floating-code">
              <span className="floating-icon icon-purple">
                <Code2 size={21} />
              </span>
              <span>
                <strong>Web Development</strong>
                <small>Building for the web</small>
              </span>
            </div>

            <div className="floating-card floating-ai">
              <span className="floating-icon icon-pink">
                <BrainCircuit size={21} />
              </span>
              <span>
                <strong>AI + Python</strong>
                <small>Ideas with intelligence</small>
              </span>
            </div>

            <div className="round-sticker">
              MADE WITH
              <br />
              <Heart size={15} fill="currentColor" />
              & CURIOSITY
            </div>
          </div>

          <div className="hero-footer">
            <span>CREATIVE THINKER</span>
            <span className="footer-star">✳</span>
            <span>CURIOUS DEVELOPER</span>
            <span className="footer-star">✳</span>
            <span>ALWAYS LEARNING</span>
          </div>
        </section>

        <div className="marquee-strip" aria-label="Areas of interest">
          <span>WEB DEVELOPMENT</span>
          <i>✳</i>
          <span>ARTIFICIAL INTELLIGENCE</span>
          <i>✳</i>
          <span>PYTHON</span>
          <i>✳</i>
          <span>CREATIVE IDEAS</span>
        </div>

        <section className="about-preview section-container">
          <div className="section-label">
            <span>01 / A LITTLE INTRO</span>
            <span className="label-line" />
          </div>

          <div className="about-preview-grid">
            <h2>
              Curious mind.
              <br />
              <span className="gradient-text">Creative builder.</span>
            </h2>

            <div className="about-preview-copy">
              <p>
                I enjoy turning ideas into useful digital experiences. My
                interests span web development, artificial intelligence and
                Python-powered problem solving.
              </p>
              <button
                className="text-link"
                type="button"
                onClick={() => openModal("about")}
              >
                Get to know me <ArrowUpRight size={16} />
              </button>
            </div>
          </div>

          <div className="value-grid">
            <button
              className="value-card value-pink"
              type="button"
              onClick={() => openModal("about")}
            >
              <span className="value-symbol"><Palette size={23} /></span>
              <strong>Design with purpose</strong>
              <span>Thoughtful, user-friendly experiences.</span>
              <ArrowUpRight className="value-arrow" size={17} />
            </button>

            <button
              className="value-card value-yellow"
              type="button"
              onClick={() => openModal("skills")}
            >
              <span className="value-symbol"><Code2 size={23} /></span>
              <strong>Learn by building</strong>
              <span>Growing my skills through projects.</span>
              <ArrowUpRight className="value-arrow" size={17} />
            </button>

            <button
              className="value-card value-lilac"
              type="button"
              onClick={() => openModal("skills")}
            >
              <span className="value-symbol"><BrainCircuit size={23} /></span>
              <strong>Explore what is next</strong>
              <span>Web technologies, AI and Python.</span>
              <ArrowUpRight className="value-arrow" size={17} />
            </button>
          </div>
        </section>

        <section className="skills-strip">
          <div className="section-container skills-strip-inner">
            <div>
              <span className="mini-eyebrow">MY TOOLKIT</span>
              <h2>A little tech, a lot of curiosity.</h2>
            </div>
            <button
              className="button button-dark"
              type="button"
              onClick={() => openModal("skills")}
            >
              Explore my skills <ArrowUpRight size={15} />
            </button>
          </div>
        </section>

        <section className="projects-section section-container" id="projects">
          <div className="section-label">
            <span>02 / SELECTED WORK</span>
            <span className="label-line" />
          </div>

          <div className="section-heading">
            <h2>
              Things I'm <span className="gradient-text">creating.</span>
            </h2>
            <p>
              A showcase of project concepts and areas I'm exploring. I'll add
              live demos and source-code links as projects become available.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => {
              const ProjectIcon = project.icon;

              return (
                <article className="project-card" key={project.number}>
                  <div className="project-meta">
                    <span>PROJECT {project.number}</span>
                    <ExternalLink size={16} />
                  </div>

                  <div className={`project-art art-${project.color}`}>
                    <div className="art-circle art-circle-one" />
                    <div className="art-circle art-circle-two" />
                    <ProjectIcon size={65} strokeWidth={1.2} />
                    <span className="art-sparkle">✳</span>
                  </div>

                  <span className="project-category">{project.category}</span>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>

                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <div className="project-status">
                    <span className="status-dot" />
                    {project.status}
                  </div>
                </article>
              );
            })}
          </div>

          <p className="project-note">
            These are showcase descriptions, not claims of completed public
            deployments. Add real repository links when each project is ready.
          </p>
        </section>

        <section className="services-section" id="services">
          <div className="section-container">
            <div className="section-label">
              <span>03 / WHAT I CAN HELP WITH</span>
              <span className="label-line" />
            </div>

            <div className="section-heading">
              <h2>
                Let's make something <span className="gradient-text">useful.</span>
              </h2>
              <p>
                Friendly, thoughtful solutions for your next digital idea.
              </p>
            </div>

            <div className="services-grid">
              {services.map((service) => {
                const ServiceIcon = service.icon;

                return (
                  <article
                    className="service-card"
                    key={service.number}
                  >
                    <div className="service-card-top">
                      <span className={`service-icon service-${service.color}`}>
                        <ServiceIcon size={26} />
                      </span>
                      <span className="service-number">{service.number}</span>
                    </div>

                    <h3>{service.title}</h3>
                    <p>{service.description}</p>

                    <div className="service-features">
                      {service.features.map((feature) => (
                        <span key={feature}>
                          <Check size={13} /> {feature}
                        </span>
                      ))}
                    </div>

                    <a
                      className="text-link"
                      href={`mailto:${EMAIL}?subject=${encodeURIComponent(
                        `Freelance enquiry: ${service.title}`
                      )}`}
                    >
                      Discuss your project <ArrowUpRight size={16} />
                    </a>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="contact-section section-container" id="contact">
          <div className="contact-card">
            <span className="contact-spark contact-spark-one">✳</span>
            <span className="contact-spark contact-spark-two">✦</span>

            <div className="contact-eyebrow">
              <span className="status-dot" />
              HAVE AN IDEA?
            </div>

            <h2>
              Let's create
              <br />
              something <span>lovely.</span>
            </h2>

            <p>
              Have a website idea or an AI/Python project in mind? Send me a
              message. I'd love to hear what you're working on.
            </p>

            <a className="button button-primary contact-button" href={`mailto:${EMAIL}`}>
              <Mail size={16} /> Email me <ArrowUpRight size={16} />
            </a>

            <a className="email-address" href={`mailto:${EMAIL}`}>
              {EMAIL}
            </a>
          </div>
        </section>
      </main>

      <footer className="footer section-container">
        <a className="brand" href="#home">
          <span className="brand-mark">N.</span>
          <span>nithiya<span className="brand-period">.</span></span>
        </a>

        <p>Designed with curiosity and a little lavender magic.</p>

        <a className="back-to-top" href="#home">
          BACK TO TOP ↑
        </a>
      </footer>

      {activeModal && (
        <div
          className="modal-backdrop"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeModal();
          }}
        >
          <section
            className="info-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <button
              className="modal-close"
              type="button"
              onClick={closeModal}
              aria-label="Close popup"
              autoFocus
            >
              <X size={21} />
            </button>

            {activeModal === "about" ? (
              <>
                <span className="modal-kicker">
                  <Sparkles size={15} /> A LITTLE ABOUT ME
                </span>

                <div className="modal-avatar">N.</div>

                <h2 id="modal-title">
                  Hi, I'm <span className="gradient-text">Nithiya!</span>
                </h2>

                <p className="modal-subtitle">
                  Web Developer & AI Enthusiast
                </p>

                <div className="modal-body">
                  <p>
                    I'm passionate about building useful, beautiful digital
                    experiences and discovering how technology can solve
                    everyday problems.
                  </p>
                  <p>
                    I'm exploring frontend development with React, along with
                    Python and AI. I believe in learning through hands-on
                    projects, staying curious and improving with every build.
                  </p>
                </div>

                <div className="modal-highlight">
                  <Heart size={18} />
                  <span>
                    My goal: turn thoughtful ideas into practical digital
                    experiences.
                  </span>
                </div>

                <button
                  className="button button-primary modal-action"
                  type="button"
                  onClick={() => {
                    closeModal();
                    document.getElementById("contact")?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                >
                  Let's connect <ArrowUpRight size={16} />
                </button>
              </>
            ) : (
              <>
                <span className="modal-kicker">
                  <Sparkles size={15} /> MY CURRENT TOOLKIT
                </span>

                <h2 id="modal-title">
                  Skills I'm <span className="gradient-text">exploring.</span>
                </h2>

                <p className="modal-intro">
                  These are my technology interests and development areas.
                  Proficiency grows through practice and projects.
                </p>

                <div className="modal-skills-list">
                  {skills.map((skill) => (
                    <div className="modal-skill" key={skill.symbol}>
                      <span className="skill-index">{skill.symbol}</span>
                      <span className="skill-copy">
                        <strong>{skill.name}</strong>
                        <small>{skill.type}</small>
                      </span>
                      <ArrowUpRight size={16} className="skill-arrow" />
                    </div>
                  ))}
                </div>

                <a
                  className="button button-primary modal-action"
                  href={`mailto:${EMAIL}?subject=${encodeURIComponent("Let's discuss a project")}`}
                >
                  <MessageCircle size={16} /> Discuss a project <Send size={15} />
                </a>
              </>
            )}
          </section>
        </div>
      )}
    </div>
  );
}

export default App;
