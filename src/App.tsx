import { useEffect, useMemo, useState } from 'react';
import { ArrowUp, BriefcaseBusiness, ChevronRight, Code2, Compass, Download, ExternalLink, Github, Instagram, Linkedin, Mail, MapPin, Menu, Moon, Sparkles, Star, Sun, Sunrise, Sunset, X } from 'lucide-react';
import { portfolio } from '@/data/portfolio';
import { getSceneForDate, scenes, type SceneDefinition } from '@/utils/sceneTime';

const skillFilters = ['All', 'Frontend', 'Backend', 'AI', 'Creative'] as const;
type SkillFilter = typeof skillFilters[number];

function PixelLogo() {
  return <span className="pixel-logo" aria-hidden="true"><span /><span /><span /><span /><span /></span>;
}

function SectionHeading({ eyebrow, title, detail }: { eyebrow: string; title: string; detail?: string }) {
  return <div className="section-heading"><div><p className="eyebrow"><span className="eyebrow-line" />{eyebrow}</p><h2>{title}</h2></div>{detail && <p className="section-detail">{detail}</p>}</div>;
}

function SceneIcon({ period }: { period: SceneDefinition['period'] }) {
  if (period === 'dawn') return <Sunrise size={16} aria-hidden="true" />;
  if (period === 'day') return <Sun size={16} aria-hidden="true" />;
  if (period === 'sunset') return <Sunset size={16} aria-hidden="true" />;
  return <Moon size={16} aria-hidden="true" />;
}

function PixelClock({ now, scene }: { now: Date; scene: SceneDefinition }) {
  const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const date = now.toLocaleDateString([], { weekday: 'short', day: '2-digit', month: 'short' });
  return <aside className="pixel-clock" aria-label={`Local time ${time}, ${date}. Current scene: ${scene.label}`}><span className="clock-icon"><SceneIcon period={scene.period} /></span><span><strong>{time}</strong><small>{date} · {scene.label}</small></span></aside>;
}

function useTypewriter(phrases: readonly string[]): string {
  const [typedPhrase, setTypedPhrase] = useState('');

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setTypedPhrase(phrases[0]);
      return;
    }

    let phraseIndex = 0;
    let currentText = '';
    let deleting = false;
    let timeoutId: number | undefined;

    const schedule = (delay: number): void => {
      timeoutId = window.setTimeout(tick, delay);
    };

    const tick = (): void => {
      const phrase = phrases[phraseIndex];
      if (!deleting) {
        currentText = phrase.slice(0, currentText.length + 1);
        setTypedPhrase(currentText);
        if (currentText === phrase) {
          deleting = true;
          schedule(900);
        } else {
          schedule(95);
        }
        return;
      }

      currentText = currentText.slice(0, -1);
      setTypedPhrase(currentText);
      if (!currentText) {
        deleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        schedule(280);
      } else {
        schedule(55);
      }
    };

    schedule(95);
    return () => { if (timeoutId !== undefined) window.clearTimeout(timeoutId); };
  }, [phrases]);

  return typedPhrase;
}

const typewriterPhrases = ['Makarand Pashilkar', 'Software Developer', 'Creator', 'Problem Solver'] as const;

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [skillFilter, setSkillFilter] = useState<SkillFilter>('All');
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [now, setNow] = useState(() => new Date());
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const savedTheme = window.localStorage.getItem('pixel-pond-theme');
    return savedTheme === 'light' ? 'light' : 'dark';
  });
  const typedPhrase = useTypewriter(typewriterPhrases);
  const filteredSkills = useMemo(() => portfolio.skills.filter((skill) => skillFilter === 'All' || skill.category === skillFilter), [skillFilter]);
  const publishedProjects = portfolio.projects.filter((project) => project.published);
  const visibleProjects = showAllProjects ? publishedProjects : publishedProjects.slice(0, 3);
  const publishedExperience = portfolio.experience.filter((item) => item.published);
  const scene = getSceneForDate(now);

  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact'].map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && setActiveSection(entry.target.id)), { rootMargin: '-35% 0px -55% 0px' });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem('pixel-pond-theme', theme);
  }, [theme]);

  useEffect(() => {
    document.title = portfolio.seo.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', portfolio.seo.description);
  }, []);

  useEffect(() => {
    const refreshTime = () => setNow(new Date());
    const interval = window.setInterval(refreshTime, 1000);
    const handleVisibility = () => document.visibilityState === 'visible' && refreshTime();
    document.addEventListener('visibilitychange', handleVisibility);
    return () => { window.clearInterval(interval); document.removeEventListener('visibilitychange', handleVisibility); };
  }, []);

  useEffect(() => {
    Object.values(scenes).forEach((item) => { if (item.src !== scene.src) { const image = new Image(); image.src = item.src; } });
  }, [scene.src]);

  const navigate = (id: string) => { setMenuOpen(false); document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); };
  const toggleTheme = () => setTheme((currentTheme) => currentTheme === 'dark' ? 'light' : 'dark');
  const externalProps = { target: '_blank', rel: 'noreferrer' };
  const resumeUrl = portfolio.resumeUrl?.trim();

  return <div className="site-shell">
    <header className="site-nav"><a href="#home" className="brand" onClick={() => navigate('home')}><PixelLogo /><span>{portfolio.name}</span></a><button className="menu-toggle" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button><nav className={menuOpen ? 'nav-links is-open' : 'nav-links'} aria-label="Primary navigation">{['home', 'about', 'skills', 'experience', 'projects', 'contact'].map((id) => <a key={id} className={activeSection === id ? 'active' : ''} href={`#${id}`} onClick={() => navigate(id)}>{id}</a>)}</nav><button className={`theme-toggle ${theme}`} type="button" onClick={toggleTheme} aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}>{theme === 'dark' ? <Sun size={17} aria-hidden="true" /> : <Moon size={17} aria-hidden="true" />}</button></header><PixelClock now={now} scene={scene} />
    <main>
      <section id="home" className="hero-section"><div className="lake-scene"><img className="hero-art" src={scene.src} alt={`${scene.label} pixel-art lake with mountains, koi, a dock, lantern, and seated character`} onError={(event) => { event.currentTarget.onerror = null; event.currentTarget.src = '/lake-hero.svg'; }} /><div className="art-vignette" aria-hidden="true" /></div><div className="hero-content"><p className="hero-kicker">Hello, traveler <span className="tiny-star">✦</span></p><h1><span className="hero-greeting">Hi, I'm</span><strong aria-label={typedPhrase || typewriterPhrases[0]}><span className="hero-name-wrap"><span className="hero-name-reserve" aria-hidden="true">Software Engineer</span><span className="hero-name-live" aria-hidden="true">{typedPhrase}<i className="type-cursor" /></span></span></strong></h1><p className="hero-role">{portfolio.headline}</p><p className="hero-intro">{portfolio.intro}</p><div className="hero-actions">{resumeUrl ? <a className="button button-primary" href={resumeUrl} download>Download Resume <Download size={15} /></a> : <button className="button button-primary button-disabled" type="button" disabled title={import.meta.env.DEV ? 'Add a resume path in src/data/portfolio.ts' : 'Resume coming soon'}>Download Resume <Download size={15} /></button>}<button className="button button-ghost" onClick={() => navigate('contact')}>Get in touch <Mail size={15} /></button></div></div><div className="scene-caption"><span className="caption-line" />{scene.label}</div><a href="#about" className="scroll-cue" onClick={() => navigate('about')}><span className="mouse-icon" />Scroll to explore</a></section>
      <div className="page-content">
        {portfolio.visibility.about && <section id="about" className="content-section about-section"><SectionHeading eyebrow="01 / About" title="A little about me" detail="The person behind the pixels." /><div className="about-grid"><div className="portrait-card"><img src="/portrait.png" alt="Pixel-art illustration of a person watching a lake at sunset" /><span className="portrait-label">still learning<span>↗</span></span></div><div className="about-copy"><p>{portfolio.about}</p><div className="info-list"><div><MapPin size={16} /><span><small>Location</small>{portfolio.location}</span></div><div><BriefcaseBusiness size={16} /><span><small>Status</small>{portfolio.availability}</span></div><div><Sparkles size={16} /><span><small>Currently into</small>{portfolio.interests}</span></div></div></div></div></section>}
        {portfolio.visibility.skills && <section id="skills" className="content-section skills-section"><div className="section-watermark" aria-hidden="true">SKILLS</div><SectionHeading eyebrow="02 / Skills" title="Tools in my backpack" detail="A growing collection of things I enjoy using." /><div className="filter-row" role="group" aria-label="Filter skills">{skillFilters.map((filter) => <button key={filter} className={skillFilter === filter ? 'filter-button active' : 'filter-button'} onClick={() => setSkillFilter(filter)}>{filter}</button>)}</div><div className="skills-grid">{filteredSkills.map((skill) => <article className="skill-card" key={skill.id}><span className="skill-icon">{skill.icon}</span><div><h3>{skill.name}</h3><p>{skill.description}</p></div><span className="skill-category">{skill.category}</span></article>)}</div></section>}
        <div className="split-section"><section id="experience" className="content-section experience-section"><SectionHeading eyebrow="03 / Experience" title="The journey so far" />{publishedExperience.length ? <div className="timeline">{publishedExperience.map((item) => <article className="timeline-item" key={item.id}><span className="timeline-dot" /><p className="timeline-date">{item.startDate} — {item.endDate || 'Present'}</p><h3>{item.role}</h3><p className="timeline-org">{item.organization}</p>{(item.type || item.location) && <p className="timeline-meta">{[item.type, item.location].filter(Boolean).join(' · ')}</p>}<p>{item.summary}</p><div className="tag-row">{item.skills.map((skill) => <span key={skill}>{skill}</span>)}</div></article>)}</div> : <div className="empty-state"><Compass size={22} /><p>My journey is growing — more experiences coming soon.</p></div>}</section>
          {portfolio.visibility.projects && <section id="projects" className="content-section projects-section"><SectionHeading eyebrow="04 / Projects" title="Things I've made" /><div className="project-list">{visibleProjects.length ? visibleProjects.map((project) => <article className="project-card" key={project.id}>{project.thumbnail ? <img className="project-thumb" src={project.thumbnail} alt={project.thumbnailAlt || `${project.name} thumbnail`} loading="lazy" /> : <div className="project-thumb project-thumb-fallback" aria-label={`${project.name} has no image yet`}><Code2 size={22} /></div>}<div className="project-body"><div className="project-topline"><span>{project.category}</span>{project.featured && <Star size={13} fill="currentColor" />}</div><h3>{project.name}</h3><p>{project.description}</p><div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>{(project.liveUrl || project.sourceUrl) && <div className="project-links">{project.liveUrl && <a href={project.liveUrl} {...externalProps}>Live demo <ExternalLink size={13} /></a>}{project.sourceUrl && <a href={project.sourceUrl} {...externalProps}>Source <Code2 size={13} /></a>}</div>}{project.status && <span className="project-status">{project.status}</span>}</div></article>) : <div className="empty-state"><Code2 size={22} /><p>Projects are taking shape. Check back soon.</p></div>}</div>{publishedProjects.length > 3 && <button className="text-button" onClick={() => setShowAllProjects(!showAllProjects)}>{showAllProjects ? 'Show less' : 'View all projects'} <ChevronRight size={14} /></button>}</section>}
        </div>
        {portfolio.visibility.contact && <section id="contact" className="contact-section"><div className="contact-content"><p className="eyebrow"><span className="eyebrow-line" />05 / Contact</p><h2>Let's build something cool together.</h2><p>I'm open to opportunities, freelance work, and conversations about tech and AI.</p><div className="contact-links">{portfolio.socialLinks.github ? <a href={portfolio.socialLinks.github} {...externalProps}><Github size={17} />GitHub</a> : import.meta.env.DEV && <span className="contact-config-hint"><Github size={17} />Add your GitHub URL</span>}{resumeUrl ? <a href={resumeUrl} download><Download size={17} />Download Resume</a> : import.meta.env.DEV && <span className="contact-config-hint"><Download size={17} />Add your resume path</span>}{portfolio.socialLinks.email ? <a href={`mailto:${portfolio.socialLinks.email}`}><Mail size={17} />Email</a> : import.meta.env.DEV && <span className="contact-config-hint"><Mail size={17} />Add your email address</span>}{portfolio.socialLinks.linkedin && <a href={portfolio.socialLinks.linkedin} {...externalProps}><Linkedin size={17} />LinkedIn</a>}{portfolio.socialLinks.instagram && <a href={portfolio.socialLinks.instagram} {...externalProps}><Instagram size={17} />Instagram</a>}</div></div></section>}
      </div>
    </main>
    <footer className="site-footer"><div><PixelLogo /><span>made with patience by {portfolio.name}</span></div><span>© {new Date().getFullYear()} · stay curious</span><a href="#home" aria-label="Back to top" onClick={() => navigate('home')}><ArrowUp size={16} /></a></footer>
  </div>;
}

export default App;
