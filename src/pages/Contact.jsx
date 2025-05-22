// Kontakt & Buchung
export default function Contact() {
  return (
    <main>
      <h1>Kontakt & Buchung</h1>
      <form className="contact-form">
        <label>Name*<input type="text" required placeholder="Dein Name" /></label>
        <label>E-Mail*<input type="email" required placeholder="deine@email.de" /></label>
        <label>Nachricht*<textarea required placeholder="Wie kann ich helfen?" /></label>
        <button type="submit">Absenden</button>
      </form>
      <section className="booking">
        <h2>Direkt buchen</h2>
        <a href="https://calendly.com/" target="_blank" rel="noopener noreferrer">Kalender öffnen (Beispiel)</a>
      </section>
      <section className="social-media">
        <h2>Folge mir</h2>
        <div className="icons">
          <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a> |
          <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">Facebook</a>
        </div>
        <p>E-Mail: kontakt@deine-seite.de<br />Telefon: 01234/567890</p>
      </section>
      <section className="newsletter">
        <h2>Newsletter</h2>
        <form>
          <input type="email" placeholder="E-Mail für Newsletter" />
          <button type="submit">Anmelden</button>
        </form>
      </section>
    </main>
  );
}
