import React, { useEffect, useState } from "react";
import {
  ArrowDown, ArrowRight, ArrowUpRight, BriefcaseBusiness, Code2, Database,
  Download, Github, GraduationCap, Linkedin, Mail, Menu, Moon, Sun, X,
  MapPin, Sparkles, Terminal, Workflow, Smartphone, Globe, Wallet, ShoppingBag,
  ShoppingCart, ExternalLink, CheckCircle2
} from "lucide-react";

const projects = [
  {
    name: "ExpenseTracker",
    type: "Personal Finance · Full Stack",
    description: "A personal finance app concept for organizing income and expenses and reviewing spending in one place.",
    tags: ["MERN Stack", "React", "Node.js", "MongoDB"],
    icon: Wallet,
    link: "https://expense-tracker-jyotish6.vercel.app/",
    number: "01",
  },
  {
    name: "Forever E-Commerce",
    type: "Online Shopping",
    description: "An e-commerce storefront with product browsing and a focused, user-friendly shopping experience.",
    tags: ["React", "JavaScript", "CSS"],
    icon: ShoppingBag,
    link: "https://forever-ecommerce-frontend-wrf5.onrender.com/",
    number: "02",
  },
  {
    name: "JobConnect",
    type: "Job Portal · Full Stack",
    description: "A job portal connecting candidates and recruiters with role-based dashboards, job applications, and application status tracking.",
    tags: ["MERN Stack", "JWT", "REST APIs"],
    icon: BriefcaseBusiness,
    link: "https://job-connect-brown-omega.vercel.app/",
    number: "03",
  },
  {
    name: "QuickMart",
    type: "Grocery Shopping",
    description: "A grocery shopping platform concept with product categories, customer access, and an order workflow.",
    tags: ["MERN Stack", "MongoDB", "Socket.IO"],
    icon: ShoppingCart,
    link: "https://quick-mart-gray.vercel.app/",
    number: "04",
  },
  {
    name: "Weather Application",
    type: "Weather · API Project",
    description: "A weather app interface for searching a city and viewing current weather conditions with weather icons.",
    tags: ["HTML", "CSS", "JavaScript", "Weather API"],
    icon: Globe,
    link: "https://jyotishkumar-das.github.io/Wheather-App/",
    number: "05",
  },
];

const skills = [
  { name: "JavaScript", group: "Language", icon: Code2 },
  { name: "React.js", group: "Frontend", icon: Workflow },
  { name: "HTML5 & CSS3", group: "Frontend", icon: Globe },
  { name: "Tailwind CSS", group: "UI Styling", icon: Smartphone },
  { name: "Node.js", group: "Backend", icon: Terminal },
  { name: "Express.js", group: "Backend", icon: Workflow },
  { name: "MongoDB", group: "Database", icon: Database },
  { name: "REST APIs & JWT", group: "API & Auth", icon: CheckCircle2 },
  { name: "Git & GitHub", group: "Tools", icon: Github },
  { name: "Postman", group: "Tools", icon: Workflow },
  { name: "Java", group: "Language", icon: Code2 },
  { name: "Python (Basic)", group: "Language", icon: Terminal },
];

const certifications = [
  "Computer Network and Internet Protocol — NPTEL, IIT Bangalore",
  "Industry 4.0 & IoT (Elite) — NPTEL, IIT Kharagpur",
  "Introduction to Large Language Models (Elite) — NPTEL, IIT Madras",
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(true);
  const [role, setRole] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const roles = ["MERN Stack Developer", "Frontend Developer", "CSE Student"];

  useEffect(() => {
    const full = roles[roleIndex];
    let timeout;
    if (!deleting && role.length < full.length) {
      timeout = setTimeout(() => setRole(full.slice(0, role.length + 1)), 78);
    } else if (!deleting && role.length === full.length) {
      timeout = setTimeout(() => setDeleting(true), 1300);
    } else if (deleting && role.length > 0) {
      timeout = setTimeout(() => setRole(full.slice(0, role.length - 1)), 36);
    } else if (deleting && role.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [role, deleting, roleIndex]);

  useEffect(() => {
    const nodes = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className={dark ? "app dark" : "app light"}>
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <header className="topbar">
        <a className="brand" href="#home" onClick={closeMenu}>JD<span>.</span></a>
        <nav className={menuOpen ? "nav nav-open" : "nav"}>
          {["About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>
          ))}
        </nav>
        <div className="nav-actions">
          <button className="icon-button" onClick={() => setDark(!dark)} aria-label="Toggle theme">
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a className="nav-cta" href="#contact">Let's talk <ArrowUpRight size={16} /></a>
          <button className="icon-button menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="availability"><span className="pulse-dot" /> Available for opportunities</div>
            <p className="eyebrow">HELLO, I'M</p>
            <h1>Jyotish Kumar<br /><span>Das.</span></h1>
            <h2 className="role-line">I build <span>{role}<i className="cursor">|</i></span></h2>
            <p className="hero-description">
              MERN Stack Developer passionate about building secure, scalable web applications
              and clean, responsive user experiences.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <ArrowRight size={17} /></a>
              <a className="button button-secondary" href="/Jyotish-Kumar-Das-Resume.pdf" target="_blank" rel="noreferrer">
                <Download size={17} /> View resume
              </a>
            </div>
            <div className="social-row">
              <a href="https://github.com/Jyotishkumar-das" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={19} /></a>
              <a href="https://www.linkedin.com/in/jyotish-kumar-das-a3413a295" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={19} /></a>
              <a href="mailto:jyotishkumardas1@gmail.com" aria-label="Email"><Mail size={19} /></a>
              <span className="social-caption">Connect with me</span>
            </div>
          </div>
          <div className="hero-visual">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="photo-frame">
              <img src="/jyotish.jpg" alt="Jyotish Kumar Das" />
            </div>
            <div className="floating-card card-code"><Code2 size={18} /><span>Clean code<br /><b>Thoughtful UI</b></span></div>
            <div className="floating-card card-stack"><span className="stack-dot" /> MERN Stack</div>
            <div className="hero-index">01 <span>/ DEVELOPER PORTFOLIO</span></div>
          </div>
          <a className="scroll-cue" href="#about"><ArrowDown size={16} /> Scroll to explore</a>
        </section>

        <section className="section-wrap section-block" id="about">
          <div className="section-heading reveal"><p className="eyebrow">A LITTLE ABOUT ME</p><h2>Curious mind.<br /><span>Builder's mindset.</span></h2></div>
          <div className="about-grid">
            <div className="about-main reveal">
              <div className="section-number">01 / ABOUT</div>
              <p>I'm a Computer Science Engineering student at GIFT Autonomous College, Bhubaneswar, focused on full-stack web development.</p>
              <p>I enjoy turning ideas into practical digital experiences—from responsive interfaces to backend APIs and database-driven features. I like learning by building, debugging, and improving real projects.</p>
              <div className="location-line"><MapPin size={17} /> Odisha, India</div>
            </div>
            <div className="stats-grid reveal">
              <div className="stat-card"><span className="stat-symbol">{"</>"}</span><strong>MERN</strong><small>Full-stack focus</small></div>
              <div className="stat-card"><GraduationCap size={25} /><strong>8.5</strong><small>CGPA · B.Tech CSE</small></div>
              <div className="stat-card"><Sparkles size={25} /><strong>Build</strong><small>Learn by doing</small></div>
              <div className="stat-card"><Globe size={25} /><strong>Web</strong><small>Responsive experiences</small></div>
            </div>
          </div>
        </section>

        <section className="section-wrap section-block" id="skills">
          <div className="section-heading reveal"><p className="eyebrow">MY TOOLKIT</p><h2>Skills & <span>technologies.</span></h2><p className="section-intro">Tools I use to build, connect, and ship web applications.</p></div>
          <div className="skills-grid">
            {skills.map(({ name, group, icon: Icon }, i) => (
              <div className="skill-card reveal" key={name} style={{ "--delay": `${(i % 4) * 70}ms` }}>
                <div className="skill-icon"><Icon size={20} /></div><div><strong>{name}</strong><small>{group}</small></div><ArrowUpRight className="skill-arrow" size={16} />
              </div>
            ))}
          </div>
        </section>

        <section className="section-wrap section-block" id="projects">
          <div className="section-heading project-heading reveal"><div><p className="eyebrow">SELECTED WORK</p><h2>Projects with <span>purpose.</span></h2></div><p className="section-intro">A few applications I've built and deployed.</p></div>
          <div className="projects-grid">
            {projects.map(({ name, type, description, tags, icon: Icon, link, number }) => (
              <article className="project-card reveal" key={name}>
                <div className="project-top"><span className="project-number">{number} / 04</span><a href={link} target="_blank" rel="noreferrer" aria-label={`Open ${name}`}><ArrowUpRight size={19} /></a></div>
                <div className="project-icon"><Icon size={27} /></div>
                <p className="project-type">{type}</p>
                <h3>{name}</h3>
                <p className="project-description">{description}</p>
                <div className="tag-row">{tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                <a className="project-link" href={link} target="_blank" rel="noreferrer">View live project <ExternalLink size={15} /></a>
              </article>
            ))}
          </div>
        </section>

        <section className="section-wrap section-block" id="experience">
          <div className="section-heading reveal"><p className="eyebrow">WHERE I'VE LEARNED</p><h2>Experience & <span>education.</span></h2></div>
          <div className="timeline">
            <article className="timeline-item reveal"><div className="timeline-marker" /><div className="timeline-date">MAY 2025 — JUL 2025</div><div className="timeline-body"><span className="timeline-label">INTERNSHIP</span><h3>Web Design Intern</h3><h4>Central Tool Room & Training Centre (CTTC) · Bhubaneswar</h4><p>Developed responsive web pages with HTML, CSS, Bootstrap, and JavaScript. Built an online pharmacy website and worked on usability and cross-browser responsiveness.</p><div className="tag-row"><span>HTML</span><span>CSS</span><span>Bootstrap</span><span>JavaScript</span></div></div></article>
            <article className="timeline-item reveal"><div className="timeline-marker" /><div className="timeline-date">JUL 2024 — AUG 2024</div><div className="timeline-body"><span className="timeline-label">INTERNSHIP</span><h3>Programming with Python</h3><h4>Moniba Technology & Innovations · Bhubaneswar</h4><p>Practiced programming fundamentals, logical problem-solving, debugging, functions, collections, and file handling.</p><div className="tag-row"><span>Python</span><span>Problem Solving</span></div></div></article>
            <article className="timeline-item reveal"><div className="timeline-marker" /><div className="timeline-date">2023 — PRESENT</div><div className="timeline-body"><span className="timeline-label">EDUCATION</span><h3>B.Tech, Computer Science Engineering</h3><h4>GIFT Autonomous College · Bhubaneswar (BPUT)</h4><p>Currently pursuing a bachelor's degree in Computer Science Engineering. CGPA: 8.5.</p></div></article>
            <article className="timeline-item reveal"><div className="timeline-marker" /><div className="timeline-date">2021 — 2023</div><div className="timeline-body"><span className="timeline-label">EDUCATION</span><h3>Intermediate · CHSE Odisha</h3><h4>Bahanaga Higher Secondary School, Bahanaga</h4><p>Completed higher secondary education with 72%.</p></div></article>
          </div>
          <div className="certifications reveal"><div><p className="eyebrow">CONTINUOUS LEARNING</p><h3>Certifications</h3></div><ul>{certifications.map(item => <li key={item}><CheckCircle2 size={17} />{item}</li>)}</ul></div>
        </section>

        <section className="section-wrap section-block contact-section" id="contact">
          <div className="section-heading reveal contact-title">
            <p className="eyebrow">GET IN TOUCH</p>
            <h2>Contact <span>me.</span></h2>
          </div>
          <div className="contact-layout">
            <div className="contact-info reveal">
              <h3>Let's Work Together</h3>
              <p>Have a project idea, internship opportunity, or just want to say hello? Feel free to send me a message.</p>
              <a className="contact-item" href="mailto:jyotishkumardas1@gmail.com">
                <span className="contact-icon"><Mail size={19} /></span>
                <span><b>Email</b><small>jyotishkumardas1@gmail.com</small></span>
              </a>
              <div className="contact-item">
                <span className="contact-icon"><MapPin size={19} /></span>
                <span><b>Location</b><small>Odisha, India</small></span>
              </div>
              <div className="contact-socials">
                <a href="https://www.linkedin.com/in/jyotish-kumar-das-a3413a295" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={19} /></a>
                <a href="mailto:jyotishkumardas1@gmail.com" aria-label="Email"><Mail size={19} /></a>
                <a href="https://twitter.com/" target="_blank" rel="noreferrer" aria-label="X"><ArrowUpRight size={19} /></a>
                <a href="https://github.com/Jyotishkumar-das" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={19} /></a>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="footer section-wrap"><a className="brand" href="#home">JD<span>.</span></a><p>Designed & built by Jyotish Kumar Das · © {new Date().getFullYear()}</p><a href="#home" className="back-top">Back to top ↑</a></footer>
    </div>
  );
}

function ContactForm() {
  const [status, setStatus] = useState("");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    setStatus("Opening your email app so you can send the message.");
    window.location.href = `mailto:jyotishkumardas1@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <form className="contact-form reveal" onSubmit={handleSubmit}>
      <div className="form-row">
        <input name="name" value={form.name} onChange={handleChange} placeholder="Your Name" aria-label="Your name" required />
        <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Your Email" aria-label="Your email" required />
      </div>
      <textarea name="message" value={form.message} onChange={handleChange} rows="7" placeholder="Write your message..." aria-label="Your message" required />
      <button type="submit" className="button button-primary form-submit"><Mail size={17} /> Send Message</button>
      <p className="form-status" aria-live="polite">{status}</p>
      <p className="form-note">This form opens your default email app with the message prepared for you.</p>
    </form>
  );
}

export default App;