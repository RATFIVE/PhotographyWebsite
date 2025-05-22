// Portfolio-Übersicht mit Kategorien und Galerie-Grid
export default function Portfolio() {
  return (
    <main>
      <h1>Portfolio</h1>
      <nav className="portfolio-categories">
        <button>Landschaft</button>
        <button>Porträt</button>
        <button>Architektur</button>
      </nav>
      <div className="gallery-grid">
        <div className="gallery-item">
          <img src="https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?w=600&q=80" alt="Landschaft" style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '1rem'}} />
          <div className="gallery-caption">Landschaft | 2023 | Sony A7 III</div>
        </div>
        <div className="gallery-item">
          <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=600&q=80" alt="Porträt" style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '1rem'}} />
          <div className="gallery-caption">Porträt | 2024 | Canon R6</div>
        </div>
        <div className="gallery-item">
          <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&q=80" alt="Architektur" style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '1rem'}} />
          <div className="gallery-caption">Architektur | 2022 | Nikon Z6</div>
        </div>
      </div>
    </main>
  );
}
