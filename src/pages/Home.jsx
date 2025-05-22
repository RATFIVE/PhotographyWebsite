// Startseite (Home)
export default function Home() {
  return (
    <main>
      <section className="hero">
        <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&q=80" alt="Hero Landschaft" style={{width: '100%', maxHeight: '60vh', objectFit: 'cover', borderRadius: '1.5rem'}} />
        <h1>Momente. Licht. Emotionen.</h1>
        <p>Willkommen auf meiner Fotografen-Webseite!</p>
        <button>Portfolio ansehen</button>
      </section>
      <section className="preview-projects">
        <h2>Top-Projekte</h2>
        <div className="preview-grid">
          <div className="preview-img">
            <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=600&q=80" alt="Porträt" style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '1rem'}} />
            <div className="preview-caption">Porträt | 2024</div>
          </div>
          <div className="preview-img">
            <img src="https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?w=600&q=80" alt="Landschaft" style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '1rem'}} />
            <div className="preview-caption">Landschaft | 2023</div>
          </div>
          <div className="preview-img">
            <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=600&q=80" alt="Architektur" style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '1rem'}} />
            <div className="preview-caption">Architektur | 2022</div>
          </div>
        </div>
      </section>
    </main>
  );
}
