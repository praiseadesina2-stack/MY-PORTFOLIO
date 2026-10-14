import React, { useState, useRef, useEffect } from 'react';
import { ArrowUp, Sparkles, MessageCircle } from 'lucide-react';

const knowledgeBase = {
  skills: "Praise works with JavaScript, TypeScript, React.js, Next.js, Node.js, Express, PostgreSQL, Prisma ORM, Interledger Open Payments SDK, Kora API, Python, C++, C, Java, Firebase, Gemini 3 API, REST APIs, and Socket.io.",
  
  projects: "Praise has built 10+ projects including:\n1. Afrizend — Pan-African freelance marketplace on Kora API (3rd runner-up Kora Hackathon)\n2. Paylance — Cross-border escrow with AI milestone verification on ILP (2nd place Interledger Hackathon)\n3. MyNoteQuest — AI-powered study battles & anime explainers (1,000+ active beta users)\n4. OyaSpray — Real-time digital money spraying on Interledger Testnet\n5. Webphinix — High-converting web platform for small businesses\n6. CampusSecure / Lost & Found System — Item search & auth with PostgreSQL\n7. Flip Card Memory Game — Interactive browser game\n8. Blog Platform — MDX & code syntax highlighting\n9. Couchd Cinema — TMDB API trailer platform\n10. Portfolio Website — React + Vite Apple redesign",
  
  education: "Praise is a Computer Science undergraduate at Covenant University (Oct 2024 - Oct 2028), studying Data Structures, DBMS, and Systems Architecture.",
  
  experience: "Praise's experience includes:\n• Full-Stack Development Intern @ Codveda Technologies (May 2026 - Present)\n• Product Developer @ NoteQuest (Dec 2025 - Present, 1,000+ beta users)\n• Campus Ambassador @ Tenkobo / Kronerland AS Norway (Mar 2026 - Present)\n• Campus Ambassador @ Cowrywise (Dec 2025 - Present, selected from 480+ schools)\n• Open Payments Trainee @ Interledger Foundation",
  
  hackathons: "Praise is a 3x Hackathon Placer!\n🏆 2nd Place: Interledger NextGen Hackathon (Paylance — AI Milestone Escrow)\n🏆 3rd Runner-Up: Kora Hackathon 2.0 (Afrizend — Pan-African Freelance Marketplace on Kora API)\n🏆 SEO Africa Corporate Immersion Tech Stream candidate.",
  
  hobbies: "Praise loves playing football, gaming, teaching peer study groups, and building tech products. He is passionate about fintech, edtech, and high-impact digital products.",
  
  contact: "You can reach Praise directly at praiseadesina2@gmail.com or via LinkedIn (in/praise-adesina-bb5905248), GitHub (praiseadesina2-stack), Twitter/X (@praiseadesina), or WhatsApp (+234 704 350 3721).",
  
  location: "Praise is based in Nigeria, studying at Covenant University in Ota, Ogun State.",
  
  certifications: "Praise holds the Microsoft Office Specialist: Word Associate certification issued in April 2025.",

  default: "I'm Praise's AI Assistant. Ask me anything about his full-stack engineering background, 10 projects, hackathon placements, internship at Codveda, or education at Covenant University!"
};

const getBotResponse = (question) => {
  const q = question.toLowerCase();
  if (q.includes('hackathon') || q.includes('award') || q.includes('win') || q.includes('placer')) return knowledgeBase.hackathons;
  if (q.includes('skill') || q.includes('tech') || q.includes('stack') || q.includes('language')) return knowledgeBase.skills;
  if (q.includes('project') || q.includes('built') || q.includes('created') || q.includes('work') || q.includes('notequest') || q.includes('afrizend') || q.includes('paylance')) return knowledgeBase.projects;
  if (q.includes('education') || q.includes('school') || q.includes('covenant') || q.includes('university') || q.includes('gpa') || q.includes('class')) return knowledgeBase.education;
  if (q.includes('experience') || q.includes('job') || q.includes('intern') || q.includes('codveda') || q.includes('tenkobo') || q.includes('cowrywise')) return knowledgeBase.experience;
  if (q.includes('certif') || q.includes('microsoft')) return knowledgeBase.certifications;
  if (q.includes('location') || q.includes('where') || q.includes('nigeria') || q.includes('ogbomosho')) return knowledgeBase.location;
  if (q.includes('hobby') || q.includes('hobbies') || q.includes('interest') || q.includes('fun')) return knowledgeBase.hobbies;
  if (q.includes('contact') || q.includes('email') || q.includes('reach') || q.includes('hire')) return knowledgeBase.contact;
  return knowledgeBase.default;
};

const Chat = () => {
  const [messages, setMessages] = useState([
    { text: "Hello! I am Praise's portfolio assistant. Ask me anything about his technical stack, hackathon awards, or engineering background.", isUser: false }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = (text) => {
    if (!text.trim()) return;
    setMessages(prev => [...prev, { text, isUser: true }]);
    setInput('');
    
    setTimeout(() => {
      setMessages(prev => [...prev, { text: getBotResponse(text), isUser: false }]);
    }, 350);
  };

  return (
    <div 
      style={{ 
        maxWidth: '820px', 
        margin: '0 auto',
        backgroundColor: 'var(--color-canvas)',
        border: '1px solid var(--color-hairline)',
        borderRadius: 'var(--rounded-lg)',
        padding: '32px',
        boxSizing: 'border-box'
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px', paddingBottom: '16px', borderBottom: '1px solid var(--color-hairline)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: 'var(--color-primary)', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Sparkles size={18} />
          </div>
          <div>
            <div style={{ fontSize: '17px', fontWeight: 600, letterSpacing: '-0.374px' }}>Portfolio AI Assistant</div>
            <div style={{ fontSize: '13px', color: 'var(--color-ink-muted-48)' }}>Instant answers on experience, hackathons & code</div>
          </div>
        </div>
      </div>

      {/* Messages stream */}
      <div 
        style={{ 
          height: '340px', 
          overflowY: 'auto', 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '14px', 
          paddingRight: '6px',
          marginBottom: '20px'
        }}
      >
        {messages.map((msg, idx) => (
          <div 
            key={idx} 
            style={{ 
              display: 'flex', 
              justifyContent: msg.isUser ? 'flex-end' : 'flex-start' 
            }}
          >
            <div 
              style={{ 
                maxWidth: '80%', 
                padding: '12px 18px', 
                borderRadius: '18px',
                borderTopRightRadius: msg.isUser ? '4px' : '18px',
                borderTopLeftRadius: msg.isUser ? '18px' : '4px',
                backgroundColor: msg.isUser ? 'var(--color-primary)' : 'var(--color-canvas-parchment)',
                color: msg.isUser ? '#ffffff' : 'var(--color-ink)',
                fontSize: '15px',
                lineHeight: '1.45',
                whiteSpace: 'pre-line',
                border: msg.isUser ? 'none' : '1px solid var(--color-divider-soft)'
              }}
            >
              {msg.text}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Quick Questions Chips */}
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '16px' }}>
        {[
          'Top 3 Projects',
          'Hackathon Awards',
          'Technical Stack',
          'Codveda Internship'
        ].map(q => (
          <button 
            key={q} 
            type="button"
            onClick={() => handleSend(q)}
            className="filter-chip"
            style={{ fontSize: '13px', padding: '6px 14px' }}
          >
            {q}
          </button>
        ))}
      </div>

      {/* Pill Input Form matching search-input spec */}
      <form 
        onSubmit={(e) => { e.preventDefault(); handleSend(input); }} 
        style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
      >
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask a question about Praise's engineering work..." 
          className="search-input-pill"
          style={{ maxWidth: '100%' }}
        />
        <button 
          type="submit" 
          className="btn-primary" 
          style={{ 
            minHeight: '44px', 
            width: '44px', 
            padding: 0, 
            borderRadius: '50%',
            flexShrink: 0
          }}
          aria-label="Send query"
        >
          <ArrowUp size={18} />
        </button>
      </form>
    </div>
  );
};

export default Chat;
