import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, Sparkles } from 'lucide-react';

const knowledgeBase = {
    skills: "Praise works with JavaScript, TypeScript, React.js, Next.js, Node.js, Express, PostgreSQL, Prisma ORM, Interledger Open Payments SDK, Kora API, Python, C++, C, Java, Firebase, Gemini 3 API, REST APIs, and Socket.io.",
    
    projects: "Praise has built 10+ projects including:\n1. Afrizend (Pan-African freelance marketplace on Kora API, 3rd runner-up Kora Hackathon)\n2. Paylance (Cross-border escrow with AI milestone verification on ILP, 2nd place Interledger Hackathon)\n3. MyNoteQuest (AI-powered study battles & anime explainers, 1,000+ active beta users)\n4. OyaSpray (Real-time digital money spraying on Interledger Testnet)\n5. Webphinix (High-converting web platform for business)\n6. CampusSecure / Lost & Found System (Item upload & search with JWT auth & PostgreSQL)\n7. Flip Card Memory Game\n8. Blog Platform (MDX & syntax highlighting)\n9. Book Catalogue (Digital library management)\n10. Portfolio Website (React + Vite)",
    
    education: "Praise is a Computer Science undergraduate at Covenant University (Oct 2024 - Oct 2028).",
    
    experience: "Praise's experience includes:\n• Full-Stack Development Intern @ Codveda Technologies (May 2026 - Present)\n• Product Developer @ NoteQuest (Dec 2025 - Present, 1,000+ beta users)\n• Campus Ambassador @ Tenkobo / Kronerland AS Norway (Mar 2026 - Present)\n• Campus Ambassador @ Cowrywise (Dec 2025 - Present, 480+ schools candidate)\n• Open Payments Trainee @ Interledger Foundation",
    
    hackathons: "Praise is a 3x Hackathon Placer!\n🏆 2nd Place: Interledger NextGen Hackathon (Paylance - AI Milestone Verification & Escrow)\n🏆 3rd Runner-Up: Kora Hackathon 2.0 (Afrizend - Pan-African Freelance Marketplace on Kora API)\n🏆 SEO Africa Corporate Immersion Tech Stream candidate with Bank of America.",
    
    hobbies: "Praise loves playing football, gaming, teaching peer study groups, and building tech products. He is passionate about fintech, edtech, and turning complex ideas into simple, high-impact user experiences.",
    
    contact: "You can reach Praise directly at praiseadesina2@gmail.com or via LinkedIn (in/praise-adesina-bb5905248), GitHub (praiseadesina2-stack), Twitter/X (@praiseadesina), or WhatsApp (+234 704 350 3721).",
    
    location: "Praise is based in Ogbomosho, Oyo State, Nigeria, and attends Covenant University in Ota, Ogun State, Nigeria.",
    
    certifications: "Praise holds the Microsoft Office Specialist: Word Associate (Office 2019) certification issued in April 2025.",

    default: "I'm Praise's AI Assistant! Praise Adesina is a Computer Science student at Covenant University, Full-Stack Developer, 3x Hackathon placer, and Ambassador for Cowrywise & Tenkobo. Ask me about his skills, 10 projects, internships, education, or contact info!"
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
        { text: "👋 Hi! I'm Praise's AI Assistant. Ask me anything about his 10+ projects, Codveda internship, hackathon wins, or skills!", isUser: false }
    ]);
    const [input, setInput] = useState('');
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
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
        }, 400);
    };

    return (
        <div className="bento-card col-span-12" id="chat" style={{ position: 'relative' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                <div>
                    <div className="section-label">
                        <Sparkles size={14} /> Interactive Assistant
                    </div>
                    <h3 style={{ fontSize: '1.75rem', fontWeight: 700, letterSpacing: '-0.03em' }}>Ask Me Anything</h3>
                </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', height: '420px' }}>
                <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem', paddingRight: '0.5rem' }} className="chat-messages">
                    {messages.map((msg, i) => (
                        <div key={i} style={{ display: 'flex', gap: '0.75rem', flexDirection: msg.isUser ? 'row-reverse' : 'row', alignItems: 'flex-start' }}>
                            <div style={{ 
                                width: '36px', height: '36px', borderRadius: '50%', 
                                background: msg.isUser ? 'var(--text-primary)' : 'var(--accent-glow)', 
                                color: msg.isUser ? 'var(--bg-primary)' : 'var(--accent-primary)', 
                                display: 'flex', alignItems: 'center', justifyContent: 'center', 
                                fontWeight: 'bold', fontSize: '0.85rem', border: '1px solid var(--border-color)', flexShrink: 0 
                            }}>
                                {msg.isUser ? 'You' : <Bot size={18} />}
                            </div>
                            <div style={{ 
                                background: msg.isUser ? 'var(--text-primary)' : 'var(--bg-secondary)', 
                                color: msg.isUser ? 'var(--bg-primary)' : 'var(--text-primary)', 
                                padding: '0.85rem 1.25rem', borderRadius: '1.25rem', 
                                borderTopRightRadius: msg.isUser ? 0 : '1.25rem', 
                                borderTopLeftRadius: msg.isUser ? '1.25rem' : 0, 
                                maxWidth: '82%', border: '1px solid var(--border-color)',
                                fontSize: '0.95rem', whitespace: 'pre-line', lineHeight: '1.5'
                            }}>
                                {msg.text}
                            </div>
                        </div>
                    ))}
                    <div ref={messagesEndRef} />
                </div>
                
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    {['What are your top projects?', 'Tell me about Hackathons', 'What is your Tech Stack?', 'How can I contact Praise?'].map(q => (
                        <button key={q} onClick={() => handleSend(q)} style={{ padding: '0.4rem 0.85rem', background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '99px', fontSize: '0.8125rem', cursor: 'pointer', color: 'var(--text-primary)', transition: 'all 0.2s' }} className="quick-q-btn">
                            {q}
                        </button>
                    ))}
                </div>

                <form onSubmit={(e) => { e.preventDefault(); handleSend(input); }} style={{ display: 'flex', gap: '0.75rem' }}>
                    <input 
                        type="text" 
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Ask about Praise's projects, experience, or skills..." 
                        style={{ flex: 1, padding: '0.85rem 1.25rem', borderRadius: '0.75rem', border: '1px solid var(--border-color)', background: 'var(--bg-primary)', color: 'var(--text-primary)', fontSize: '0.95rem', outline: 'none' }} 
                    />
                    <button type="submit" className="btn btn-primary" style={{ padding: '0.85rem 1.5rem', borderRadius: '0.75rem' }}>
                        <Send size={18} />
                    </button>
                </form>
            </div>
            <style>{`
                .chat-messages::-webkit-scrollbar { width: 5px; }
                .chat-messages::-webkit-scrollbar-track { background: transparent; }
                .chat-messages::-webkit-scrollbar-thumb { background: var(--border-color); border-radius: 4px; }
                .quick-q-btn:hover { background: var(--border-color) !important; transform: translateY(-1px); }
            `}</style>
        </div>
    );
};

export default Chat;

