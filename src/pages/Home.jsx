import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

const TOP_PROJECTS = [
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=600&q=80",
    title: "Porträt im Studio",
    year: 2024,
    category: "Porträt",
  },
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?w=600&q=80",
    title: "Herbst am See",
    year: 2023,
    category: "Landschaft",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&q=80",
    title: "Architektur Minimal",
    year: 2022,
    category: "Architektur",
  },
];

export default function Home() {
  const navigate = useNavigate();
  const [lightbox, setLightbox] = useState(null);
  return (
    <main>
      <section className="hero">
        <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&q=80" alt="Hero Landschaft" style={{width: '100%', maxHeight: '60vh', objectFit: 'cover', borderRadius: '1.5rem'}} />
        <h1>Momente. Licht. Emotionen.</h1>
        <p>Willkommen auf meiner Fotografen-Webseite!</p>
        <button onClick={() => navigate('/portfolio')}>Portfolio ansehen</button>
      </section>
      <section className="preview-projects">
        <h2>Top-Projekte</h2>
        <div className="preview-grid">
          {TOP_PROJECTS.map(img => {
            return (
              <button
                key={img.id}
                className="preview-img gallery-item"
                style={{aspectRatio: '4/3', padding: 0, border: 'none', background: 'none', position: 'relative', outline: 'none'}}
                onClick={() => setLightbox(img)}
                tabIndex={0}
                aria-label={img.title}
              >
                <img src={img.src} alt={img.title} style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '1rem', filter: 'brightness(0.97)', transition: 'transform 0.2s, filter 0.2s'}} />
                <div className="gallery-overlay" style={{position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.18)', color: '#fff', opacity: 0, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', borderRadius: '1rem', padding: 12, fontSize: 16, fontWeight: 500, transition: 'opacity 0.2s'}}>
                  <span>{img.title} <span style={{fontWeight: 400, fontSize: 14}}>({img.year})</span></span>
                  <span style={{fontSize: 13}}>{img.category}</span>
                </div>
              </button>
            );
          })}
        </div>
        {/* Lightbox-Modal */}
        {lightbox && (
          <div
            tabIndex={-1}
            style={{position: 'fixed', inset: 0, background: 'rgba(24,24,24,0.98)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center'}}
            onClick={() => setLightbox(null)}
            onKeyDown={e => { if (e.key === 'Escape') setLightbox(null); }}
          >
            <div style={{background: '#232323', borderRadius: 12, maxWidth: 900, width: '90vw', padding: 24, position: 'relative', color: '#eaeaea', boxShadow: '0 4px 32px rgba(0,0,0,0.45)', maxHeight: '75vh', overflowY: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'center'}} onClick={e => e.stopPropagation()}>
              <img src={lightbox.src} alt={lightbox.title} style={{width: '100%', borderRadius: 8, marginBottom: 16, background: '#181818', maxHeight: '60vh', objectFit: 'contain'}} />
              <div style={{marginBottom: 8, color: '#ffb400'}}><b>{lightbox.title}</b> <span style={{color: '#aaa'}}>({lightbox.year})</span></div>
              {lightbox.category && <div style={{fontSize: 15, marginBottom: 8}}>{lightbox.category}</div>}
              <button onClick={() => setLightbox(null)} style={{position: 'absolute', top: 12, right: 12, background: '#333', color: '#ffb400', border: 'none', borderRadius: 20, width: 36, height: 36, fontSize: 22, cursor: 'pointer'}}>×</button>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
