// Leistungen & Preise
export default function Services() {
  return (
    <main>
      <h1>Leistungen & Preise</h1>
      <section className="services-list">
        <h2>Dienstleistungen</h2>
        <ul>
          <li>Hochzeitsfotografie – ab 1.200 €</li>
          <li>Businessportraits – ab 350 €</li>
          <li>Fine-Art-Fotografie – ab 500 €</li>
        </ul>
      </section>
      <section className="pricing">
        <h2>Preise</h2>
        <p>Individuelle Angebote auf Anfrage. Alle Preise inkl. Bildbearbeitung und privater Nutzungsrechte.</p>
      </section>
      <section className="faq">
        <h2>FAQ</h2>
        <ul>
          <li><b>Wie läuft ein Shooting ab?</b> – Nach Vorgespräch und Terminvereinbarung fotografiere ich vor Ort oder im Studio. Auswahl und Bearbeitung der Bilder erfolgt innerhalb einer Woche.</li>
          <li><b>Wie lange dauert die Lieferung?</b> – In der Regel 3–7 Werktage nach Auswahl der Favoriten.</li>
          <li><b>Welche Nutzungsrechte sind enthalten?</b> – Private Nutzung ist inklusive, gewerbliche Nutzung auf Anfrage.</li>
        </ul>
      </section>
    </main>
  );
}
