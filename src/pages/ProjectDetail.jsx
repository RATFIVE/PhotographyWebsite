// Einzelbild- bzw. Projektdetailseite
export default function ProjectDetail() {
  return (
    <main>
      <h1>Projekt-Titel</h1>
      <img src="https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?w=1200&q=80" alt="Projektbild" style={{width: '100%', maxWidth: 900, borderRadius: '1.5rem'}} />
      <section className="project-details">
        <h2>Technische Details</h2>
        <ul>
          <li>Kamera: Sony A7 III</li>
          <li>Objektiv: 24-70mm f/2.8</li>
          <li>Belichtung: 1/200s, f/4, ISO 100</li>
        </ul>
        <h2>Hintergrundgeschichte</h2>
        <p>Entstanden auf einer Reise durch Norwegen. Ziel war es, die Ruhe und Weite der Landschaft einzufangen.</p>
        <div className="related-projects">Ähnliche Arbeiten: <a href="#">Landschaft 2022</a></div>
      </section>
    </main>
  );
}
