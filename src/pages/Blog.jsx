// Blog / News
export default function Blog() {
  return (
    <main>
      <h1>Blog & News</h1>
      <section className="blog-list">
        <article>
          <h2>Projekt-Update: Islandreise</h2>
          <img src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=600&q=80" alt="Island Landschaft" style={{width: '100%', borderRadius: '1rem'}} />
          <p>Im Mai 2025 war ich zwei Wochen in Island unterwegs. Die spektakulären Wasserfälle und das Licht waren ein Traum für Landschaftsfotografie!</p>
        </article>
        <article>
          <h2>Behind the Scenes: Porträtshooting</h2>
          <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&q=80" alt="Porträt BTS" style={{width: '100%', borderRadius: '1rem'}} />
          <p>So läuft ein Porträtshooting bei mir ab: lockere Atmosphäre, viel Lachen und echte Emotionen. Tipps für Models und Einsteiger inklusive!</p>
        </article>
      </section>
    </main>
  );
}
