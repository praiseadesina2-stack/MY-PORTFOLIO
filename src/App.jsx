import React, { useState, useEffect } from 'react';
import Chat from './Chat';
import Contact from './Contact';
import { 
  ExternalLink, Trophy, Award, Briefcase, 
  GraduationCap, Code2, Sparkles, MapPin, 
  Users, Search, ArrowRight, ChevronRight, Menu, X
} from 'lucide-react';

const projectsData = [
  {
    id: 1,
    title: 'Afrizend',
    subtitle: 'afrizend.vercel.app',
    desc: 'Pan-African freelance marketplace on the Kora API with virtual multi-currency wallets and dynamic FX conversion. Awarded 3rd runner-up at Kora Hackathon 2.0.',
    link: 'https://afrizend.vercel.app',
    tags: ['React', 'Node.js', 'Kora API', 'PostgreSQL'],
    category: 'fintech',
    img: 'https://api.microlink.io/?url=https://afrizend.vercel.app&screenshot=true&meta=false&embed=screenshot.url'
  },
  {
    id: 2,
    title: 'Paylance',
    subtitle: 'paylance-gmc1.onrender.com',
    desc: 'Cross-border escrow payment platform for global freelancers using the Interledger Protocol (ILP) and AI milestone verification. 2nd place winner, Interledger Hackathon.',
    link: 'https://paylance-gmc1.onrender.com',
    tags: ['React', 'PostgreSQL', 'Node.js', 'ILP SDK'],
    category: 'fintech',
    img: 'https://api.microlink.io/?url=https://paylance-gmc1.onrender.com&screenshot=true&meta=false&embed=screenshot.url'
  },
  {
    id: 3,
    title: 'MyNoteQuest',
    subtitle: 'mynotequest.com',
    desc: 'Transforms academic lecture PDFs into interactive anime explainers and competitive AI-powered study battles. Over 1,000 active beta student users.',
    link: 'https://mynotequest.com',
    tags: ['React', 'Firebase', 'Gemini 3', 'EdTech'],
    category: 'edtech',
    img: 'https://api.microlink.io/?url=https://mynotequest.com&screenshot=true&meta=false&embed=screenshot.url'
  },
  {
    id: 4,
    title: 'OyaSpray',
    subtitle: 'oyaspray.vercel.app',
    desc: 'Digital money-spraying application bringing Nigerian celebratory culture to real-time micropayments via Interledger Open Payments technology.',
    link: 'https://oyaspray.vercel.app',
    tags: ['Node.js', 'JavaScript', 'ILP SDK', 'Socket.io'],
    category: 'fintech',
    img: 'https://api.microlink.io/?url=https://oyaspray.vercel.app&screenshot=true&meta=false&embed=screenshot.url'
  },
  {
    id: 5,
    title: 'Webphinix',
    subtitle: 'webphinix.vercel.app',
    desc: 'High-conversion business website builder platform engineered for small businesses, startups, and freelancers demanding digital velocity.',
    link: 'https://webphinix.vercel.app',
    tags: ['React', 'Node.js', 'JavaScript'],
    category: 'fullstack',
    img: 'https://api.microlink.io/?url=https://webphinix.vercel.app&screenshot=true&meta=false&embed=screenshot.url'
  },
  {
    id: 6,
    title: 'Lost & Found System',
    subtitle: 'campussecure.vercel.app',
    desc: 'Campus security web platform allowing students to register found items and search for lost belongings with token-based JWT authentication.',
    link: 'https://campussecure.vercel.app',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    category: 'fullstack',
    img: 'https://api.microlink.io/?url=https://campussecure.vercel.app&screenshot=true&meta=false&embed=screenshot.url'
  },
  {
    id: 7,
    title: 'Flip Card Memory Game',
    subtitle: 'praise-flip.vercel.app',
    desc: 'Interactive memory and cognition browser game featuring custom card decks, dynamic scoring algorithms, and zero-latency sound effects.',
    link: 'https://praise-flip.vercel.app',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    category: 'web',
    img: '/flipgame.png'
  },
  {
    id: 8,
    title: 'Blog Platform',
    subtitle: 'praise-blog-website.vercel.app',
    desc: 'Editorial blogging platform for engineering writeups, software architectures, and technical deep-dives with MDX formatting.',
    link: 'https://praise-blog-website.vercel.app',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    category: 'web',
    img: 'https://api.microlink.io/?url=https://praise-blog-website.vercel.app&screenshot=true&meta=false&embed=screenshot.url'
  },
  {
    id: 9,
    title: 'COUCHD CINEMA',
    subtitle: 'couch-hd.vercel.app',
    desc: 'Cinema discovery platform fetching verified trailers and metadata from the TMDB API before dedicating time to watch films and series.',
    link: 'https://couch-hd.vercel.app/',
    tags: ['React', 'TMDB API', 'JavaScript'],
    category: 'fullstack',
    img: 'https://api.microlink.io/?url=https://couch-hd.vercel.app&screenshot=true&meta=false&embed=screenshot.url'
  },
  {
    id: 10,
    title: 'Portfolio Website',
    subtitle: 'praiseadesina.vercel.app',
    desc: 'Apple design system implementation built with React and Vite, showcasing responsive full-bleed tiles and AI conversational assistance.',
    link: 'https://praiseadesina.vercel.app',
    tags: ['React', 'Vite', 'Apple Design System'],
    category: 'web',
    img: '/profile.png'
  }
];

const navItems = [
  { label: 'Home', href: '#hero', num: '01' },
  { label: 'Flagship Systems', href: '#flagship', num: '02' },
  { label: 'Projects', href: '#projects', num: '03' },
  { label: 'Experience', href: '#experience', num: '04' },
  { label: 'Academics & Stack', href: '#academics', num: '05' },
  { label: 'AI Assistant', href: '#chat', num: '06' },
  { label: 'Contact', href: '#contact', num: '07' }
];

const App = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(1);
  const [preloaderExiting, setPreloaderExiting] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuClosing, setMenuClosing] = useState(false);
  const [hoveredNav, setHoveredNav] = useState(null);

  // Typewriter effect: Product Developer -> Frontend Developer -> Backend Developer -> Full Stack Engineer
  const TYPEWRITER_ROLES = [
    'Product Developer',
    'Frontend Developer',
    'Backend Developer',
    'Full Stack Engineer'
  ];
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentRoleText, setCurrentRoleText] = useState('');
  const [isDeletingRole, setIsDeletingRole] = useState(false);

  useEffect(() => {
    const targetRole = TYPEWRITER_ROLES[roleIndex];
    let timer;

    if (!isDeletingRole && currentRoleText === targetRole) {
      // Finished typing whole phrase - pause for reading
      timer = setTimeout(() => {
        setIsDeletingRole(true);
      }, 1800);
    } else if (isDeletingRole && currentRoleText === '') {
      // Finished backspacing - advance to next role
      setIsDeletingRole(false);
      setRoleIndex((prev) => (prev + 1) % TYPEWRITER_ROLES.length);
      timer = setTimeout(() => {}, 350);
    } else {
      // In the middle of typing or deleting
      const speed = isDeletingRole ? 40 : 80;
      timer = setTimeout(() => {
        setCurrentRoleText((prev) =>
          isDeletingRole
            ? targetRole.substring(0, prev.length - 1)
            : targetRole.substring(0, prev.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timer);
  }, [currentRoleText, isDeletingRole, roleIndex]);

  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, []);

  // Preloader count progression from 1 to 100%
  useEffect(() => {
    let current = 1;
    const interval = setInterval(() => {
      const step = Math.floor(Math.random() * 4) + 2;
      current += step;
      if (current >= 100) {
        current = 100;
        setLoadingProgress(100);
        clearInterval(interval);
        setTimeout(() => {
          setPreloaderExiting(true);
          setTimeout(() => {
            setIsLoading(false);
          }, 650);
        }, 350);
      } else {
        setLoadingProgress(current);
      }
    }, 28);

    return () => clearInterval(interval);
  }, []);

  const filteredProjects = projectsData.filter(proj => {
    const matchesCategory = activeFilter === 'all' || proj.category === activeFilter;
    const matchesSearch = searchQuery === '' || 
      proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Scroll float-in observer for cards
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -20px 0px' }
    );

    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [isLoading, filteredProjects]);

  const openMenu = () => {
    setMenuOpen(true);
    setMenuClosing(false);
    document.body.style.overflow = 'hidden';
  };

  const closeMenu = () => {
    setMenuClosing(true);
    setTimeout(() => {
      setMenuOpen(false);
      setMenuClosing(false);
      document.body.style.overflow = '';
    }, 260);
  };

  // Dedicated smooth scroll function with fixed navbar offset
  const smoothScrollTo = (e, targetHash) => {
    if (e && e.preventDefault) e.preventDefault();
    const targetEl = document.querySelector(targetHash);
    if (targetEl) {
      const headerOffset = 64;
      const elementPosition = targetEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleMenuLink = (hash) => {
    closeMenu();
    setTimeout(() => {
      smoothScrollTo(null, hash);
    }, 280);
  };

  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '100vh', backgroundColor: 'var(--color-canvas)' }}>
      
      {/* ====================================================================
          0. Preloader: Welcome to Praise's Virtual World (1-100%)
          ==================================================================== */}
      {isLoading && (
        <div className={`preloader-overlay ${preloaderExiting ? 'preloader-exit' : ''}`} role="dialog" aria-modal="true">
          <div className="preloader-content">
            <div className="preloader-title">
              Welcome
            </div>

            <div className="preloader-count">
              {loadingProgress}%
            </div>

            <div className="preloader-bar-wrap">
              <div 
                className="preloader-bar-fill" 
                style={{ width: `${loadingProgress}%` }} 
              />
            </div>

            <div className="preloader-subtext">
              Computer Science • Full-Stack Software Engineer
            </div>
          </div>
        </div>
      )}

      {/* ====================================================================
          1. Global Nav (Brand + Nav Links + Get in Touch + Unified Menu Button)
          ==================================================================== */}
      <header className="global-nav" role="banner">
        <div className="global-nav-container">
          <a 
            href="#hero" 
            onClick={(e) => smoothScrollTo(e, '#hero')}
            className="global-nav-brand"
            aria-label="Praise Adesina Home"
          >
            <span className="nav-brand-dot" />
            <span>Praise Adesina</span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="global-nav-links" aria-label="Main Navigation">
            <a 
              href="#flagship" 
              onClick={(e) => smoothScrollTo(e, '#flagship')}
              className="global-nav-link"
            >
              Flagship
            </a>
            <a 
              href="#projects" 
              onClick={(e) => smoothScrollTo(e, '#projects')}
              className="global-nav-link"
            >
              Projects
            </a>
            <a 
              href="#experience" 
              onClick={(e) => smoothScrollTo(e, '#experience')}
              className="global-nav-link"
            >
              Experience
            </a>
            <a 
              href="#academics" 
              onClick={(e) => smoothScrollTo(e, '#academics')}
              className="global-nav-link"
            >
              Skills & Stack
            </a>
            <a 
              href="#chat" 
              onClick={(e) => smoothScrollTo(e, '#chat')}
              className="global-nav-link"
            >
              AI Chat
            </a>
          </nav>

          {/* Action Buttons & Unified Menu Toggle */}
          <div className="global-nav-actions">
            <a 
              href="#contact" 
              onClick={(e) => smoothScrollTo(e, '#contact')}
              className="btn-primary nav-contact-btn"
            >
              Get in Touch
            </a>

            <button 
              type="button"
              onClick={openMenu} 
              aria-label="Open navigation menu"
              className="nav-menu-toggle-btn"
            >
              <span className="menu-toggle-label">Menu</span>
              <div className="hamburger-lines">
                <span />
                <span />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* ====================================================================
          Fullscreen Navigation Overlay
          ==================================================================== */}
      {menuOpen && (
        <div className={`fullscreen-menu ${menuClosing ? 'closing' : ''}`} role="dialog" aria-modal="true">
          <div className="fullscreen-menu-header">
            <div className="global-nav-container">
              <a 
                href="#hero" 
                onClick={(e) => {
                  e.preventDefault();
                  handleMenuLink('#hero');
                }}
                className="global-nav-brand"
              >
                <span className="nav-brand-dot" />
                <span>Praise Adesina</span>
              </a>

              <div className="global-nav-actions">
                <a 
                  href="#contact" 
                  onClick={(e) => {
                    e.preventDefault();
                    handleMenuLink('#contact');
                  }}
                  className="btn-primary nav-contact-btn"
                >
                  Get in Touch
                </a>

                <button 
                  type="button"
                  onClick={closeMenu} 
                  aria-label="Close navigation menu"
                  className="nav-menu-toggle-btn nav-menu-close-btn"
                >
                  <span className="menu-toggle-label">Close</span>
                  <X size={16} color="#ffffff" />
                </button>
              </div>
            </div>
          </div>

          <div className="fullscreen-menu-body">
            <div className="fullscreen-menu-content">
              <div className="menu-eyebrow">NAVIGATION</div>
              <nav className="fullscreen-nav-list" onMouseLeave={() => setHoveredNav(null)}>
                {navItems.map((item, index) => {
                  const isHovered = hoveredNav === index;
                  const isAnyHovered = hoveredNav !== null;
                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleMenuLink(item.href);
                      }}
                      onMouseEnter={() => setHoveredNav(index)}
                      className={`fullscreen-nav-item ${isHovered ? 'active' : ''} ${isAnyHovered && !isHovered ? 'dimmed' : ''}`}
                    >
                      <span className="nav-item-num">{item.num}</span>
                      <span className="nav-item-label">{item.label}</span>
                      <span className="nav-item-arrow">
                        <ArrowRight size={24} />
                      </span>
                    </a>
                  );
                })}
              </nav>

              <div className="fullscreen-menu-footer">
                <div className="footer-col">
                  <span className="footer-label">Direct Contact</span>
                  <a href="mailto:praiseadesina2@gmail.com" className="footer-link">praiseadesina2@gmail.com</a>
                </div>
                <div className="footer-col">
                  <span className="footer-label">Socials & Networks</span>
                  <div className="footer-socials">
                    <a href="https://www.linkedin.com/in/praise-adesina-bb5905248" target="_blank" rel="noreferrer">LinkedIn</a>
                    <a href="https://github.com/praiseadesina2-stack" target="_blank" rel="noreferrer">GitHub</a>
                    <a href="https://x.com/praiseadesina" target="_blank" rel="noreferrer">X</a>
                    <a href="https://wa.me/2347043503721" target="_blank" rel="noreferrer">WhatsApp</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <main>
        {/* ====================================================================
            TILE 1: Hero Tile (Split Layout: Text Left, Picture Right Center)
            ==================================================================== */}
        <section id="hero" className="tile tile-parchment" style={{ paddingTop: '88px', paddingBottom: '96px' }}>
          <div className="tile-wide-container">
            <div className="hero-split-container">
              {/* Left Column: Opening Text & CTAs */}
              <div className="hero-text-side">
                <div style={{ marginBottom: '16px' }}>
                  <span className="eyebrow" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                    <MapPin size={13} />
                    Covenant University • CS Student & Builder
                  </span>
                </div>
                
                <h1 className="hero-display" style={{ marginBottom: '12px' }}>
                  Praise Adesina.
                </h1>

                {/* Dynamic Typewriter Role with Blinking Cursor */}
                <div className="hero-typewriter-box" style={{ marginBottom: '22px' }}>
                  <span className="typewriter-prefix">I am a </span>
                  <span className="typewriter-dynamic">{currentRoleText}</span>
                  <span className="typewriter-cursor" aria-hidden="true" />
                </div>

                <p className="lead" style={{ maxWidth: '580px', marginBottom: '28px' }}>
                  Building high-converting full-stack platforms, open financial payment protocols, and AI-driven products for real human scale.
                </p>

                {/* Two-Button CTA Group */}
                <div className="cta-group" style={{ justifyContent: 'flex-start', marginBottom: '24px' }}>
                  <a 
                    href="#projects" 
                    onClick={(e) => smoothScrollTo(e, '#projects')}
                    className="btn-primary"
                  >
                    <span>Explore Projects</span>
                    <ChevronRight size={16} />
                  </a>
                  <a 
                    href="#contact" 
                    onClick={(e) => smoothScrollTo(e, '#contact')}
                    className="btn-secondary-pill"
                  >
                    Get in Touch
                  </a>
                </div>

                <div style={{ marginBottom: '32px' }}>
                  <a 
                    href="https://www.linkedin.com/in/praise-adesina-bb5905248" 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-link"
                  >
                    <span>Connect on LinkedIn</span>
                    <ExternalLink size={14} />
                  </a>
                </div>

                {/* Key Credential Badges with Staggered Ambient Float */}
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  <span className="skill-pill float-pill-1">🏆 3x Hackathon Placer</span>
                  <span className="skill-pill float-pill-2">🚀 1,000+ Active Users @ NoteQuest</span>
                  <span className="skill-pill float-pill-3">🇳🇴 Tenkobo Ambassador (Norway)</span>
                  <span className="skill-pill float-pill-4">💼 Codveda Technologies Intern</span>
                </div>
              </div>

              {/* Right Column: Hero Portrait Frame with Ambient Floating Effect */}
              <div className="hero-media-side">
                <div className="hero-portrait-frame floating-hero-frame reveal-on-scroll" style={{ width: '100%', maxWidth: '380px' }}>
                  <img 
                    src="/profile.png" 
                    alt="Praise Adesina" 
                    style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
                  />
                  <div 
                    style={{
                      padding: '16px 20px',
                      backgroundColor: 'var(--color-canvas)',
                      borderTop: '1px solid var(--color-hairline)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                  >
                    <div style={{ textAlign: 'left' }}>
                      <div style={{ fontSize: '15px', fontWeight: 600, color: 'var(--color-ink)' }}>Praise Adesina</div>
                      <div style={{ fontSize: '13px', color: 'var(--color-ink-muted-48)' }}>Computer Science Undergraduate</div>
                    </div>
                    <span 
                      style={{ 
                        fontSize: '12px', 
                        fontWeight: 600, 
                        padding: '4px 12px', 
                        borderRadius: 'var(--rounded-pill)', 
                        backgroundColor: 'rgba(0, 102, 204, 0.1)', 
                        color: 'var(--color-primary)' 
                      }}
                    >
                      Open to Roles
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ====================================================================
            TILE 2: Flagship Fintech & Hackathon Showcase (Near-Black Tile 1: #272729)
            ==================================================================== */}
        <section id="flagship" className="tile tile-dark">
          <div className="tile-wide-container">
            <div className="hero-stack">
              <span className="eyebrow">
                International Hackathon Placements
              </span>
              <h2 className="display-lg">
                Engineered for Global Scale.
              </h2>
              <p className="lead">
                From cross-border escrow using the Interledger Protocol (ILP) to pan-African freelance marketplaces powered by Kora API.
              </p>

              <div className="cta-group">
                <a href="https://paylance-gmc1.onrender.com" target="_blank" rel="noreferrer" className="btn-primary">
                  <span>Launch Paylance</span>
                  <ExternalLink size={15} />
                </a>
                <a href="https://afrizend.vercel.app" target="_blank" rel="noreferrer" className="btn-secondary-pill">
                  <span>Launch Afrizend</span>
                  <ExternalLink size={15} />
                </a>
              </div>
            </div>

            {/* Flagship Product Showcase Cards */}
            <div className="flagship-grid">
              
              {/* Paylance Card */}
              <div className="flagship-card reveal-on-scroll">
                <div className="flagship-badge">
                  <Trophy size={13} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} />
                  2nd Place — Interledger Hackathon
                </div>
                <h3 style={{ fontSize: '19px', fontWeight: 600, color: '#ffffff', marginBottom: '8px' }}>
                  Paylance
                </h3>
                <div style={{ fontSize: '13px', color: 'var(--color-primary-on-dark)', marginBottom: '14px', fontFamily: 'monospace' }}>
                  paylance-gmc1.onrender.com
                </div>
                <p style={{ color: 'var(--color-body-muted)', fontSize: '14px', lineHeight: '1.5', marginBottom: '18px', flex: 1 }}>
                  Led a 4-person engineering team architecting a cross-border escrow payment platform utilizing Interledger Open Payments SDK with AI-driven milestone verification.
                </p>
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '20px' }}>
                  {['React', 'PostgreSQL', 'Node.js', 'ILP SDK'].map(t => (
                    <span key={t} style={{ fontSize: '12px', padding: '4px 10px', borderRadius: 'var(--rounded-pill)', backgroundColor: 'rgba(255, 255, 255, 0.08)', color: '#ffffff' }}>
                      {t}
                    </span>
                  ))}
                </div>
                <a href="https://paylance-gmc1.onrender.com" target="_blank" rel="noreferrer" className="text-link-on-dark">
                  <span>Experience Paylance Demo</span>
                  <ChevronRight size={16} />
                </a>
              </div>

              {/* Afrizend Card */}
              <div className="flagship-card reveal-on-scroll">
                <div className="flagship-badge">
                  <Award size={13} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} />
                  3rd Runner-Up — Kora Hackathon 2.0
                </div>
                <h3 style={{ fontSize: '19px', fontWeight: 600, color: '#ffffff', marginBottom: '8px' }}>
                  Afrizend
                </h3>
                <div style={{ fontSize: '13px', color: 'var(--color-primary-on-dark)', marginBottom: '14px', fontFamily: 'monospace' }}>
                  afrizend.vercel.app
                </div>
                <p style={{ color: 'var(--color-body-muted)', fontSize: '14px', lineHeight: '1.5', marginBottom: '18px', flex: 1 }}>
                  Pan-African freelance marketplace powered by the Kora payment gateway API, providing African talent with virtual wallets, automated escrow, and live dynamic currency settlement.
                </p>
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '20px' }}>
                  {['React', 'Node.js', 'Kora API', 'PostgreSQL'].map(t => (
                    <span key={t} style={{ fontSize: '12px', padding: '4px 10px', borderRadius: 'var(--rounded-pill)', backgroundColor: 'rgba(255, 255, 255, 0.08)', color: '#ffffff' }}>
                      {t}
                    </span>
                  ))}
                </div>
                <a href="https://afrizend.vercel.app" target="_blank" rel="noreferrer" className="text-link-on-dark">
                  <span>Experience Afrizend Demo</span>
                  <ChevronRight size={16} />
                </a>
              </div>

              {/* NoteQuest Card */}
              <div className="flagship-card reveal-on-scroll">
                <div className="flagship-badge">
                  <Sparkles size={13} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} />
                  1,000+ Active Beta Users
                </div>
                <h3 style={{ fontSize: '19px', fontWeight: 600, color: '#ffffff', marginBottom: '8px' }}>
                  MyNoteQuest
                </h3>
                <div style={{ fontSize: '13px', color: 'var(--color-primary-on-dark)', marginBottom: '14px', fontFamily: 'monospace' }}>
                  mynotequest.com
                </div>
                <p style={{ color: 'var(--color-body-muted)', fontSize: '14px', lineHeight: '1.5', marginBottom: '18px', flex: 1 }}>
                  AI-driven EdTech platform that converts dense study PDFs into cinematic anime explainers, adaptive recall flashcards, and competitive peer study challenges.
                </p>
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '20px' }}>
                  {['React', 'Firebase', 'Gemini 3', 'EdTech'].map(t => (
                    <span key={t} style={{ fontSize: '12px', padding: '4px 10px', borderRadius: 'var(--rounded-pill)', backgroundColor: 'rgba(255, 255, 255, 0.08)', color: '#ffffff' }}>
                      {t}
                    </span>
                  ))}
                </div>
                <a href="https://mynotequest.com" target="_blank" rel="noreferrer" className="text-link-on-dark">
                  <span>Visit MyNoteQuest</span>
                  <ChevronRight size={16} />
                </a>
              </div>

            </div>
          </div>
        </section>

        {/* ====================================================================
            TILE 3: The Complete Projects Catalog (Light Canvas: #ffffff)
            ==================================================================== */}
        <section id="projects" className="tile tile-light">
          <div className="tile-wide-container">
            <div className="hero-stack">
              <span className="eyebrow">
                Software Portfolio
              </span>
              <h2 className="display-lg">
                Projects Catalog.
              </h2>
              <p className="lead">
                A collection of 10 production web applications, open protocols, and developer systems.
              </p>

              {/* Search Pill Input */}
              <div style={{ width: '100%', maxWidth: '440px', marginBottom: '24px', position: 'relative' }}>
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by title, technology, or keywords..."
                  className="search-input-pill"
                  aria-label="Search projects"
                />
              </div>

              {/* Category Filter Chips */}
              <div className="filter-chips-row">
                {[
                  { id: 'all', label: 'All Projects (10)' },
                  { id: 'fintech', label: 'Fintech & ILP' },
                  { id: 'edtech', label: 'EdTech & AI' },
                  { id: 'fullstack', label: 'Full-Stack' },
                  { id: 'web', label: 'Web Applications' }
                ].map(chip => (
                  <button
                    key={chip.id}
                    type="button"
                    onClick={() => setActiveFilter(chip.id)}
                    className={`filter-chip ${activeFilter === chip.id ? 'active' : ''}`}
                  >
                    {chip.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Store Utility Card Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
              {filteredProjects.map(proj => (
                <div key={proj.id} className="store-utility-card reveal-on-scroll">
                  <div className="store-card-image-wrap">
                    <img 
                      src={proj.img} 
                      alt={proj.title} 
                      loading="lazy"
                    />
                    <span 
                      style={{ 
                        position: 'absolute', 
                        top: '12px', 
                        right: '12px', 
                        backgroundColor: 'rgba(29, 29, 31, 0.85)', 
                        color: '#ffffff', 
                        fontSize: '11px', 
                        fontWeight: 600, 
                        padding: '3px 8px', 
                        borderRadius: 'var(--rounded-pill)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.04em'
                      }}
                    >
                      {proj.category}
                    </span>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '6px' }}>
                    <h4 className="body-strong" style={{ fontSize: '16px' }}>{proj.title}</h4>
                    {proj.link !== '#' && (
                      <a href={proj.link} target="_blank" rel="noreferrer" className="text-link" aria-label={`Open demo for ${proj.title}`}>
                        <ExternalLink size={15} />
                      </a>
                    )}
                  </div>

                  <div style={{ fontSize: '13px', color: 'var(--color-ink-muted-48)', fontFamily: 'monospace', marginBottom: '10px' }}>
                    {proj.subtitle}
                  </div>

                  <p className="body-default" style={{ fontSize: '14px', color: 'var(--color-ink-muted-80)', marginBottom: '16px', flex: 1, lineHeight: '1.5' }}>
                    {proj.desc}
                  </p>

                  <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '16px' }}>
                    {proj.tags.map(t => (
                      <span key={t} style={{ fontSize: '12px', padding: '3px 8px', borderRadius: 'var(--rounded-sm)', backgroundColor: 'var(--color-canvas-parchment)', color: 'var(--color-ink)', border: '1px solid var(--color-divider-soft)' }}>
                        {t}
                      </span>
                    ))}
                  </div>

                  <div style={{ paddingTop: '12px', borderTop: '1px solid var(--color-hairline)' }}>
                    <a href={proj.link} target="_blank" rel="noreferrer" className="text-link" style={{ fontSize: '14px', fontWeight: 500 }}>
                      <span>Visit Live Deployment</span>
                      <ChevronRight size={14} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ====================================================================
            TILE 4: Career Experience & Leadership (Near-Black Tile 2: #2a2a2c)
            ==================================================================== */}
        <section id="experience" className="tile tile-dark-2">
          <div className="tile-container">
            <div className="hero-stack">
              <span className="eyebrow">
                <Briefcase size={13} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} />
                Career & Leadership
              </span>
              <h2 className="display-lg">
                The Experience Journey.
              </h2>
              <p className="lead" style={{ color: '#f5f5f7' }}>
                Shipping real-world production code, scaling student platforms, and representing premier tech organizations.
              </p>
            </div>

            {/* Experience List Stack */}
            <div className="experience-list">
              
              <div className="experience-item reveal-on-scroll">
                <div className="experience-date">May 2026 – Present</div>
                <h3 style={{ fontSize: '17px', fontWeight: 600, color: '#ffffff', marginBottom: '4px' }}>
                  Full-Stack Development Intern
                </h3>
                <div style={{ fontSize: '13px', color: 'var(--color-body-muted)', marginBottom: '8px' }}>
                  Codveda Technologies • Remote / Lagos, Nigeria
                </div>
                <p style={{ fontSize: '14px', color: 'var(--color-body-muted)', lineHeight: '1.5' }}>
                  Architecting full-stack web applications across multiple production modules utilizing React, Node.js, Express, and PostgreSQL. Designed robust relational schemas, authentication gateways, and real-time Socket.io channels.
                </p>
              </div>

              <div className="experience-item reveal-on-scroll">
                <div className="experience-date">Dec 2025 – Present</div>
                <h3 style={{ fontSize: '17px', fontWeight: 600, color: '#ffffff', marginBottom: '4px' }}>
                  Product Developer
                </h3>
                <div style={{ fontSize: '13px', color: 'var(--color-body-muted)', marginBottom: '8px' }}>
                  NoteQuest (mynotequest.com) • EdTech Platform
                </div>
                <p style={{ fontSize: '14px', color: 'var(--color-body-muted)', lineHeight: '1.5' }}>
                  Directing feature development for a platform with over 1,000 active beta student users. Collaborating with cross-functional engineers to optimize user retention, AI flashcard synthesis, and competitive study mechanics.
                </p>
              </div>

              <div className="experience-item reveal-on-scroll">
                <div className="experience-date">Mar 2026 – Present</div>
                <h3 style={{ fontSize: '17px', fontWeight: 600, color: '#ffffff', marginBottom: '4px' }}>
                  Campus Ambassador (Tenkobo)
                </h3>
                <div style={{ fontSize: '13px', color: 'var(--color-body-muted)', marginBottom: '8px' }}>
                  Kronerland AS (Norway) • Covenant University
                </div>
                <p style={{ fontSize: '14px', color: 'var(--color-body-muted)', lineHeight: '1.5' }}>
                  Landed Norwegian campus ambassador appointment to represent Tenkobo on campus, accelerating user growth and digital community engagement.
                </p>
              </div>

              <div className="experience-item reveal-on-scroll">
                <div className="experience-date">Dec 2025 – Present</div>
                <h3 style={{ fontSize: '17px', fontWeight: 600, color: '#ffffff', marginBottom: '4px' }}>
                  Campus Ambassador (Cowrywise)
                </h3>
                <div style={{ fontSize: '13px', color: 'var(--color-body-muted)', marginBottom: '8px' }}>
                  Cowrywise Financial Technology
                </div>
                <p style={{ fontSize: '14px', color: 'var(--color-body-muted)', lineHeight: '1.5' }}>
                  Selected from 480+ educational institutions nationwide to represent Cowrywise, advancing financial literacy and connecting student peers to automated wealth management tools.
                </p>
              </div>

              <div className="experience-item reveal-on-scroll">
                <div className="experience-date">Apr 2026 – Present</div>
                <h3 style={{ fontSize: '17px', fontWeight: 600, color: '#ffffff', marginBottom: '4px' }}>
                  Open Payments Trainee & Presenter
                </h3>
                <div style={{ fontSize: '13px', color: 'var(--color-body-muted)', marginBottom: '8px' }}>
                  Interledger Foundation NextGen Program
                </div>
                <p style={{ fontSize: '14px', color: 'var(--color-body-muted)', lineHeight: '1.5' }}>
                  Specialized in Interledger Protocol (ILP) and Open Payments SDK. Formulated and delivered technical proposals on multi-asset wallet structures to over 200 international developers.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ====================================================================
            TILE 5: Academic Record & Technical Stack (Parchment Tile: #f5f5f7)
            ==================================================================== */}
        <section id="academics" className="tile tile-parchment">
          <div className="tile-wide-container">
            <div className="hero-stack">
              <span className="eyebrow">
                <GraduationCap size={13} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} />
                Academic Excellence & Technical Matrix
              </span>
              <h2 className="display-lg">
                Foundation & Capabilities.
              </h2>
              <p className="lead">
                Rooted in rigorous computer science fundamentals, complemented by 47 verified tools and frameworks.
              </p>
            </div>

            {/* University Record Card */}
            <div 
              className="reveal-on-scroll"
              style={{ 
                backgroundColor: 'var(--color-canvas)', 
                border: '1px solid var(--color-hairline)', 
                borderRadius: 'var(--rounded-lg)', 
                padding: '32px',
                marginBottom: '32px'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px', marginBottom: '10px' }}>
                <div>
                  <h3 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--color-ink)' }}>Covenant University</h3>
                  <div style={{ fontSize: '14px', color: 'var(--color-primary)', fontWeight: 500 }}>
                    Bachelor of Science (B.Sc.), Computer Science
                  </div>
                </div>
                <span style={{ fontSize: '13px', fontFamily: 'monospace', color: 'var(--color-ink-muted-48)' }}>
                  Oct 2024 – Oct 2028
                </span>
              </div>
              <p style={{ fontSize: '14px', color: 'var(--color-ink-muted-80)', lineHeight: '1.5' }}>
                <strong>Rigorous Coursework:</strong> Data Structures & Algorithms, Database Management Systems (PostgreSQL), Software Engineering, Computer Networks, Systems Analysis & Design, Discrete Mathematics, Object-Oriented Programming.
              </p>
            </div>

            {/* Skills Matrix in 4 Clean Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px', marginBottom: '32px' }}>
              
              <div className="skills-category-card reveal-on-scroll">
                <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '12px' }}>
                  Core Languages
                </div>
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                  {['JavaScript (ES6+)', 'TypeScript', 'Python', 'C++', 'C', 'Java', 'HTML5', 'CSS3'].map(s => (
                    <span key={s} className="skill-pill">{s}</span>
                  ))}
                </div>
              </div>

              <div className="skills-category-card reveal-on-scroll">
                <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '12px' }}>
                  Frontend Engineering
                </div>
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                  {['React.js', 'Next.js', 'Vite', 'Redux / Zustand', 'Tailwind CSS', 'Glassmorphism', 'MDX'].map(s => (
                    <span key={s} className="skill-pill">{s}</span>
                  ))}
                </div>
              </div>

              <div className="skills-category-card reveal-on-scroll">
                <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '12px' }}>
                  Backend & Database
                </div>
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                  {['Node.js', 'Express.js', 'PostgreSQL', 'Prisma ORM', 'JWT Auth', 'REST APIs', 'GraphQL', 'Socket.io', 'Firebase'].map(s => (
                    <span key={s} className="skill-pill">{s}</span>
                  ))}
                </div>
              </div>

              <div className="skills-category-card reveal-on-scroll">
                <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '12px' }}>
                  Fintech & Open Protocol
                </div>
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                  {['Interledger Protocol (ILP)', 'Open Payments SDK', 'Kora API', 'Virtual Wallets', 'Micropayments'].map(s => (
                    <span key={s} className="skill-pill">{s}</span>
                  ))}
                </div>
              </div>

            </div>

            {/* Certifications & Volunteering */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
              <div className="reveal-on-scroll" style={{ padding: '20px', borderRadius: 'var(--rounded-lg)', backgroundColor: 'var(--color-canvas)', border: '1px solid var(--color-hairline)' }}>
                <div style={{ fontSize: '15px', fontWeight: 600 }}>Microsoft Office Specialist</div>
                <div style={{ fontSize: '14px', color: 'var(--color-primary)' }}>Word Associate (Office 2019)</div>
                <div style={{ fontSize: '12px', color: 'var(--color-ink-muted-48)', marginTop: '4px' }}>Issued April 2025 • Microsoft</div>
              </div>

              <div className="reveal-on-scroll" style={{ padding: '20px', borderRadius: 'var(--rounded-lg)', backgroundColor: 'var(--color-canvas)', border: '1px solid var(--color-hairline)' }}>
                <div style={{ fontSize: '15px', fontWeight: 600 }}>Beyond Books Africa</div>
                <div style={{ fontSize: '14px', color: 'var(--color-ink-muted-80)' }}>Organizing Team Member (Sep 2025)</div>
                <div style={{ fontSize: '12px', color: 'var(--color-ink-muted-48)', marginTop: '4px' }}>Logistics, external liaison, and awards coordination</div>
              </div>

              <div className="reveal-on-scroll" style={{ padding: '20px', borderRadius: 'var(--rounded-lg)', backgroundColor: 'var(--color-canvas)', border: '1px solid var(--color-hairline)' }}>
                <div style={{ fontSize: '15px', fontWeight: 600 }}>Young and Excellent Club</div>
                <div style={{ fontSize: '14px', color: 'var(--color-ink-muted-80)' }}>Event Co-Host (Sep 2025)</div>
                <div style={{ fontSize: '12px', color: 'var(--color-ink-muted-48)', marginTop: '4px' }}>Ogbomosho Secondary Schools Conference</div>
              </div>
            </div>

          </div>
        </section>

        {/* ====================================================================
            TILE 6: Interactive AI Assistant (Light Tile: #ffffff)
            ==================================================================== */}
        <section id="chat" className="tile tile-light">
          <div className="tile-container">
            <div className="hero-stack" style={{ marginBottom: '32px' }}>
              <span className="eyebrow">
                <Sparkles size={13} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} />
                Natural Language Exploration
              </span>
              <h2 className="display-lg">
                Ask Praise's AI Assistant.
              </h2>
              <p className="lead">
                Have a question about specific projects, hackathons, or technologies? Ask directly.
              </p>
            </div>

            <div className="reveal-on-scroll">
              <Chat />
            </div>
          </div>
        </section>

        {/* ====================================================================
            TILE 7: Contact & Connect (Parchment Tile: #f5f5f7)
            ==================================================================== */}
        <section id="contact" className="tile tile-parchment">
          <div className="tile-container reveal-on-scroll">
            <Contact />
          </div>
        </section>
      </main>

      {/* ====================================================================
          8. Apple Editorial Multi-Column Footer
          ==================================================================== */}
      <footer className="apple-footer" role="contentinfo">
        <div className="apple-footer-container">
          <div className="apple-footer-grid">
            
            <div className="apple-footer-col">
              <h4>Featured Platforms</h4>
              <ul>
                <li><a href="https://paylance-gmc1.onrender.com" target="_blank" rel="noreferrer">Paylance Escrow</a></li>
                <li><a href="https://afrizend.vercel.app" target="_blank" rel="noreferrer">Afrizend Marketplace</a></li>
                <li><a href="https://mynotequest.com" target="_blank" rel="noreferrer">MyNoteQuest EdTech</a></li>
                <li><a href="https://oyaspray.vercel.app" target="_blank" rel="noreferrer">OyaSpray Micropayments</a></li>
                <li><a href="https://webphinix.vercel.app" target="_blank" rel="noreferrer">Webphinix Business</a></li>
              </ul>
            </div>

            <div className="apple-footer-col">
              <h4>Experience</h4>
              <ul>
                <li><a href="#experience" onClick={(e) => smoothScrollTo(e, '#experience')}>Codveda Technologies</a></li>
                <li><a href="#experience" onClick={(e) => smoothScrollTo(e, '#experience')}>NoteQuest Platform</a></li>
                <li><a href="#experience" onClick={(e) => smoothScrollTo(e, '#experience')}>Tenkobo Ambassador (Norway)</a></li>
                <li><a href="#experience" onClick={(e) => smoothScrollTo(e, '#experience')}>Cowrywise Ambassador</a></li>
                <li><a href="#experience" onClick={(e) => smoothScrollTo(e, '#experience')}>Interledger NextGen</a></li>
              </ul>
            </div>

            <div className="apple-footer-col">
              <h4>Academics & Stack</h4>
              <ul>
                <li><a href="#academics" onClick={(e) => smoothScrollTo(e, '#academics')}>Covenant University CS</a></li>
                <li><a href="#academics" onClick={(e) => smoothScrollTo(e, '#academics')}>Open Payments & ILP</a></li>
                <li><a href="#academics" onClick={(e) => smoothScrollTo(e, '#academics')}>Full-Stack Architecture</a></li>
                <li><a href="#academics" onClick={(e) => smoothScrollTo(e, '#academics')}>Relational Systems & APIs</a></li>
                <li><a href="#academics" onClick={(e) => smoothScrollTo(e, '#academics')}>Certifications</a></li>
              </ul>
            </div>

            <div className="apple-footer-col">
              <h4>Connect</h4>
              <ul>
                <li><a href="https://www.linkedin.com/in/praise-adesina-bb5905248" target="_blank" rel="noreferrer">LinkedIn</a></li>
                <li><a href="https://github.com/praiseadesina2-stack" target="_blank" rel="noreferrer">GitHub</a></li>
                <li><a href="https://x.com/praiseadesina" target="_blank" rel="noreferrer">Twitter / X</a></li>
                <li><a href="https://wa.me/2347043503721" target="_blank" rel="noreferrer">WhatsApp</a></li>
                <li><a href="mailto:praiseadesina2@gmail.com">Direct Email</a></li>
              </ul>
            </div>

          </div>

          <div className="apple-footer-legal">
            <div>
              Copyright © {new Date().getFullYear()} Praise Adesina. All rights reserved. • Covenant University CS
            </div>
            <div style={{ display: 'flex', gap: '16px' }}>
              <a href="#hero" onClick={(e) => smoothScrollTo(e, '#hero')}>Back to Top ↑</a>
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        @media (max-width: 834px) {
          .mobile-menu-btn {
            display: inline-flex !important;
          }
        }
      `}</style>
    </div>
  );
};

export default App;
