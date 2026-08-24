import { useEffect, useState } from 'react'
import { ArrowUpRight, ChevronDown, Code2, ExternalLink, Mail, Menu, Network, X } from 'lucide-react'
import { initialData } from './data'

function ProjectCard({ project, index, onOpen }) {
  return <article className={`project-card ${project.accent}`} onClick={() => onOpen(project)}>
    <div className="project-number">{String(index + 1).padStart(2, '0')}</div><span className="project-type">{project.type}</span>
    <div className="project-visual"><div className="visual-lines" /><span>{project.visual || 'signal / system / interface'}</span></div>
    <h3>{project.title}</h3><p>{project.summary}</p><button className="project-open" aria-label={`Open ${project.title}`}><ArrowUpRight size={20} /></button>
  </article>
}

function App() {
  const [activeProject, setActiveProject] = useState(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const [content, setContent] = useState(initialData)

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}db.json`).then((response) => response.json()).then((json) => setContent({ ...initialData, ...json })).catch(() => {})
  }, [])

  const jumpTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <main>
      <nav className="nav shell">
        <button className="wordmark" onClick={() => jumpTo('top')} aria-label="Go to top">RM<span>.</span></button>
        <div className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
          <button onClick={() => jumpTo('work')}>Work</button>
          <button onClick={() => jumpTo('approach')}>Approach</button>
          <button onClick={() => jumpTo('about')}>About</button>
          <button className="nav-contact" onClick={() => jumpTo('contact')}>Let's talk <ArrowUpRight size={15} /></button>
        </div>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      <section className="hero shell" id="top">
        <div className="hero-copy reveal">
          <p className="eyebrow"><span className="status-dot" /> Available for thoughtful problems</p>
          <h1>Interfaces that make<br /><em>complexity feel clear.</em></h1>
          <p className="hero-lede">I’m Rohan, an AI Frontend Engineer building fast, intelligent products around data, people, and the work between them.</p>
          <div className="hero-actions">
            <button className="button button-dark" onClick={() => jumpTo('work')}>See selected work <ArrowUpRight size={17} /></button>
            <a className="text-link" href="mailto:rohan.work.0109@gmail.com">Get in touch <Mail size={16} /></a>
          </div>
        </div>
        <div className="hero-art" aria-label="Data visualization illustration">
          <div className="art-label">R / 001 — SIGNAL &amp; SYSTEM</div>
          <div className="orb orb-one" /><div className="orb orb-two" />
          <div className="axis axis-x" /><div className="axis axis-y" />
          <div className="data-tag tag-one">REACT <b>98%</b></div>
          <div className="data-tag tag-two">RAG <b>LIVE</b></div>
          <div className="data-tag tag-three">UI / DATA</div>
          <div className="art-caption">Turning raw signal<br />into useful direction.</div>
        </div>
      </section>

      <section className="ticker" aria-label="Areas of expertise"><div className="ticker-track"><span>AI-ASSISTED ENGINEERING</span><i>✳</i><span>DATA-DRIVEN UI</span><i>✳</i><span>REACT ARCHITECTURE</span><i>✳</i><span>HUMAN-CENTERED SYSTEMS</span><i>✳</i></div></section>

      <section className="work shell section" id="work">
        <div className="section-heading"><div><p className="eyebrow">01 / Selected work</p><h2>Proof, not promises.</h2></div><p className="section-note">A few ways I’ve helped turn difficult inputs into calm, capable experiences.</p></div>
        <div className="project-group"><p className="group-label">AI projects</p><div className="project-grid">{content.aiProjects.map((project, index) => <ProjectCard project={project} index={index} onOpen={setActiveProject} key={project.id} />)}</div></div>
        <div className="project-group"><p className="group-label">Projects</p><div className="project-grid">{content.projects.map((project, index) => <ProjectCard project={project} index={index} onOpen={setActiveProject} key={project.id} />)}</div></div>
        <div className="project-group side-projects"><p className="group-label">Fun side projects</p>{content.sideProjects.length ? <div className="project-grid">{content.sideProjects.map((project, index) => <ProjectCard project={project} index={index} onOpen={setActiveProject} key={project.id} />)}</div> : <div className="empty-projects">A place for experiments, playful builds, and things I make just to see what happens.<span>Coming soon</span></div>}</div>
      </section>

      <section className="approach section" id="approach"><div className="shell approach-layout"><div><p className="eyebrow">02 / How I work</p><h2>Build the model.<br /><em>Then make it human.</em></h2></div><div className="approach-copy"><p className="large-copy">The best interfaces don’t hide complexity. They give it a shape people can understand.</p><div className="approach-list"><div><span>01</span><p><b>Find the signal</b><br />I start with the real data, the actual constraint, and the question behind the brief.</p></div><div><span>02</span><p><b>Shape the system</b><br />Reusable architecture, deliberate performance, and interfaces that stay legible as they grow.</p></div><div><span>03</span><p><b>Keep it useful</b><br />AI is a tool in the workflow, never a substitute for judgment, empathy, or a good edit.</p></div></div></div></div></section>

      <section className="about shell section" id="about"><div className="about-intro"><p className="eyebrow">03 / The wider picture</p><h2>A frontend engineer with a machine-learning brain and a visual maker’s eye.</h2><p>I work at the intersection of product thinking, interface craft, and intelligent systems. My background moves from 3D illustration to mobile apps to enterprise React, which means I’m comfortable zooming in on a component or out to the system around it.</p></div><div className="about-details"><div className="detail-block"><h3>Capabilities</h3>{content.skills.map(([title, text]) => <div className="skill-row" key={title}><b>{title}</b><span>{text}</span></div>)}</div><div className="detail-block"><h3>Experience</h3>{content.experience.map(([date, company, role]) => <div className="experience-row" key={company}><span>{date}</span><p><b>{company}</b><br />{role}</p></div>)}</div></div></section>

      <section className="contact" id="contact"><div className="shell contact-inner"><p className="eyebrow">04 / Start a conversation</p><h2>Have a complex thing<br /><em>worth making clear?</em></h2><a className="contact-email" href="mailto:rohan.work.0109@gmail.com">rohan.work.0109@gmail.com <ArrowUpRight size={28} /></a><div className="socials"><a href="https://github.com/Rohan0109" target="_blank" rel="noreferrer"><Code2 size={17} /> GitHub</a><a href="https://www.linkedin.com/in/rohanmurali" target="_blank" rel="noreferrer"><Network size={17} /> LinkedIn</a><a href="https://artstation.com/rohanbalaji" target="_blank" rel="noreferrer">ArtStation <ExternalLink size={15} /></a></div></div></section>

      <footer className="shell footer"><span>© 2026 Rohan M</span><span>AI Frontend Engineer / Tamil Nadu, IN</span><button onClick={() => jumpTo('top')}>Back to top <ChevronDown size={15} className="rotate" /></button></footer>

      {activeProject && <div className="modal-backdrop" onClick={() => setActiveProject(null)}><article className="modal" onClick={(event) => event.stopPropagation()}><button className="modal-close" onClick={() => setActiveProject(null)} aria-label="Close project details"><X size={20} /></button><p className="eyebrow">{activeProject.type}</p><h2>{activeProject.title}</h2><p className="modal-detail">{activeProject.detail}</p><div className="stack-list">{activeProject.stack.map((item) => <span key={item}>{item}</span>)}</div>{activeProject.link && <a className="button button-dark" href={activeProject.link} target="_blank" rel="noreferrer">View live project <ExternalLink size={16} /></a>}</article></div>}
    </main>
  )
}

export default App
