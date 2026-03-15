import React, { useState } from 'react';
import { 
  Twitch, 
  Youtube, 
  Users, 
  ExternalLink, 
  Play, 
  Mail, 
  ChevronRight,
  Clock,
  Instagram,
  Twitter
} from 'lucide-react';
import './index.css';

const App: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => setFormStatus('sent'), 1500);
  };

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="nav" style={{ 
        padding: '1.2rem 0', 
        position: 'fixed', 
        width: '100%', 
        top: 0, 
        zIndex: 100, 
        backgroundColor: 'rgba(14, 14, 16, 0.95)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(47, 47, 53, 0.5)'
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', cursor: 'pointer' }} onClick={() => window.scrollTo(0, 0)}>
            <div style={{ 
              height: '40px', 
              width: '40px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              backgroundColor: 'rgba(255,255,255,0.05)',
              borderRadius: '8px',
              padding: '6px',
              border: '1px solid rgba(255,255,255,0.1)'
            }}>
              <img 
                src="tempr-logo.jpg" 
                alt="Tempr Logo" 
                style={{ height: '100%', width: '100%', objectFit: 'cover', borderRadius: '4px' }} 
                onError={(e) => {
                  (e.target as HTMLImageElement).style.opacity = '0';
                }}
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
              <span style={{ fontSize: '1.2rem', fontWeight: 900, letterSpacing: '-0.02em' }}>
                WOLFEE<span style={{ color: 'var(--color-purple)' }}>PACKK</span>
              </span>
              <span style={{ fontSize: '0.65rem', fontWeight: 800, color: 'var(--color-purple)', letterSpacing: '0.1em', marginTop: '0.2rem' }}>
                TEMPR ESPORTS
              </span>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '1.8rem', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.05em' }}>
            <a href="#stream" style={{ opacity: 0.8 }}>LIVE</a>
            <a href="#content" style={{ opacity: 0.8 }}>CONTENT</a>
            <a href="#schedule" style={{ opacity: 0.8 }}>SCHEDULE</a>
            <a href="#merch" style={{ opacity: 0.8 }}>MERCH</a>
          </div>
          <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'center' }}>
            <a href="https://twitch.tv/wolfeepackk" target="_blank" rel="noreferrer" className="social-icon"><Twitch size={18} /></a>
            <a href="https://youtube.com/@wolfeepackk" target="_blank" rel="noreferrer" className="social-icon"><Youtube size={18} /></a>
            <a href="https://x.com/wolfe2123" target="_blank" rel="noreferrer" className="social-icon"><Twitter size={18} /></a>
            <a href="#contact" className="btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem', textDecoration: 'none' }}>CONTACT</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero" style={{ 
        height: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        position: 'relative',
        overflow: 'hidden',
        background: 'radial-gradient(circle at 15% 50%, rgba(145, 71, 254, 0.15) 0%, transparent 40%)'
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '650px' }}>
            <div style={{ 
              display: 'inline-flex', 
              alignItems: 'center',
              gap: '1rem',
              padding: '0.5rem 1rem', 
              backgroundColor: 'rgba(145, 71, 254, 0.1)', 
              color: 'var(--color-purple)', 
              borderRadius: '4px',
              fontSize: '0.75rem',
              fontWeight: 800,
              marginBottom: '2rem',
              borderLeft: '4px solid var(--color-purple)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <div style={{ 
                  width: '28px', 
                  height: '28px', 
                  borderRadius: '4px', 
                  backgroundColor: 'white', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  overflow: 'hidden'
                }}>
                  <img 
                    src="tempr-logo.jpg" 
                    alt="Tempr Logo" 
                    style={{ height: '100%', width: '100%', objectFit: 'cover' }} 
                  />
                </div>
                <span style={{ color: 'white' }}>OFFICIAL TEMPR MEMBER</span>
              </div>
              <div style={{ width: '1px', height: '14px', backgroundColor: 'rgba(255,255,255,0.1)' }}></div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#ff4b4b', boxShadow: '0 0 10px #ff4b4b' }}></span>
                LIVE SOON
              </div>
            </div>
            <h1 style={{ fontSize: '5.5rem', fontWeight: 900, lineHeight: 0.9, marginBottom: '1.5rem', letterSpacing: '-0.04em' }}>
              JOIN THE <br />
              <span style={{ color: 'var(--color-purple)', textShadow: '0 0 30px var(--color-purple-glow)' }}>WOLFEEPACKK</span>
            </h1>
            <p style={{ color: 'var(--color-text-dim)', fontSize: '1.2rem', marginBottom: '2.5rem', maxWidth: '480px', lineHeight: 1.6 }}>
              The ultimate destination for elite E-League competition, daily high-energy streams, and exclusive community events.
            </p>
            <div style={{ display: 'flex', gap: '1.2rem' }}>
              <a href="https://twitch.tv/wolfeepackk" target="_blank" rel="noreferrer" className="btn-primary" style={{ padding: '1rem 2rem', fontSize: '1rem', textDecoration: 'none' }}>
                WATCH LIVE <Play size={20} fill="currentColor" />
              </a>
              <a href="https://discord.gg/S67NpxQtuk" target="_blank" rel="noreferrer" style={{ 
                padding: '1rem 2rem', 
                border: '1px solid #2F2F35', 
                borderRadius: '4px', 
                fontWeight: 700,
                fontSize: '1rem',
                backgroundColor: 'rgba(255,255,255,0.02)',
                textDecoration: 'none',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                DISCORD
              </a>
            </div>
          </div>
        </div>
        
        {/* Abstract Background Element */}
        <div style={{
          position: 'absolute',
          right: '-5%',
          bottom: '10%',
          fontSize: '30rem',
          fontWeight: 900,
          color: 'var(--color-purple)',
          opacity: 0.04,
          userSelect: 'none',
          pointerEvents: 'none',
          lineHeight: 1
        }}>
          WOLF
        </div>
      </header>

      {/* Twitch Stream Section */}
      <section id="stream" style={{ padding: '10rem 0', backgroundColor: 'var(--color-bg-darker)' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '3.5rem' }}>
            <h2 className="section-title" style={{ marginBottom: 0 }}>The Arena</h2>
            <div style={{ display: 'flex', gap: '1rem', color: 'var(--color-text-dim)', fontSize: '0.9rem', fontWeight: 600 }}>
              <span style={{ color: 'var(--color-purple)' }}>● LIVE CHAT</span>
              <span>● MULTI-CAM</span>
              <span>● 4K60</span>
            </div>
          </div>
          <div style={{ 
            aspectRatio: '16/9', 
            width: '100%', 
            backgroundColor: '#000',
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 30px 60px rgba(0,0,0,0.7)',
            border: '1px solid rgba(145, 71, 254, 0.2)',
            position: 'relative'
          }}>
            <iframe
              src="https://player.twitch.tv/?channel=wolfeepackk&parent=localhost"
              height="100%"
              width="100%"
              allowFullScreen>
            </iframe>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" style={{ padding: '8rem 0', background: 'linear-gradient(180deg, var(--color-bg-darker) 0%, var(--color-bg-dark) 100%)' }}>
        <div className="container">
          <h2 className="section-title">Weekly Schedule</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem' }}>
            {[
              { day: 'MON', time: '6:00 PM', event: 'E-League Qualifiers' },
              { day: 'TUE', time: '4:00 PM', event: 'Community Games' },
              { day: 'WED', time: 'OFF', event: 'Rest Day' },
              { day: 'THU', time: '6:00 PM', event: 'Ranked Grind' },
              { day: 'FRI', time: '8:00 PM', event: 'Friday Night Fever' },
              { day: 'SAT', time: '2:00 PM', event: 'Tournament Stream' },
              { day: 'SUN', time: '12:00 PM', event: 'Pack Hangout' },
            ].map((item) => (
              <div key={item.day} className="card" style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                <div style={{ fontWeight: 900, fontSize: '1.2rem', marginBottom: '0.5rem', color: item.time === 'OFF' ? '#444' : 'var(--color-white)' }}>{item.day}</div>
                <div style={{ 
                  color: 'var(--color-purple)', 
                  fontWeight: 800, 
                  fontSize: '0.8rem', 
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.3rem'
                }}>
                  <Clock size={12} /> {item.time}
                </div>
                <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-text-dim)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {item.event}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Gallery */}
      <section id="content" style={{ padding: '10rem 0' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem' }}>
            <div>
              <h2 className="section-title" style={{ marginBottom: '1rem' }}>Latest Intel</h2>
              <p style={{ color: 'var(--color-text-dim)' }}>Dive into the latest walkthroughs and survival horror highlights.</p>
            </div>
            <a href="https://www.youtube.com/@Wolfeepackk/playlists" target="_blank" rel="noreferrer" style={{ 
              color: 'var(--color-purple)', 
              fontWeight: 700, 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.5rem',
              fontSize: '0.9rem'
            }}>
              VIEW PLAYLISTS <ChevronRight size={18} />
            </a>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '3rem' }}>
            {/* Resident Evil Playlist */}
            <div style={{ width: '100%' }}>
              <div style={{ 
                aspectRatio: '16/9', 
                width: '100%', 
                backgroundColor: '#000',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
                border: '1px solid rgba(145, 71, 254, 0.2)',
                position: 'relative'
              }}>
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/videoseries?list=PL-d1NgR1ZFxDDovwE84JBRuhHMBUE1P12"
                  title="Resident Evil Playlist"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div style={{ marginTop: '1.5rem' }}>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 900, marginBottom: '0.5rem' }}>Resident Evil Series</h3>
                <p style={{ color: 'var(--color-text-dim)', fontSize: '0.9rem', marginBottom: '1.5rem', lineHeight: 1.5 }}>
                  The complete survival horror journey. Experience every jump scare and boss fight.
                </p>
                <a href="https://www.youtube.com/playlist?list=PL-d1NgR1ZFxDDovwE84JBRuhHMBUE1P12" target="_blank" rel="noreferrer" style={{ 
                  color: 'var(--color-purple)', 
                  fontWeight: 700, 
                  fontSize: '0.8rem', 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.4rem',
                  textDecoration: 'none'
                }}>
                  OPEN PLAYLIST <ExternalLink size={14} />
                </a>
              </div>
            </div>

            {/* BO7 Ranked Grind Playlist */}
            <div style={{ width: '100%' }}>
              <div style={{ 
                aspectRatio: '16/9', 
                width: '100%', 
                backgroundColor: '#000',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
                border: '1px solid rgba(145, 71, 254, 0.2)',
                position: 'relative'
              }}>
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/videoseries?list=PL-d1NgR1ZFxCRyNADpKFpipSiJnrDT_kJ"
                  title="BO7 BRONZE TO IRIDESCENT Playlist"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div style={{ marginTop: '1.5rem' }}>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 900, marginBottom: '0.5rem' }}>BO7 BRONZE TO IRIDESCENT!</h3>
                <p style={{ color: 'var(--color-text-dim)', fontSize: '0.9rem', marginBottom: '1.5rem', lineHeight: 1.5 }}>
                  The ultimate competitive grind. Watch the journey from Bronze all the way to Iridescent in this high-octane ranked series.
                </p>
                <a href="https://www.youtube.com/playlist?list=PL-d1NgR1ZFxCRyNADpKFpipSiJnrDT_kJ" target="_blank" rel="noreferrer" style={{ 
                  color: 'var(--color-purple)', 
                  fontWeight: 700, 
                  fontSize: '0.8rem', 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.4rem',
                  textDecoration: 'none'
                }}>
                  OPEN PLAYLIST <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Merch Section */}
      <section id="merch" style={{ padding: '10rem 0', backgroundColor: 'var(--color-bg-darker)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '5rem' }}>
            <div>
              <h2 className="section-title" style={{ marginBottom: '1rem' }}>Team Gear</h2>
              <p style={{ color: 'var(--color-text-dim)' }}>Official Tempr Esports apparel powered by Raven.GG</p>
            </div>
            <a href="https://raven.gg/stores/temprgg/" target="_blank" rel="noreferrer" style={{ 
              color: 'var(--color-purple)', 
              fontWeight: 700, 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.5rem',
              fontSize: '0.9rem'
            }}>
              BROWSE ALL <ChevronRight size={18} />
            </a>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem' }}>
            {[
              { 
                name: 'T - UP Jersey', 
                price: '$55.00', 
                tag: 'SIGNATURE',
                desc: 'Official 2025 competitive jersey',
                img: 'merch-jersey.png'
              },
              { 
                name: 'Lunar Year Jersey', 
                price: '$55.00', 
                tag: '2025 SPECIAL',
                desc: 'Limited edition themed jersey',
                img: 'merch-lunar.png'
              },
              { 
                name: 'Legacy Hoodie', 
                price: '$70.00', 
                tag: 'CLASSIC',
                desc: 'Premium heavyweight performance hoodie',
                img: 'merch-hoodie.png'
              },
              { 
                name: 'Legacy Jacket', 
                price: '$70.00', 
                tag: 'NEW ARRIVAL',
                desc: 'Sleek zip-up team performance jacket',
                img: 'merch-jacket.png'
              }
            ].map((item) => (
              <div key={item.name} className="card" style={{ padding: '0.5rem', position: 'relative' }}>
                <div style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', backgroundColor: 'var(--color-purple)', color: 'white', padding: '0.2rem 0.6rem', fontSize: '0.65rem', fontWeight: 900, borderRadius: '2px', zIndex: 1 }}>
                  {item.tag}
                </div>
                <div style={{ aspectRatio: '1/1', backgroundColor: 'rgba(255,255,255,0.02)', borderRadius: '4px', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                  <img src={item.img} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>
                <div style={{ padding: '0 1rem 1.5rem' }}>
                  <div style={{ color: 'var(--color-purple)', fontSize: '0.7rem', fontWeight: 800, marginBottom: '0.5rem', letterSpacing: '0.1em' }}>TEMPR X RAVEN.GG</div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 900, marginBottom: '0.3rem' }}>{item.name}</h3>
                  <p style={{ fontSize: '0.8rem', color: 'var(--color-text-dim)', marginBottom: '1.5rem', lineHeight: 1.4 }}>{item.desc}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontWeight: 900, fontSize: '1.4rem', color: 'var(--color-white)' }}>{item.price}</span>
                    <a href="https://raven.gg/stores/temprgg/" target="_blank" rel="noreferrer" className="btn-primary" style={{ padding: '0.6rem 1.2rem', fontSize: '0.85rem', textDecoration: 'none' }}>BUY NOW</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ padding: '10rem 0', backgroundColor: 'var(--color-bg-darker)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '5rem', alignItems: 'center' }}>
            <div>
              <h2 className="section-title">Get In Touch</h2>
              <p style={{ color: 'var(--color-text-dim)', fontSize: '1.1rem', marginBottom: '3rem', lineHeight: 1.6 }}>
                Interested in sponsorship, team opportunities, or just want to say hi? Drop us a message and we'll get back to you within 24 hours.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '40px', height: '40px', backgroundColor: 'rgba(145, 71, 254, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-purple)' }}>
                    <Mail size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--color-text-dim)', fontWeight: 800 }}>EMAIL</div>
                    <a href="mailto:Damienwolfe21@gmail.com" style={{ fontWeight: 700, textDecoration: 'none', color: 'white' }}>Damienwolfe21@gmail.com</a>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '40px', height: '40px', backgroundColor: 'rgba(145, 71, 254, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-purple)' }}>
                    <Users size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--color-text-dim)', fontWeight: 800 }}>DISCORD</div>
                    <a href="https://discord.gg/S67NpxQtuk" target="_blank" rel="noreferrer" style={{ fontWeight: 700, textDecoration: 'none', color: 'white' }}>discord.gg/S67NpxQtuk</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="card" style={{ padding: '2.5rem' }}>
              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 800, marginBottom: '0.5rem', color: 'var(--color-text-dim)' }}>NAME</label>
                  <input type="text" required style={{ width: '100%', backgroundColor: '#18181B', border: '1px solid #2F2F35', padding: '0.8rem', borderRadius: '4px', color: 'white', outline: 'none' }} placeholder="Your Name" />
                </div>
                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 800, marginBottom: '0.5rem', color: 'var(--color-text-dim)' }}>EMAIL</label>
                  <input type="email" required style={{ width: '100%', backgroundColor: '#18181B', border: '1px solid #2F2F35', padding: '0.8rem', borderRadius: '4px', color: 'white', outline: 'none' }} placeholder="your@email.com" />
                </div>
                <div style={{ marginBottom: '2rem' }}>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 800, marginBottom: '0.5rem', color: 'var(--color-text-dim)' }}>MESSAGE</label>
                  <textarea rows={4} required style={{ width: '100%', backgroundColor: '#18181B', border: '1px solid #2F2F35', padding: '0.8rem', borderRadius: '4px', color: 'white', outline: 'none', resize: 'none' }} placeholder="How can we help?"></textarea>
                </div>
                <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '1rem' }} disabled={formStatus !== 'idle'}>
                  {formStatus === 'idle' && 'SEND MESSAGE'}
                  {formStatus === 'sending' && 'SENDING...'}
                  {formStatus === 'sent' && 'MESSAGE SENT!'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '6rem 0 3rem', textAlign: 'center', borderTop: '1px solid rgba(47, 47, 53, 0.5)' }}>
        <div className="container">
          <div style={{ fontSize: '1.8rem', fontWeight: 900, letterSpacing: '-0.05em', marginBottom: '2.5rem' }}>
            WOLFEE<span style={{ color: 'var(--color-purple)' }}>PACKK</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2.5rem', marginBottom: '3.5rem', color: 'var(--color-text-dim)', fontWeight: 700, fontSize: '0.8rem' }}>
            <a href="#stream">LIVE</a>
            <a href="#content">CONTENT</a>
            <a href="#schedule">SCHEDULE</a>
            <a href="#merch">MERCH</a>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '3.5rem' }}>
            <a href="https://twitch.tv/wolfeepackk" target="_blank" rel="noreferrer" className="social-icon"><Twitch size={20} /></a>
            <a href="https://youtube.com/@wolfeepackk" target="_blank" rel="noreferrer" className="social-icon"><Youtube size={20} /></a>
            <a href="https://x.com/wolfe2123" target="_blank" rel="noreferrer" className="social-icon"><Twitter size={20} /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-icon"><Instagram size={20} /></a>
          </div>
          <p style={{ color: '#444', fontSize: '0.75rem', fontWeight: 600 }}>
            © 2026 WOLFEEPACKK E-SPORTS. DESIGNED FOR CHAMPIONS. ALL RIGHTS RESERVED.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
