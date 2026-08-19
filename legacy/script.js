// ============================================
// PARTICLE BACKGROUND SYSTEM
// ============================================
class ParticleSystem {
    constructor() {
        this.canvas = document.getElementById('particleCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.particleCount = 80;
        this.maxDistance = 150;
        this.mouse = { x: null, y: null, radius: 150 };
        
        this.init();
        this.animate();
        this.setupEventListeners();
    }

    init() {
        this.resizeCanvas();
        this.createParticles();
    }

    resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = document.documentElement.scrollHeight;
    }

    createParticles() {
        this.particles = [];
        for (let i = 0; i < this.particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                radius: Math.random() * 2 + 1
            });
        }
    }

    drawParticles() {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        const particleColor = isDark ? 'rgba(80, 166, 236, 0.8)' : 'rgba(0, 102, 204, 0.6)';
        const lineColor = isDark ? 'rgba(80, 166, 236, 0.15)' : 'rgba(0, 102, 204, 0.15)';

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Draw connections
        for (let i = 0; i < this.particles.length; i++) {
            for (let j = i + 1; j < this.particles.length; j++) {
                const dx = this.particles[i].x - this.particles[j].x;
                const dy = this.particles[i].y - this.particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < this.maxDistance) {
                    this.ctx.beginPath();
                    this.ctx.strokeStyle = lineColor;
                    this.ctx.lineWidth = 1;
                    this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
                    this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
                    this.ctx.stroke();
                }
            }

            // Mouse interaction
            if (this.mouse.x !== null && this.mouse.y !== null) {
                const dx = this.particles[i].x - this.mouse.x;
                const dy = this.particles[i].y - this.mouse.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < this.mouse.radius) {
                    this.ctx.beginPath();
                    this.ctx.strokeStyle = particleColor;
                    this.ctx.lineWidth = 0.5;
                    this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
                    this.ctx.lineTo(this.mouse.x, this.mouse.y);
                    this.ctx.stroke();
                }
            }
        }

        // Draw particles
        this.particles.forEach(particle => {
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
            this.ctx.fillStyle = particleColor;
            this.ctx.fill();
        });
    }

    updateParticles() {
        this.particles.forEach(particle => {
            particle.x += particle.vx;
            particle.y += particle.vy;

            // Bounce off edges
            if (particle.x < 0 || particle.x > this.canvas.width) particle.vx *= -1;
            if (particle.y < 0 || particle.y > this.canvas.height) particle.vy *= -1;
        });
    }

    animate() {
        this.drawParticles();
        this.updateParticles();
        requestAnimationFrame(() => this.animate());
    }

    setupEventListeners() {
        window.addEventListener('resize', () => {
            this.resizeCanvas();
            this.createParticles();
        });

        window.addEventListener('mousemove', (e) => {
            this.mouse.x = e.x;
            this.mouse.y = e.y + window.scrollY;
        });

        window.addEventListener('mouseout', () => {
            this.mouse.x = null;
            this.mouse.y = null;
        });
    }
}

// ============================================
// PROJECT DATA & MANAGEMENT
// ============================================
const allProjects = [
     {
        title: 'Afrizend',
        description: 'Pan-African freelance marketplace using Kora API with virtual wallets and dynamic currency conversion.',
        image: 'https://api.microlink.io/?url=https://afrizend.vercel.app&screenshot=true&meta=false&embed=screenshot.url',
        tags: ['Next.js', 'TypeScript', 'Prisma', 'Kora API'],
        category: 'fullstack',
        link: 'https://afrizend.vercel.app',
        linkText: 'Live Demo →'
    },
     {
        title: 'Paylance',
        description: 'Trust-first payment platform for freelancers using Interledger Protocol escrow and AI milestone verification.',
        image: 'https://api.microlink.io/?url=https://github.com/praiseadesina2-stack/Paylance&screenshot=true&meta=false&embed=screenshot.url',
        tags: ['React', 'Node.js', 'ILP SDK'],
        category: 'fullstack',
        link: '#',
        linkText: 'View Project →'
    },
     {
        title: 'OyaSpray',
        description: 'Real-time digital money-spraying platform on the Interledger Testnet with cross-ledger micropayments.',
        image: 'https://api.microlink.io/?url=https://github.com/praiseadesina2-stack/OyaSpray&screenshot=true&meta=false&embed=screenshot.url',
        tags: ['Node.js', 'Socket.io', 'ILP SDK'],
        category: 'fullstack',
        link: '#',
        linkText: 'View Project →'
    },
    {
        title: 'CampusSecure',
        description: 'End-to-end lost-and-found platform with JWT auth, AI-powered item description (Gemini), and real-time notifications.',
        image: 'https://api.microlink.io/?url=https://campussecure.vercel.app&screenshot=true&meta=false&embed=screenshot.url',
        tags: ['React', 'PostgreSQL', 'Prisma'],
        category: 'fullstack',
        link: 'https://campussecure.vercel.app',
        linkText: 'Live Demo →'
    },
     {
        title: 'MyNoteQuest',
        description: 'Transform heavy PDFs into Cinematic Anime Explainers and competitive AI-powered study battles.',
        image: 'https://api.microlink.io/?url=https://mynotequest.com&screenshot=true&meta=false&embed=screenshot.url',
        tags: ['React', 'Firebase', 'Gemini 3'],
        category: 'fullstack',
        link: 'https://mynotequest.com',
        linkText: 'Live Demo →'
    },
     {
        title: 'Webphinix',
        description: 'Webphinix builds professional, conversion-focused websites for small businesses, startups, and freelancers.',
        image: 'https://api.microlink.io/?url=https://webphinix.vercel.app&screenshot=true&meta=false&embed=screenshot.url',
        tags: ['React', 'Node.js', 'JavaScript'],
        category: 'fullstack',
        link: 'https://webphinix.vercel.app',
        linkText: 'Live Demo →'
    },
    {
        title: 'Blog Platform',
        description: 'A clean blog for information dissemination and tech updates with MDX support and syntax highlighting.',
        image: 'https://api.microlink.io/?url=https://praise-blog-website.vercel.app&screenshot=true&meta=false&embed=screenshot.url',
        tags: ['HTML', 'CSS', 'JavaScript'],
        category: 'web',
        link: 'https://praise-blog-website.vercel.app',
        linkText: 'View Project →'
    },
    {
        title: 'Book Catalogue',
        description: 'Digital library system for cataloging and managing book collections with search and filter features.',
        image: '../Book catalogue/Screenshot 2026-01-31 220931.png',
        tags: ['React', 'PostgreSQL'],
        category: 'web',
        link: '../Book catalogue/design2.html',
        linkText: 'View Project →'
    },
     {
        title: 'Portfolio Website',
        description: 'A responsive personal portfolio built with modern web technologies, featuring clean design and smooth animations.',
        image: 'https://api.microlink.io/?url=https://praiseadesina-portfolio.netlify.app&screenshot=true&meta=false&embed=screenshot.url',
        tags: ['HTML', 'CSS', 'JavaScript'],
        category: 'frontend',
        link: 'https://praiseadesina-portfolio.netlify.app',
        linkText: 'Live Demo →'
    },
    // {
    //     title: 'Tic-Tac-Toe',
    //     description: 'Interactive Tic-Tac-Toe game with clean UI and smooth gameplay mechanics.',
    //     image: '../TICTACTOE/Screenshot 2026-01-31 223548.png',
    //     tags: ['HTML', 'CSS', 'JavaScript'],
    //     category: 'frontend',
    //     link: '../TICTACTOE/tic-tac-toe.html',
    //     linkText: 'View Project →'
    // }
];

let displayedProjects = 9;
let currentFilter = 'all';

function createProjectCard(project) {
    return `
        <article class="project-card" data-category="${project.category}">
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}">
            </div>
            <div class="project-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.link}" ${project.link.startsWith('http') ? 'target="_blank"' : ''} class="project-link">${project.linkText}</a>
                </div>
            </div>
        </article>
    `;
}

function loadProjects() {
    const grid = document.getElementById('projectsGrid');
    const projectsToShow = allProjects.slice(0, displayedProjects);
    
    grid.innerHTML = projectsToShow.map(project => createProjectCard(project)).join('');
    
    // Update load more button
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    if (displayedProjects >= allProjects.length) {
        loadMoreBtn.style.display = 'none';
    } else {
        loadMoreBtn.style.display = 'inline-block';
    }
    
    filterProjects(currentFilter);
}

function filterProjects(category) {
    currentFilter = category;
    const cards = document.querySelectorAll('.project-card');
    
    cards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            card.classList.remove('hidden');
            card.style.animation = 'fadeInUp 0.5s ease';
        } else {
            card.classList.add('hidden');
        }
    });
}

// ============================================
// CHATBOT SYSTEM
// ============================================
const knowledgeBase = {
    skills: "I work with TypeScript, Next.js, React, Node.js, PostgreSQL, Prisma, Interledger SDK, Kora API, and more. I'm proficient in full-stack web and product development.",
    
    projects: "I've built Afrizend (a freelance marketplace), Paylance (an ILP-based escrow platform), OyaSpray, CampusSecure, and MyNoteQuest. My focus is on fintech, edtech, and impactful digital products!",
    
    education: "I'm studying Computer Science at Covenant University (2024-2028) with First Class Honours. I'm also active as a Course Representative and Academic Tutor.",
    
    experience: "I'm a Trainee at the Interledger Foundation, Full-Stack Intern at Codveda Technologies, Technical Lead at IGP Foundation, and Product Developer at NoteQuest.",
    
    hobbies: "I love playing football and gaming! Beyond that, I enjoy teaching and writing about tech. I'm passionate about turning complex ideas into simple, beautiful experiences.",
    
    contact: "You can reach me at praiseadesina2@gmail.com or connect with me on LinkedIn, Twitter, Instagram, or WhatsApp. I'm always open to discussing new projects and opportunities!",
    
    technologies: "My tech stack includes React, Next.js, TypeScript, Node.js, Express, PostgreSQL, Prisma, Kora API, and the Interledger Open Payments SDK.",
    
    goals: "My goal is to create products that scale and truly help people. I'm focused on building impactful digital products that solve real problems and improve lives.",
    
    default: "That's a great question! I'm Praise Adesina, a passionate Computer Science student at Covenant University. I build clean, scalable web experiences and I'm particularly interested in fintech and edtech applications. Feel free to ask me about my skills, projects, education, or interests!"
};

function getBotResponse(question) {
    const q = question.toLowerCase();
    
    if (q.includes('skill') || q.includes('tech') || q.includes('stack')) {
        return knowledgeBase.skills;
    } else if (q.includes('project') || q.includes('built') || q.includes('created')) {
        return knowledgeBase.projects;
    } else if (q.includes('education') || q.includes('school') || q.includes('university') || q.includes('study')) {
        return knowledgeBase.education;
    } else if (q.includes('experience') || q.includes('work') || q.includes('job')) {
        return knowledgeBase.experience;
    } else if (q.includes('hobby') || q.includes('hobbies') || q.includes('interest') || q.includes('fun')) {
        return knowledgeBase.hobbies;
    } else if (q.includes('contact') || q.includes('email') || q.includes('reach')) {
        return knowledgeBase.contact;
    } else if (q.includes('tech') || q.includes('language') || q.includes('framework')) {
        return knowledgeBase.technologies;
    } else if (q.includes('goal') || q.includes('future') || q.includes('aim')) {
        return knowledgeBase.goals;
    } else 
        
        {
        return knowledgeBase.default;
    }
}

function addMessage(text, isUser = false) {
    const chatMessages = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isUser ? 'user-message' : 'bot-message'}`;
    
    messageDiv.innerHTML = `
        <div class="message-avatar">${isUser ? 'You' : 'PA'}</div>
        <div class="message-content">
            <p>${text}</p>
        </div>
    `;
    
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// ============================================
// THEME TOGGLE
// ============================================
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// Set dark mode by default
html.setAttribute('data-theme', 'dark');
localStorage.setItem('theme', 'dark');

themeToggle.addEventListener('click', () => {
    const theme = html.getAttribute('data-theme');
    const newTheme = theme === 'light' ? 'dark' : 'light';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});

// ============================================
// SMOOTH SCROLL & NAVIGATION
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// NAVBAR EFFECTS
// ============================================
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// ============================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

// ============================================
// ACTIVE NAVIGATION HIGHLIGHTING
// ============================================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

function highlightNavigation() {
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', highlightNavigation);

// ============================================
// EMAILJS + IMPROVED LOADING STATE + CONFETTI
// ============================================
const EMAILJS_PUBLIC_KEY = 'YGqUVfHKvv3okl2Bu';
const EMAILJS_SERVICE_ID = 'service_y0oy1e8';
const EMAILJS_TEMPLATE_ID = 'template_gk9genb';

emailjs.init(EMAILJS_PUBLIC_KEY);

function launchConfetti() {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.3/dist/confetti.browser.min.js';
    script.onload = () => {
        confetti({
            particleCount: 180,
            spread: 80,
            origin: { y: 0.6 }
        });
        
        setTimeout(() => {
            confetti({
                particleCount: 120,
                angle: 60,
                spread: 55,
                origin: { x: 0.1, y: 0.7 }
            });
        }, 200);
    };
    document.head.appendChild(script);
}

// ============================================
// CONTACT FORM WITH BETTER LOADING
// ============================================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalBtnHTML = submitBtn.innerHTML;

        // Better loading state
        submitBtn.innerHTML = `
            <span class="sending-text">Sending Message</span>
            <span class="loading-spinner"></span>
        `;
        submitBtn.disabled = true;
        submitBtn.style.opacity = "0.85";

        try {
            const formData = new FormData(contactForm);

            const templateParams = {
                from_name: formData.get('name'),
                from_email: formData.get('email'),
                message: formData.get('message'),
                to_name: "Praise Adesina"
            };

            await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                templateParams
            );

            // Success
            launchConfetti();

            // Success feedback
            const successDiv = document.createElement('div');
            successDiv.className = 'form-feedback success';
            successDiv.innerHTML = `
                ✅ Message sent successfully!<br>
                <small>I'll get back to you as soon as possible.</small>
            `;
            contactForm.appendChild(successDiv);

            contactForm.reset();

            // Auto remove success message
            setTimeout(() => {
                if (successDiv.parentNode) successDiv.remove();
            }, 6000);

        } catch (error) {
            console.error('EmailJS Error:', error);

            const errorDiv = document.createElement('div');
            errorDiv.className = 'form-feedback error';
            errorDiv.textContent = "❌ Something went wrong. Please try again or email me directly.";
            contactForm.appendChild(errorDiv);

            setTimeout(() => {
                if (errorDiv.parentNode) errorDiv.remove();
            }, 5000);
        } finally {
            // Restore button
            submitBtn.innerHTML = originalBtnHTML;
            submitBtn.disabled = false;
            submitBtn.style.opacity = "1";
        }
    });
}
// ============================================
// EMAIL COPY WITH ICON FEEDBACK + CONFETTI
// ============================================
function copyEmail() {
    const email = "praiseadesina2@gmail.com";
    const btn = document.getElementById('emailCopyBtn');
    
    navigator.clipboard.writeText(email).then(() => {
        // Launch confetti
        launchConfetti();

        // Visual feedback on button
        btn.classList.add('copied');
        
        // Optional: Temporarily show "Copied!" text
        const originalHTML = btn.innerHTML;
        btn.innerHTML = `
            <span class="email-text">praiseadesina2@gmail.com</span>
            <span class="copy-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 8H10C8.89543 8 8 8.89543 8 10V20C8 21.1046 8.89543 22 10 22H20C21.1046 22 22 21.1046 22 20V10C22 8.89543 21.1046 8 20 8Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M4 16H14C15.1046 16 16 15.1046 16 14V4C16 2.89543 15.1046 2 14 2H4C2.89543 2 2 2.89543 2 4V14C2 15.1046 2.89543 16 4 16Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </span>
            <span style="margin-left: auto; font-size: 0.85rem; color: #22c55e;">Copied ✓</span>
        `;

        // Reset button after 2.5 seconds
        setTimeout(() => {
            btn.classList.remove('copied');
            btn.innerHTML = originalHTML;
        }, 2500);

        // Optional toast (if you want extra feedback)
        // showToast("✅ Email copied!");

    }).catch(err => {
        console.error('Copy failed:', err);
        alert("Failed to copy email. Please copy it manually.");
    });
}
// ============================================
// CHAT FUNCTIONALITY
// ============================================
const chatForm = document.getElementById('chatForm');
const chatInput = document.getElementById('chatInput');

if (chatForm) {
    chatForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const question = chatInput.value.trim();
        
        if (question) {
            addMessage(question, true);
            chatInput.value = '';
            
            setTimeout(() => {
                const response = getBotResponse(question);
                addMessage(response, false);
            }, 500);
        }
    });
}

// Quick question buttons
document.querySelectorAll('.quick-q').forEach(btn => {
    btn.addEventListener('click', () => {
        const question = btn.dataset.question;
        addMessage(question, true);
        
        setTimeout(() => {
            const response = getBotResponse(question);
            addMessage(response, false);
        }, 500);
    });
});

// ============================================
// PROJECT FILTERING
// ============================================
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        filterProjects(btn.dataset.filter);
    });
});

// Load more projects
const loadMoreBtn = document.getElementById('loadMoreBtn');
if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', () => {
        displayedProjects += 3;
        loadProjects();
    });
}

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    // Initialize particle system
    new ParticleSystem();
    
    // Load projects
    loadProjects();
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll(
        '.project-card, .timeline-item, .about-card, .skill-itema, .skill-itemb, .reveal'
    );
    
    animateElements.forEach(el => {
        observer.observe(el);
    });
    
    // Page load animation
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
    
    // Dynamic year in footer
    const yearElement = document.querySelector('.footer p');
    if (yearElement) {
        const currentYear = new Date().getFullYear();
        yearElement.innerHTML = `&copy; ${currentYear} Praise Adesina. All rights reserved.`;
    }
});

// Performance optimization
function debounce(func, wait = 10) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

const debouncedHighlight = debounce(highlightNavigation, 10);
window.addEventListener('scroll', debouncedHighlight);

console.log('🚀 Enhanced Portfolio loaded successfully!');
console.log('✨ Features: Particle Background, AI Chatbot, Dynamic Projects');
