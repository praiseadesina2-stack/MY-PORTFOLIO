import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import confetti from 'canvas-confetti';
import { Mail, MapPin, Send, Check, Copy, ArrowUpRight } from 'lucide-react';

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

      confetti({ particleCount: 160, spread: 70, origin: { y: 0.6 } });
      setFeedback({ type: 'success', text: 'Message delivered. Praise will respond shortly.' });
      e.target.reset();
    } catch (error) {
      console.error(error);
      setFeedback({ type: 'error', text: 'Unable to send message directly. Please write to praiseadesina2@gmail.com' });
    } finally {
      setLoading(false);
      setTimeout(() => setFeedback(null), 6000);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText('praiseadesina2@gmail.com');
    setCopied(true);
    confetti({ particleCount: 80, spread: 60, origin: { y: 0.6 } });
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div 
      style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
        gap: '48px',
        alignItems: 'start'
      }}
    >
      {/* Left Column: Direct Inquiries */}
      <div>
        <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>
          Contact & Connect
        </div>
        <h3 className="display-md" style={{ marginBottom: '16px' }}>
          Let’s build something extraordinary.
        </h3>
        <p className="body-default" style={{ color: 'var(--color-ink-muted-80)', marginBottom: '32px' }}>
          Available for software engineering internships, high-impact product engineering roles, and fintech collaborations.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: 'var(--color-canvas-parchment)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)' }}>
              <MapPin size={18} />
            </div>
            <div>
              <div style={{ fontSize: '14px', fontWeight: 600 }}>Covenant University, Nigeria</div>
              <div style={{ fontSize: '13px', color: 'var(--color-ink-muted-48)' }}>Ota, Ogun State / Lagos</div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: 'var(--color-canvas-parchment)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)' }}>
              <Mail size={18} />
            </div>
            <div>
              <div style={{ fontSize: '14px', fontWeight: 600 }}>Direct Email</div>
              <div style={{ fontSize: '13px', color: 'var(--color-ink-muted-48)' }}>praiseadesina2@gmail.com</div>
            </div>
          </div>
        </div>

        {/* Quick Email Pill Copy Action */}
        <div style={{ marginBottom: '32px' }}>
          <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-ink-muted-80)', marginBottom: '10px' }}>
            Direct Contact
          </div>
          <button
            onClick={handleCopy}
            type="button"
            className="filter-chip"
            style={{ 
              width: '100%', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'space-between',
              padding: '12px 20px',
              height: '44px',
              fontFamily: 'monospace',
              fontSize: '14px'
            }}
          >
            <span>praiseadesina2@gmail.com</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--color-primary)', fontWeight: 600, fontFamily: 'var(--font-text)', fontSize: '13px' }}>
              {copied ? <><Check size={16} /> Copied</> : <><Copy size={16} /> Copy</>}
            </span>
          </button>
        </div>

        {/* Social Network Links */}
        <div>
          <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-ink-muted-80)', marginBottom: '12px' }}>
            Profiles & Accounts
          </div>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            {[
              { name: 'LinkedIn', url: 'https://www.linkedin.com/in/praise-adesina-bb5905248' },
              { name: 'GitHub', url: 'https://github.com/praiseadesina2-stack' },
              { name: 'Twitter / X', url: 'https://x.com/praiseadesina' },
              { name: 'WhatsApp', url: 'https://wa.me/2347043503721' }
            ].map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="filter-chip"
                style={{ 
                  textDecoration: 'none', 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '4px' 
                }}
              >
                <span>{social.name}</span>
                <ArrowUpRight size={14} style={{ opacity: 0.6 }} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Right Column: Contact Message Form */}
      <div 
        style={{ 
          backgroundColor: 'var(--color-canvas)', 
          border: '1px solid var(--color-hairline)', 
          borderRadius: 'var(--rounded-lg)', 
          padding: '32px' 
        }}
      >
        <h4 style={{ fontSize: '17px', fontWeight: 600, marginBottom: '18px', letterSpacing: '-0.2px' }}>
          Send a Message
        </h4>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '16px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: 500, color: 'var(--color-ink-muted-80)', marginBottom: '6px' }}>
                Full Name
              </label>
              <input 
                name="name" 
                type="text" 
                placeholder="Ada Lovelace" 
                required 
                style={{ 
                  width: '100%', 
                  padding: '12px 16px', 
                  borderRadius: 'var(--rounded-sm)', 
                  border: '1px solid var(--color-hairline)', 
                  backgroundColor: 'var(--color-canvas-parchment)', 
                  color: 'var(--color-ink)', 
                  fontSize: '15px', 
                  outline: 'none' 
                }} 
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: 500, color: 'var(--color-ink-muted-80)', marginBottom: '6px' }}>
                Email Address
              </label>
              <input 
                name="email" 
                type="email" 
                placeholder="ada@example.com" 
                required 
                style={{ 
                  width: '100%', 
                  padding: '12px 16px', 
                  borderRadius: 'var(--rounded-sm)', 
                  border: '1px solid var(--color-hairline)', 
                  backgroundColor: 'var(--color-canvas-parchment)', 
                  color: 'var(--color-ink)', 
                  fontSize: '15px', 
                  outline: 'none' 
                }} 
              />
            </div>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: 500, color: 'var(--color-ink-muted-80)', marginBottom: '6px' }}>
              Message
            </label>
            <textarea 
              name="message" 
              placeholder="Tell me about your team, role, or project..." 
              required 
              rows={4} 
              style={{ 
                width: '100%', 
                padding: '12px 16px', 
                borderRadius: 'var(--rounded-sm)', 
                border: '1px solid var(--color-hairline)', 
                backgroundColor: 'var(--color-canvas-parchment)', 
                color: 'var(--color-ink)', 
                fontSize: '15px', 
                resize: 'vertical', 
                outline: 'none',
                fontFamily: 'inherit'
              }} 
            />
          </div>

          <button 
            type="submit" 
            disabled={loading} 
            className="btn-primary" 
            style={{ width: '100%', marginTop: '8px' }}
          >
            {loading ? 'Sending message...' : <><Send size={16} /> Send Direct Message</>}
          </button>

          {feedback && (
            <div 
              style={{ 
                padding: '12px 16px', 
                borderRadius: 'var(--rounded-sm)', 
                backgroundColor: feedback.type === 'success' ? '#e6f4ea' : '#fce8e6', 
                border: `1px solid ${feedback.type === 'success' ? '#34a853' : '#ea4335'}`,
                color: feedback.type === 'success' ? '#137333' : '#c5221f', 
                textAlign: 'center', 
                fontSize: '14px', 
                fontWeight: 500 
              }}
            >
              {feedback.text}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
