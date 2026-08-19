import React, { useState, useEffect } from 'react';
import { useTheme } from './ThemeContext';
import ParticleCanvas from './ParticleCanvas';
import Chat from './Chat';
import Contact from './Contact';
import { 
  Moon, Sun, ExternalLink, Trophy, Award, Briefcase, 
  GraduationCap, Code2, Sparkles, MapPin, HeartHandshake, 
  Users, Eye, TrendingUp, Search, ArrowRight
} from 'lucide-react';

const projectsData = [
  {
    id: 1,
    title: 'Afrizend',
    subtitle: 'afrizend.vercel.app',
    desc: 'Pan-African freelance marketplace on the Kora API with virtual wallets and dynamic currency conversion. 3rd runner-up, Kora Hackathon 2.0.',
    link: 'https://afrizend.vercel.app',
    tags: ['React', 'Node.js', 'Kora API', 'PostgreSQL'],
    category: 'fintech',
    img: 'https://api.microlink.io/?url=https://afrizend.vercel.app&screenshot=true&meta=false&embed=screenshot.url'
  },
  {
    id: 2,
    title: 'Paylance',
    subtitle: 'paylance-gmc1.onrender.com',
    desc: 'Cross-border escrow payment platform for freelancers using the Interledger Protocol (ILP) and AI milestone verification. 2nd place, Interledger Hackathon.',
    link: 'https://paylance-gmc1.onrender.com',
    tags: ['React', 'PostgreSQL', 'Node.js', 'ILP SDK'],
    category: 'fintech',
    img: 'https://api.microlink.io/?url=https://paylance-gmc1.onrender.com&screenshot=true&meta=false&embed=screenshot.url'
  },
  {
    id: 3,
    title: 'MyNoteQuest',
    subtitle: 'mynotequest.com',
    desc: 'Transform heavy PDFs into Cinematic Anime Explainers and competitive AI-powered study battles. 1,000+ active beta users.',
    link: 'https://mynotequest.com',
    tags: ['React', 'Firebase', 'Gemini 3', 'EdTech'],
    category: 'edtech',
    img: 'https://api.microlink.io/?url=https://mynotequest.com&screenshot=true&meta=false&embed=screenshot.url'
  },
  {
    id: 4,
    title: 'OyaSpray',
    subtitle: 'oyaspray.vercel.app',
    desc: 'Digital money-spraying application bringing Nigerian party culture to real-time micropayments via Interledger technology.',
    link: 'https://oyaspray.vercel.app',
    tags: ['Node.js', 'JavaScript', 'ILP SDK', 'Socket.io'],
    category: 'fintech',
    img: 'https://api.microlink.io/?url=https://oyaspray.vercel.app&screenshot=true&meta=false&embed=screenshot.url'
  },
  {
    id: 5,
    title: 'Webphinix',
    subtitle: 'webphinix.vercel.app',
    desc: 'Conversion-focused website platform for small businesses, startups, and freelancers serious about online growth.',
    link: 'https://webphinix.vercel.app',
    tags: ['React', 'Node.js', 'JavaScript'],
    category: 'fullstack',
    img: 'https://api.microlink.io/?url=https://webphinix.vercel.app&screenshot=true&meta=false&embed=screenshot.url'
  },
  {
    id: 6,
    title: 'Lost & Found System',
    subtitle: 'campussecure.vercel.app',
    desc: 'Web application allowing users to upload found items and search for lost belongings with advanced filtering and JWT auth.',
    link: 'https://campussecure.vercel.app',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    category: 'fullstack',
    img: 'https://api.microlink.io/?url=https://campussecure.vercel.app&screenshot=true&meta=false&embed=screenshot.url'
  },
  {
    id: 7,
    title: 'Flip Card Memory Game',
    subtitle: 'Interactive Web Game',
    desc: 'Interactive Memory game with clean UI, dynamic scoring, and smooth gameplay mechanics.',
    link: '#',
    tags: ['HTML', 'CSS', 'JavaScript'],
    category: 'web',
    img: 'https://images.unsplash.com/photo-1611996575749-79a3a250f948?w=600&auto=format&fit=crop'
  },
  {
    id: 8,
    title: 'Blog Platform',
    subtitle: 'praise-blog-website.vercel.app',
    desc: 'A clean blog for information dissemination and tech updates with MDX support and code syntax highlighting.',
    link: 'https://praise-blog-website.vercel.app',
    tags: ['HTML', 'CSS', 'JavaScript'],
    category: 'web',
    img: 'https://api.microlink.io/?url=https://praise-blog-website.vercel.app&screenshot=true&meta=false&embed=screenshot.url'
  },
  {
    id: 9,
    title: 'Book Catalogue',
    subtitle: 'Digital Library System',
    desc: 'Digital library system for cataloging and managing book collections with fast search and tag filtering.',
    link: '#',
    tags: ['React', 'PostgreSQL'],
    category: 'fullstack',
    img: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=600&auto=format&fit=crop'
  },
  {
    id: 10,
    title: 'Portfolio Website',
    subtitle: 'praiseadesina.vercel.app',
    desc: 'Responsive personal portfolio built with React, Vite, particle background, and AI assistant chatbot.',
    link: 'https://praiseadesina.vercel.app',
    tags: ['React', 'Vite', 'CSS3'],
    category: 'web',
    img: 'https://api.microlink.io/?url=https://praiseadesina.vercel.app&screenshot=true&meta=false&embed=screenshot.url'
  }
];

const App = () => {
  const { theme, toggleTheme } = useTheme();
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    // Ensure the website always opens at the top Hero landing page when loaded
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, []);

  const filteredProjects = activeFilter === 'all' 
    ? projectsData 
    : projectsData.filter(p => p.category === activeFilter);

  return (
    <div style={{ position: 'relative', minHeight: '100vh', width: '100%' }}>
      <ParticleCanvas />

      {/* Navigation Bar */}
      <nav style={{ 
        position: 'fixed', top: 0, width: '100%', padding: '0.85rem 2rem', 
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', 
        zIndex: 50, backdropFilter: 'blur(12px)', background: 'var(--overlay-bg)', 
        borderBottom: '1px solid var(--border-color)' 
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <a href="#hero" style={{ fontWeight: 800, letterSpacing: '-0.03em', fontSize: '1.35rem', textDecoration: 'none' }} className="gradient-text">PA.</a>
        </div>

        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: '1.5rem', fontWeight: 500, fontSize: '0.9rem' }} className="nav-links">
            <a href="#about" style={{ textDecoration: 'none', color: 'var(--text-secondary)' }}>About</a>
            <a href="#projects" style={{ textDecoration: 'none', color: 'var(--text-secondary)' }}>Projects</a>
            <a href="#experience" style={{ textDecoration: 'none', color: 'var(--text-secondary)' }}>Experience</a>
            <a href="#skills" style={{ textDecoration: 'none', color: 'var(--text-secondary)' }}>Skills</a>
            <a href="#chat" style={{ textDecoration: 'none', color: 'var(--text-secondary)' }}>AI Chat</a>
            <a href="#contact" style={{ textDecoration: 'none', color: 'var(--text-secondary)' }}>Contact</a>
          </div>
          <button onClick={toggleTheme} className="btn" aria-label="Toggle theme" style={{ padding: '0.5rem', borderRadius: '50%' }}>
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
        </div>
      </nav>

      {/* Main Container */}
      <main className="container" style={{ paddingTop: '6.5rem', paddingBottom: '6rem' }}>
        
        {/* Hero Section */}
        <section id="hero" style={{ 
          minHeight: 'calc(85vh - 5rem)', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between', 
          gap: '3rem', 
          padding: '2rem 0 3rem 0',
          marginBottom: '5.5rem',
          flexWrap: 'wrap'
        }}>
          <div style={{ flex: '1 1 500px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
              <span className="section-label">
                <MapPin size={13} /> Covenant University • Full-Stack Engineer
              </span>
            </div>

            <h1 style={{ fontSize: 'clamp(2.85rem, 6.5vw, 4.85rem)', fontWeight: 900, lineHeight: 1.05, marginBottom: '1.25rem', letterSpacing: '-0.04em' }}>
              Praise (Adewale) <br />
              <span className="gradient-text">Adesina</span>
            </h1>

            <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', maxWidth: '580px', marginBottom: '2rem', lineHeight: '1.6' }}>
              Building high-converting full-stack web applications, open payment systems, and AI-powered EdTech products that ship to real users.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
              <a href="#projects" className="btn btn-accent">
                <span>View Projects</span> <ArrowRight size={16} />
              </a>
              <a href="#contact" className="btn">Let's Talk</a>
              <a href="https://www.linkedin.com/in/praise-adesina-bb5905248" target="_blank" rel="noreferrer" className="btn">
                <span>LinkedIn</span> <ExternalLink size={14} />
              </a>
            </div>

            {/* Quick Stat Badges */}
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <div className="badge">🏆 3x Hackathon Placer</div>
              <div className="badge">🚀 1,000+ Beta Users @ NoteQuest</div>
              <div className="badge">🇳🇴 Tenkobo Ambassador (Norway)</div>
              <div className="badge">💼 Codveda Technologies Intern</div>
            </div>
          </div>

          {/* Right Side Visual Portrait Card with Original Photo & Custom Backplate */}
          <div style={{ flex: '1 1 360px', display: 'flex', justifyContent: 'center', position: 'relative' }}>
            {/* Ambient Background Flare behind photo */}
            <div style={{
              position: 'absolute',
              top: '-15px',
              left: '-15px',
              right: '-15px',
              bottom: '-15px',
              background: 'radial-gradient(circle, rgba(200, 90, 23, 0.18) 0%, rgba(200, 90, 23, 0) 70%)',
              borderRadius: '2.5rem',
              zIndex: 0,
              pointerEvents: 'none'
            }} />

            <div style={{ 
              position: 'relative', 
              width: '100%', 
              maxWidth: '400px', 
              borderRadius: '2rem', 
              overflow: 'hidden', 
              border: '1px solid var(--border-color)', 
              background: 'linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-card) 100%)', 
              boxShadow: 'var(--shadow-lg)',
              zIndex: 1
            }}>
              <img 
                src="/profile.png" 
                alt="Praise Adesina" 
                style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }} 
              />
              <div style={{ 
                position: 'absolute', 
                bottom: '1rem', 
                left: '1rem', 
                right: '1rem', 
                padding: '0.85rem 1.25rem', 
                background: 'var(--overlay-bg)', 
                backdropFilter: 'blur(14px)', 
                borderRadius: '1.25rem', 
                border: '1px solid var(--border-color)',
                display: 'flex',
                alignItems: 'center',
                justify: 'space-between',
                boxShadow: 'var(--shadow-md)'
              }}>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-primary)' }}>Praise Adesina</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>Full-Stack Software Developer</div>
                </div>
                <span style={{ fontSize: '0.75rem', padding: '0.25rem 0.65rem', background: 'var(--accent-glow)', color: 'var(--accent-primary)', borderRadius: '99px', fontWeight: 600 }}>
                  Open to Roles
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Bento Box Grid */}
        <div className="bento-grid">

          {/* About Me Bento Card (Storytelling Narrative) */}
          <div className="bento-card col-span-8" id="about">
            <div className="section-label">About Me</div>
            <h3 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1.25rem', letterSpacing: '-0.03em' }}>
              Who is Praise?
            </h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', fontSize: '1.025rem', lineHeight: '1.65' }}>
              Praise Adesina is a full-stack engineer and Computer Science student at Covenant University driven by a simple philosophy: software should solve real human problems, gracefully and reliably.
            </p>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', fontSize: '1.025rem', lineHeight: '1.65' }}>
              From architecting production REST APIs and authentication systems as a Full-Stack Intern at <strong>Codveda Technologies</strong>, to building core features at <strong>NoteQuest</strong> (mynotequest.com) for over 1,000 active beta students, Praise crafts digital experiences across JavaScript, React, Node.js, Express, and PostgreSQL.
            </p>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '1.025rem', lineHeight: '1.65' }}>
              Fascinated by open financial protocol, he mastered the Interledger Protocol (ILP) & Open Payments SDK, leading to top placements in international hackathons for cross-border payment platforms like <strong>Paylance</strong> and <strong>Afrizend</strong>.
            </p>
            
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: 'auto' }}>
              {['JavaScript', 'TypeScript', 'React.js', 'Node.js', 'Express', 'PostgreSQL', 'Interledger SDK', 'Kora API', 'Python', 'C++'].map(skill => (
                <span key={skill} style={{ padding: '0.35rem 0.85rem', borderRadius: '99px', border: '1px solid var(--border-color)', fontSize: '0.8125rem', fontWeight: 500, background: 'var(--bg-secondary)', color: 'var(--text-secondary)' }}>
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Profile Analytics Spotlight Card */}
          <div className="bento-card col-span-4" id="analytics" style={{ background: 'var(--bg-card)', position: 'relative' }}>
            <div className="section-label"><TrendingUp size={14} /> Profile Spotlight</div>
            <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '1.25rem' }}>Engagement Metrics</h3>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ padding: '1rem', background: 'var(--bg-secondary)', borderRadius: '1rem', border: '1px solid var(--border-color)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-secondary)', fontSize: '0.8rem', marginBottom: '0.25rem' }}>
                  <Eye size={14} /> Views
                </div>
                <div style={{ fontSize: '1.5rem', fontWeight: 800 }}>238+</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Profile views</div>
              </div>

              <div style={{ padding: '1rem', background: 'var(--bg-secondary)', borderRadius: '1rem', border: '1px solid var(--border-color)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-secondary)', fontSize: '0.8rem', marginBottom: '0.25rem' }}>
                  <TrendingUp size={14} /> Impressions
                </div>
                <div style={{ fontSize: '1.5rem', fontWeight: 800 }}>205+</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Post engagements</div>
              </div>

              <div style={{ padding: '1rem', background: 'var(--bg-secondary)', borderRadius: '1rem', border: '1px solid var(--border-color)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-secondary)', fontSize: '0.8rem', marginBottom: '0.25rem' }}>
                  <Search size={14} /> Searches
                </div>
                <div style={{ fontSize: '1.5rem', fontWeight: 800 }}>101+</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Search appearances</div>
              </div>

              <div style={{ padding: '1rem', background: 'var(--bg-secondary)', borderRadius: '1rem', border: '1px solid var(--border-color)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-secondary)', fontSize: '0.8rem', marginBottom: '0.25rem' }}>
                  <Users size={14} /> Network
                </div>
                <div style={{ fontSize: '1.5rem', fontWeight: 800 }}>2,656+</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Followers</div>
              </div>
            </div>

            <div style={{ marginTop: 'auto', paddingTop: '0.5rem', borderTop: '1px solid var(--border-color)', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              Open to full-stack, software engineering & fintech internships.
            </div>
          </div>

          {/* Featured Stories & Highlights Bento */}
          <div className="bento-card col-span-12" id="highlights">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <div className="section-label"><Trophy size={14} /> Highlights & Milestones</div>
                <h3 style={{ fontSize: '1.75rem', fontWeight: 800, letterSpacing: '-0.03em' }}>Featured Stories & Placements</h3>
              </div>
              <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>3x Hackathon Placer • Leadership • Global Impact</span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
              <div style={{ padding: '1.25rem', borderRadius: '1rem', background: 'var(--bg-secondary)', border: '1px solid var(--border-color)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-primary)', fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.5rem' }}>
                  <Trophy size={18} /> 2nd Place — Interledger Hackathon
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                  Led a 4-person team building <strong>Paylance</strong>, a cross-border escrow payment platform using AI milestone verification & Interledger Open Payments SDK.
                </p>
              </div>

              <div style={{ padding: '1.25rem', borderRadius: '1rem', background: 'var(--bg-secondary)', border: '1px solid var(--border-color)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-primary)', fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.5rem' }}>
                  <Award size={18} /> 3rd Runner-Up — Kora Hackathon 2.0
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                  Built <strong>Afrizend</strong>, a pan-African freelance marketplace on Kora API with virtual wallets and dynamic currency conversion.
                </p>
              </div>

              <div style={{ padding: '1.25rem', borderRadius: '1rem', background: 'var(--bg-secondary)', border: '1px solid var(--border-color)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-primary)', fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.5rem' }}>
                  <Briefcase size={18} /> Norway Remote Opportunity
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                  Landed campus ambassador role via LinkedIn representing <strong>Tenkobo</strong> by Kronerland AS (Norway) at Covenant University.
                </p>
              </div>

              <div style={{ padding: '1.25rem', borderRadius: '1rem', background: 'var(--bg-secondary)', border: '1px solid var(--border-color)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-primary)', fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.5rem' }}>
                  <Users size={18} /> Cowrywise Campus Ambassador
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                  Selected from 480+ schools nationally to represent Cowrywise on campus, connecting university students with digital financial tools.
                </p>
              </div>
            </div>
          </div>

          {/* Projects Section */}
          <div className="bento-card col-span-12" id="projects">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <div className="section-label"><Code2 size={14} /> Portfolio</div>
                <h3 style={{ fontSize: '1.75rem', fontWeight: 800, letterSpacing: '-0.03em' }}>Featured Projects (10)</h3>
              </div>

              {/* Filter Tabs */}
              <div className="filter-tabs" style={{ marginBottom: 0 }}>
                {[
                  { id: 'all', label: 'All (10)' },
                  { id: 'fintech', label: 'Fintech & ILP' },
                  { id: 'edtech', label: 'EdTech & AI' },
                  { id: 'fullstack', label: 'Full-Stack' },
                  { id: 'web', label: 'Web Apps' }
                ].map(tab => (
                  <button 
                    key={tab.id}
                    className={`filter-tab ${activeFilter === tab.id ? 'active' : ''}`}
                    onClick={() => setActiveFilter(tab.id)}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            <div style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))' }}>
              {filteredProjects.map(proj => (
                <div 
                  key={proj.id} 
                  style={{ 
                    overflow: 'hidden', border: '1px solid var(--border-color)', 
                    borderRadius: '1.25rem', background: 'var(--bg-secondary)', 
                    display: 'flex', flexDirection: 'column', transition: 'all 0.3s ease' 
                  }} 
                  className="project-card-mini"
                >
                  <div style={{ height: '190px', width: '100%', overflow: 'hidden', borderBottom: '1px solid var(--border-color)', position: 'relative' }}>
                    <img src={proj.img} alt={proj.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <span style={{ position: 'absolute', top: '0.75rem', right: '0.75rem', background: 'rgba(0,0,0,0.75)', color: '#fff', fontSize: '0.7rem', padding: '0.2rem 0.55rem', borderRadius: '99px', backdropFilter: 'blur(4px)' }}>
                      {proj.category.toUpperCase()}
                    </span>
                  </div>

                  <div style={{ padding: '1.35rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                      <h4 style={{ fontSize: '1.3rem', fontWeight: 700, letterSpacing: '-0.02em' }}>{proj.title}</h4>
                      {proj.link !== '#' && (
                        <a href={proj.link} target="_blank" rel="noreferrer" style={{ color: 'var(--accent-primary)', textDecoration: 'none' }} title="Visit Demo">
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                    
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'monospace', marginBottom: '0.75rem' }}>{proj.subtitle}</div>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '1.25rem', fontSize: '0.925rem', flex: 1, lineHeight: '1.55' }}>{proj.desc}</p>
                    
                    <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                      {proj.tags.map(t => (
                        <span key={t} style={{ fontSize: '0.75rem', padding: '0.2rem 0.55rem', background: 'var(--bg-card)', borderRadius: '6px', border: '1px solid var(--border-color)', color: 'var(--text-secondary)' }}>{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Timeline */}
          <div className="bento-card col-span-12" id="experience">
            <div className="section-label"><Briefcase size={14} /> Career & Leadership</div>
            <h3 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '2rem', letterSpacing: '-0.03em' }}>Experience Journey</h3>

            <div className="timeline-list">
              <div className="timeline-item">
                <div style={{ color: 'var(--accent-primary)', fontSize: '0.85rem', fontFamily: 'monospace', fontWeight: 600 }}>May 2026 - Present</div>
                <h4 style={{ fontSize: '1.2rem', fontWeight: 700, marginTop: '0.25rem' }}>Full-Stack Development Intern</h4>
                <div style={{ color: 'var(--text-secondary)', fontWeight: 500, fontSize: '0.95rem' }}>Codveda Technologies • Remote / Lagos</div>
                <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem', fontSize: '0.95rem', lineHeight: '1.5' }}>
                  Shipped full-stack web applications across three escalating project levels using React, Node.js, Express, and PostgreSQL. Built authentication flows, database schemas, REST APIs, and real-time Socket.io features.
                </p>
              </div>

              <div className="timeline-item">
                <div style={{ color: 'var(--accent-primary)', fontSize: '0.85rem', fontFamily: 'monospace', fontWeight: 600 }}>Dec 2025 - Present</div>
                <h4 style={{ fontSize: '1.2rem', fontWeight: 700, marginTop: '0.25rem' }}>Product Developer</h4>
                <div style={{ color: 'var(--text-secondary)', fontWeight: 500, fontSize: '0.95rem' }}>NoteQuest (mynotequest.com) • EdTech Platform</div>
                <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem', fontSize: '0.95rem', lineHeight: '1.5' }}>
                  Driving feature development for a student-first EdTech platform serving 1,000+ active beta users. Analyzing user feedback with the engineering team to improve retention, flashcard recall, and study battle features.
                </p>
              </div>

              <div className="timeline-item">
                <div style={{ color: 'var(--accent-primary)', fontSize: '0.85rem', fontFamily: 'monospace', fontWeight: 600 }}>Mar 2026 - Present</div>
                <h4 style={{ fontSize: '1.2rem', fontWeight: 700, marginTop: '0.25rem' }}>Campus Ambassador (Tenkobo)</h4>
                <div style={{ color: 'var(--text-secondary)', fontWeight: 500, fontSize: '0.95rem' }}>Kronerland AS (Norway) • Covenant University</div>
                <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem', fontSize: '0.95rem', lineHeight: '1.5' }}>
                  Represent Tenkobo, an academic and career-development platform. Drive user growth and brand presence on campus as part of an inter-school ambassador competition.
                </p>
              </div>

              <div className="timeline-item">
                <div style={{ color: 'var(--accent-primary)', fontSize: '0.85rem', fontFamily: 'monospace', fontWeight: 600 }}>Dec 2025 - Present</div>
                <h4 style={{ fontSize: '1.2rem', fontWeight: 700, marginTop: '0.25rem' }}>Campus Ambassador (Cowrywise)</h4>
                <div style={{ color: 'var(--text-secondary)', fontWeight: 500, fontSize: '0.95rem' }}>Cowrywise Financial Technology</div>
                <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem', fontSize: '0.95rem', lineHeight: '1.5' }}>
                  Selected from 480+ schools nationally to represent Cowrywise on campus. Spread financial education and connect university students with digital savings resources.
                </p>
              </div>

              <div className="timeline-item">
                <div style={{ color: 'var(--accent-primary)', fontSize: '0.85rem', fontFamily: 'monospace', fontWeight: 600 }}>Apr 2026 - Present</div>
                <h4 style={{ fontSize: '1.2rem', fontWeight: 700, marginTop: '0.25rem' }}>Open Payments Trainee & Presenter</h4>
                <div style={{ color: 'var(--text-secondary)', fontWeight: 500, fontSize: '0.95rem' }}>Interledger Foundation NextGen Program</div>
                <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem', fontSize: '0.95rem', lineHeight: '1.5' }}>
                  Trained on Interledger Protocol (ILP) and Open Payments SDK. Presented technical proposals on multi-asset wallet addresses to 200+ attendees on an international community call.
                </p>
              </div>
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="bento-card col-span-8" id="education">
            <div className="section-label"><GraduationCap size={14} /> Academic Record</div>
            <h3 style={{ fontSize: '1.65rem', fontWeight: 800, marginBottom: '1.5rem', letterSpacing: '-0.03em' }}>Education & Qualifications</h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ padding: '1.25rem', background: 'var(--bg-secondary)', borderRadius: '1rem', border: '1px solid var(--border-color)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap' }}>
                  <div>
                    <h4 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Covenant University</h4>
                    <div style={{ color: 'var(--accent-primary)', fontWeight: 600, fontSize: '0.95rem' }}>Bachelor of Science (B.Sc.), Computer Science</div>
                  </div>
                  <span style={{ fontSize: '0.85rem', fontFamily: 'monospace', color: 'var(--text-muted)' }}>Oct 2024 – Oct 2028</span>
                </div>
                <div style={{ marginTop: '0.5rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  Coursework: Data Structures & Algorithms, DBMS (PostgreSQL), Software Engineering, Computer Networks, Systems Analysis & Design, Internet Programming, Discrete Structures.
                </div>
              </div>
            </div>
          </div>

          {/* Certifications & Volunteering Bento */}
          <div className="bento-card col-span-4" id="certifications">
            <div className="section-label"><Award size={14} /> Certifications</div>
            <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '1.25rem' }}>Licenses & Volunteer</h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ padding: '1rem', background: 'var(--bg-secondary)', borderRadius: '0.85rem', border: '1px solid var(--border-color)' }}>
                <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>Microsoft Office Specialist</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--accent-primary)', fontWeight: 600 }}>Word Associate (Office 2019)</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>Issued Apr 2025 • Microsoft</div>
              </div>

              <div style={{ padding: '1rem', background: 'var(--bg-secondary)', borderRadius: '0.85rem', border: '1px solid var(--border-color)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 700, fontSize: '0.95rem' }}>
                  <HeartHandshake size={16} /> Beyond Books Africa
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Organizing Team Member (Sep 2025)</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>Logistics, liaison & award presentations</div>
              </div>

              <div style={{ padding: '1rem', background: 'var(--bg-secondary)', borderRadius: '0.85rem', border: '1px solid var(--border-color)' }}>
                <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>Young and Excellent Club</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Event Co-Host (Sep 2025)</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>Ogbomosho Secondary Schools Conference</div>
              </div>
            </div>
          </div>

          {/* Technical Skills Bento */}
          <div className="bento-card col-span-12" id="skills">
            <div className="section-label"><Code2 size={14} /> Skills Matrix</div>
            <h3 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '1.5rem', letterSpacing: '-0.03em' }}>Technical Stack (47 Skills)</h3>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
              <div>
                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--accent-primary)', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Core Languages</div>
                <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                  {['JavaScript (ES6+)', 'TypeScript', 'Python', 'C++', 'C', 'Java', 'HTML5', 'CSS3'].map(s => (
                    <span key={s} style={{ padding: '0.3rem 0.75rem', borderRadius: '99px', border: '1px solid var(--border-color)', fontSize: '0.8rem', background: 'var(--bg-secondary)', fontWeight: 500 }}>{s}</span>
                  ))}
                </div>
              </div>

              <div>
                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--accent-primary)', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Frontend & Web</div>
                <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                  {['React.js', 'Next.js', 'Vite', 'Redux/Zustand', 'Tailwind CSS', 'Glassmorphism', 'MDX'].map(s => (
                    <span key={s} style={{ padding: '0.3rem 0.75rem', borderRadius: '99px', border: '1px solid var(--border-color)', fontSize: '0.8rem', background: 'var(--bg-secondary)', fontWeight: 500 }}>{s}</span>
                  ))}
                </div>
              </div>

              <div>
                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--accent-primary)', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Backend & Database</div>
                <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                  {['Node.js', 'Express.js', 'PostgreSQL', 'Prisma ORM', 'JWT Auth', 'REST APIs', 'GraphQL', 'Socket.io', 'Firebase'].map(s => (
                    <span key={s} style={{ padding: '0.3rem 0.75rem', borderRadius: '99px', border: '1px solid var(--border-color)', fontSize: '0.8rem', background: 'var(--bg-secondary)', fontWeight: 500 }}>{s}</span>
                  ))}
                </div>
              </div>

              <div>
                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--accent-primary)', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Fintech & Protocol</div>
                <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                  {['Interledger Protocol (ILP)', 'Open Payments SDK', 'Kora API', 'Virtual Wallets', 'Micropayments'].map(s => (
                    <span key={s} style={{ padding: '0.3rem 0.75rem', borderRadius: '99px', border: '1px solid var(--border-color)', fontSize: '0.8rem', background: 'var(--bg-secondary)', fontWeight: 500 }}>{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Chat />
          <Contact />

        </div>
      </main>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid var(--border-color)', padding: '2rem 0', background: 'var(--bg-secondary)', marginTop: '4rem' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            © {new Date().getFullYear()} Praise (Adewale) Adesina. All rights reserved. • Covenant University CS
          </div>
          <a href="#about" style={{ color: 'var(--accent-primary)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600 }}>
            Back to top ↑
          </a>
        </div>
      </footer>

      <style>{`
        .nav-links a:hover { color: var(--text-primary) !important; }
        .project-card-mini:hover {
          border-color: var(--accent-primary) !important;
          transform: translateY(-4px);
          box-shadow: var(--shadow-lg);
        }
        .project-card-mini img {
          transition: transform 0.4s ease;
        }
        .project-card-mini:hover img {
          transform: scale(1.06);
        }
        @media (max-width: 768px) {
          .nav-links { display: none; }
          .nav-badge { display: none; }
        }
      `}</style>
    </div>
  );
};

export default App;

