import { portfolio as p } from "@/content/portfolio";
import { Navigation } from "@/components/navigation";

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function ExternalLink({ href, children, className = "text-link" }: { href: string; children: React.ReactNode; className?: string }) {
  return <a href={href} className={className} target="_blank" rel="noopener noreferrer">{children}<Arrow /></a>;
}

function SourceLink({ repository }: { repository: string | null }) {
  return repository ? <ExternalLink href={repository}>View source</ExternalLink> : <span className="private-source"><Lock />Private source</span>;
}

function SectionLabel({ number, children }: { number: string; children: React.ReactNode }) {
  return <div className="section-label"><span>{number}</span>{children}</div>;
}

export default function Home() {
  const featured = p.projects[0];
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <Navigation />
    <main id="main">
      <section className="hero container" id="top" aria-labelledby="hero-title">
        <div className="hero-main">
          <p className="eyebrow"><span className="status-dot" />{p.availability}</p>
          <h1 id="hero-title">{p.headline[0]}<br /><em>{p.headline[1]}</em></h1>
          <p className="hero-description">{p.introduction}</p>
          <div className="hero-actions">
            <a className="button primary" href="#projects">View projects <span aria-hidden="true">↓</span></a>
            <a className="button secondary" href={p.links.resume} download>Download résumé <span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="art-top"><span>A WORK IN PROGRESS</span><span>AND ALWAYS CURIOUS</span></div>
          <div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="orbit orbit-three" />
          <div className="art-mark">r<span>t</span><i>.</i></div>
          <span className="orbit-point point-one" /><span className="orbit-point point-two" />
          <div className="art-bottom"><span>IDEA → CODE → SOMETHING USEFUL</span><span>01 / ∞</span></div>
        </div>
        <div className="hero-footer"><span><span className="location-icon" aria-hidden="true">⌖</span>{p.location}</span><span>Sacramento State <span className="separator">/</span> CS, Class of 2027</span><a href="#projects">A few things I've made <span aria-hidden="true">↓</span></a></div>
      </section>

      <section id="projects" className="projects section container" aria-labelledby="projects-title">
        <div className="section-intro"><div><SectionLabel number="01">SELECTED WORK</SectionLabel><h2 id="projects-title">From idea to <em>in the world.</em></h2></div><p>A mix of independent building,<br />teamwork, and learning by doing.</p></div>
        <article className="featured-project" aria-labelledby="carsearch-title">
          <div className="project-visual car-visual" aria-hidden="true">
            <div className="visual-top"><span>CS / 01</span><span className="visual-badge"><span />{featured.status}</span></div>
            <div className="road road-one" /><div className="road road-two" />
            <div className="car-art-title"><span className="visual-eyebrow">THE NEXT GOOD FIND</span><h3>{featured.visual.title}<span>↗</span></h3><p>{featured.visual.subtitle}</p></div>
            <div className="visual-bottom"><span>{featured.visual.note}</span><span aria-hidden="true">↗</span></div>
          </div>
          <div className="featured-copy"><p className="project-category">{featured.category} <span>/ {featured.ownership}</span></p><h3 id="carsearch-title">{featured.name}</h3><p className="project-description">{featured.description}</p>
            <div className="project-details">{featured.details.map(item => <p key={item.title}><strong>{item.title}.</strong> {item.text}</p>)}</div>
            <ul className="tags" aria-label="CarSearch technologies">{featured.technologies.map(tech => <li key={tech}>{tech}</li>)}</ul>
            <div className="project-links"><ExternalLink href={featured.demo!}>Explore live site</ExternalLink><SourceLink repository={featured.repository} /></div>
          </div>
        </article>
        <div className="project-grid">{p.projects.slice(1).map((project, index) => <article className="small-project" key={project.name} aria-labelledby={`project-${project.number}`}>
          <div className={`project-visual ${index === 0 ? "tea-visual" : "waste-visual"}`} aria-hidden="true">
            <div className="visual-top"><span>{project.number} / {index === 0 ? "IN THE MAKING" : "MADE TO INCLUDE"}</span><span aria-hidden="true">{index === 0 ? "◌" : "↗"}</span></div>
            <div className="small-art-title"><h3>{project.visual.title}</h3><p>{project.visual.subtitle}</p></div>
            <div className="visual-bottom"><span>{project.visual.note}</span><span aria-hidden="true">{index === 0 ? "✳" : "↻"}</span></div>
          </div>
          <div className="small-project-copy"><p className="project-category">{project.status}</p><div className="project-title-row"><h3 id={`project-${project.number}`}>{project.name}</h3><span>{project.ownership}</span></div><p className="project-description">{project.description}</p>
            <div className="project-details">{project.details.map(detail => <p key={detail.title}><strong>{detail.title}.</strong> {detail.text}</p>)}</div>
            <ul className="tags" aria-label={`${project.name} ${index === 0 ? "planned technologies" : "technologies"}`}>{project.technologies.map(tech => <li key={tech}>{tech}</li>)}</ul>
            <SourceLink repository={project.repository} />
          </div>
        </article>)}</div>
      </section>

      <section className="about-section" id="about" aria-labelledby="about-title"><div className="container section">
        <SectionLabel number="02">A LITTLE ABOUT ME</SectionLabel>
        <div className="about-grid"><div><h2 id="about-title" className="multiline">{p.about.heading}</h2><div className="about-copy">{p.about.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div><p className="community-note">{p.about.community}</p></div>
          <aside className="education" aria-label="Education"><span className="education-symbol" aria-hidden="true">↗</span><p className="eyebrow">LEARNING & BUILDING</p><h3>{p.education.school}</h3><p>{p.education.degree}</p><p className="graduation">{p.education.graduation}</p><div className="education-stats"><div><strong>{p.education.gpa}</strong><span>GPA</span></div><div><strong>{p.education.distinction}</strong><span>Academic recognition</span></div></div></aside>
        </div>
        <div className="skills-grid">{p.skills.map(group => <div key={group.category}><h3>{group.category}</h3><p>{group.items.join(" · ")}</p></div>)}</div>
      </div></section>

      <section className="experience section container" id="experience" aria-labelledby="experience-title"><div className="section-intro"><div><SectionLabel number="03">EXPERIENCE</SectionLabel><h2 id="experience-title">Technology for <em>more people.</em></h2></div></div>
        <article className="experience-entry"><div className="experience-date"><span className="status-dot" />{p.experience.period}<span className="experience-location">Sacramento, CA</span></div><div><h3>{p.experience.title}</h3><p className="organization">{p.experience.organization}</p><p className="experience-description">{p.experience.description}</p><ul>{p.experience.highlights.map(highlight => <li key={highlight}>{highlight}</li>)}</ul><span className="experience-theme">ACCESSIBILITY IS PART OF THE WORK.</span></div></article>
      </section>

      <section className="contact-section" id="contact" aria-labelledby="contact-title"><div className="container contact-inner"><div><SectionLabel number="04">WHAT'S NEXT?</SectionLabel><h2 id="contact-title" className="multiline">{p.contact.heading}</h2><p>{p.contact.message}</p><a className="email-link" href={`mailto:${p.email}`}>{p.email}<Arrow /></a></div><div className="contact-side"><p><span className="status-dot" />{p.availability}</p><ExternalLink href={p.links.github}>GitHub</ExternalLink><ExternalLink href={p.links.linkedin}>LinkedIn</ExternalLink><a className="text-link" href={p.links.resume} download>Download résumé<Arrow /></a></div></div></section>
    </main>
    <footer className="container footer"><a href="#top" className="footer-name">{p.name}<span>.</span></a><p>Built with care. Still learning, always.</p><a href="#top">Back to top <span aria-hidden="true">↑</span></a></footer>
  </>;
}

function Lock() {
  return <svg aria-hidden="true" width="13" height="14" viewBox="0 0 16 18" fill="none"><rect x="2.5" y="7.5" width="11" height="8" rx="2" stroke="currentColor" /><path d="M5 7V5a3 3 0 0 1 6 0v2" stroke="currentColor" /></svg>;
}
