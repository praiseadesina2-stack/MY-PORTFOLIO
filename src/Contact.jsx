import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import confetti from 'canvas-confetti';
import { Mail, MapPin, Send, Check, Copy } from 'lucide-react';

const Contact = () => {
    const [loading, setLoading] = useState(false);
    const [feedback, setFeedback] = useState(null);
    const [copied, setCopied] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setFeedback(null);

        try {
            await emailjs.sendForm(
                'service_y0oy1e8',
                'template_gk9genb',
                e.target,
                'YGqUVfHKvv3okl2Bu'
            );

            confetti({ particleCount: 180, spread: 80, origin: { y: 0.6 } });
            setFeedback({ type: 'success', text: 'Message sent successfully! Praise will get back to you soon.' });
            e.target.reset();
        } catch (error) {
            console.error(error);
            setFeedback({ type: 'error', text: 'Something went wrong. Please try again or email directly.' });
        } finally {
            setLoading(false);
            setTimeout(() => setFeedback(null), 6000);
        }
    };

    const handleCopy = () => {
        navigator.clipboard.writeText('praiseadesina2@gmail.com');
        setCopied(true);
        confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
        setTimeout(() => setCopied(false), 2500);
    };

    return (
        <div className="bento-card col-span-12" id="contact" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
            <div>
                <div className="section-label">Contact & Connect</div>
                <h3 style={{ fontSize: '2.25rem', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.04em' }}>Let's Build Together.</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.05rem', lineHeight: '1.6' }}>
                    I'm open to full-stack engineering, fintech, and product software developer internships, contract opportunities, or collaboration on ambitious products.
                </p>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                        <MapPin size={18} style={{ color: 'var(--accent-primary)' }} />
                        <span>Ogbomosho, Oyo State, Nigeria • Covenant University</span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                        <Mail size={18} style={{ color: 'var(--accent-primary)' }} />
                        <span>praiseadesina2@gmail.com</span>
                    </div>
                </div>                <div style={{ marginBottom: '2rem' }}>
                    <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem', fontWeight: 600 }}>Quick Email Copy</div>
                    <button 
                        onClick={handleCopy}
                        style={{ 
                            background: 'var(--bg-secondary)', border: `1px solid ${copied ? 'var(--accent-primary)' : 'var(--border-color)'}`, 
                            color: copied ? 'var(--accent-primary)' : 'var(--text-primary)', padding: '0.85rem 1.25rem', borderRadius: '0.75rem', 
                            display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', cursor: 'pointer',
                            fontSize: '0.95rem', fontFamily: 'monospace', transition: 'all 0.2s'
                        }}
                    >
                        <span>praiseadesina2@gmail.com</span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontWeight: 600 }}>
                            {copied ? <><Check size={16} /> Copied</> : <><Copy size={16} /> Copy</>}
                        </span>
                    </button>
                </div>
                
                <div>
                    <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.75rem', fontWeight: 600 }}>Social Handles</div>
                    <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                        {[
                            { name: 'GitHub', link: 'https://github.com/praiseadesina2-stack', path: 'M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.11.8-.25.8-.57v-2c-3.26.71-3.95-1.4-3.95-1.4a3.1 3.1 0 0 0-1.3-1.71c-1.06-.73.08-.72.08-.72a2.46 2.46 0 0 1 1.8 1.21 2.5 2.5 0 0 0 3.43 1 2.49 2.49 0 0 1 .74-1.56c-2.6-.29-5.34-1.3-5.34-5.8a4.54 4.54 0 0 1 1.21-3.16 4.22 4.22 0 0 1 .11-3.12s.98-.31 3.2 1.2a11 11 0 0 1 5.82 0c2.22-1.51 3.19-1.2 3.19-1.2.44 1 .48 2.12.11 3.13a4.53 4.53 0 0 1 1.2 3.16c0 4.5-2.74 5.5-5.35 5.79a2.8 2.8 0 0 1 .8 2.17v3.21c0 .32.21.69.81.57A11.5 11.5 0 0 0 12 .5Z' },
                            { name: 'LinkedIn', link: 'https://www.linkedin.com/in/praise-adesina-bb5905248', path: 'M20.45 20.45h-3.55v-5.4c0-1.29-.02-2.94-1.79-2.94-1.8 0-2.07 1.4-2.07 2.84v5.5H9.49V9h3.41v1.56h.05c.48-.9 1.66-1.85 3.41-1.85 3.64 0 4.31 2.4 4.31 5.52v6.22ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z' },
                            { name: 'X', link: 'https://x.com/praiseadesina', path: 'M18.245 3H21l-6.16 7.04L22 21h-6.4l-4.2-5.48L6.4 21H3l6.68-7.64L2 3h6.52l3.84 5.12L18.24 3Zm-1.12 16.2h1.76L8.94 4.7H7.06l10.064 14.5Z' },
                            { name: 'Instagram', link: 'https://www.instagram.com/globalpraisekinging/', path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z' },
                            { name: 'WhatsApp', link: 'https://wa.me/2347043503721', path: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z' }
                        ].map(s => (
                            <a 
                                key={s.name} 
                                href={s.link} 
                                target="_blank" 
                                rel="noreferrer"
                                aria-label={s.name}
                                style={{ 
                                    padding: '0.85rem', 
                                    background: 'var(--bg-secondary)', 
                                    border: '1px solid var(--border-color)', 
                                    borderRadius: '0.75rem', 
                                    color: 'var(--text-primary)', 
                                    transition: 'all 0.2s',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justify: 'center'
                                }}
                                className="social-link"
                            >
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                                    <path d={s.path} />
                                </svg>
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                    <input name="name" type="text" placeholder="Your Name" required style={{ width: '100%', padding: '0.85rem 1.15rem', borderRadius: '0.75rem', border: '1px solid var(--border-color)', background: 'var(--bg-primary)', color: 'var(--text-primary)', outline: 'none' }} />
                    <input name="email" type="email" placeholder="Your Email" required style={{ width: '100%', padding: '0.85rem 1.15rem', borderRadius: '0.75rem', border: '1px solid var(--border-color)', background: 'var(--bg-primary)', color: 'var(--text-primary)', outline: 'none' }} />
                </div>
                <textarea name="message" placeholder="Your Message..." required rows="5" style={{ width: '100%', padding: '0.85rem 1.15rem', borderRadius: '0.75rem', border: '1px solid var(--border-color)', background: 'var(--bg-primary)', color: 'var(--text-primary)', resize: 'vertical', outline: 'none' }}></textarea>
                
                <button type="submit" disabled={loading} className="btn btn-accent" style={{ width: '100%', justifyContent: 'center', padding: '0.9rem', borderRadius: '0.75rem' }}>
                    {loading ? 'Sending...' : <><Send size={18} /> Send Direct Message</>}
                </button>

                {feedback && (
                    <div style={{ 
                        padding: '0.85rem 1rem', 
                        borderRadius: '0.75rem', 
                        background: feedback.type === 'success' ? 'var(--accent-glow)' : 'rgba(239, 68, 68, 0.12)', 
                        border: `1px solid ${feedback.type === 'success' ? 'var(--accent-primary)' : 'rgba(239, 68, 68, 0.3)'}`,
                        color: feedback.type === 'success' ? 'var(--accent-primary)' : '#ef4444', 
                        textAlign: 'center', 
                        fontSize: '0.9rem', 
                        fontWeight: 600 
                    }}>
                        {feedback.text}
                    </div>
                )}
            </form>
        </div>
    );
};

export default Contact;

